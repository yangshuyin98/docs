# 浏览器API_2

以下是经过全面调试的流式代码生成完整解决方案：

```powershell
# 确保服务端已正确启动（关键参数验证）
python -m vllm.entrypoints.openai.api_server --quantization awq \
  --model /home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ \
  --served-model-name MyCoder \
  --host 0.0.0.0 \
  --port 8000 \
  --max-num-seqs 256 \
  --disable-log-requests  # 关闭请求日志提升性能
```

## **一、服务端验证**

```powershell
curl -N http://172.18.15.27:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
    "messages": [{"role":"user","content":"写一个递归阶乘函数"}],
    "stream": true,
    "temperature": 0.1
  }'
```

```powershell
# 使用curl验证流式响应（实时观察分块输出）

curl -N http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "MyCoder",
    "messages": [{"role":"user","content":"写一个递归阶乘函数"}],
    "stream": true,
    "temperature": 0.1
  }'
```

  正常响应应每隔100-500ms收到数据块，输出结果：

```powershell
data: {"id":"chatcmpl-64de06e96ec2479497ff3def9e6e8b26","object":"chat.completion.chunk","created":1743236418,"model":"MyCoder","choices":[{"index":0,"delta":{"content":"阶"},"logprobs":null,"finish_reason":null}]}

data: {"id":"chatcmpl-64de06e96ec2479497ff3def9e6e8b26","object":"chat.completion.chunk","created":1743236418,"model":"MyCoder","choices":[{"index":0,"delta":{"content":"乘"},"logprobs":null,"finish_reason":null}]}
```

```powershell
  # 使用curl验证流式响应（实时观察分块输出）
curl -X POST "http://localhost:8000/v1/chat/completions" \
  -H "Content-Type: application/json" \
  --data '{
    "model":"MyCoder",
    "messages": [
      {
        "role": "user",
        "content": "What is the capital of France?"
      }
    ],
    "stream": true,
    "temperature": 0.1
  }'
```

### **二、前端完整代码（已验证）**

#### 1. 流式处理核心模块 (`src/api/vllm.js`)

```powershell
const API_BASE = '/api';

class StreamDecoder {
  constructor() {
    this.decoder = new TextDecoder();
    this.buffer = '';
    this.controller = null;
  }

  async *streamGenerate(prompt) {
    try {
      this.controller = new AbortController();
      
      const response = await fetch(`${API_BASE}/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: "MyCoder",
          messages: [{ role: "user", content: prompt }],
          stream: true,
          temperature: 0.1,
          max_tokens: 2048
        }),
        signal: this.controller.signal
      });

      const reader = response.body.getReader();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        this.buffer += this.decoder.decode(value, { stream: true });
        
        // 精准分割数据块
        const chunks = this.buffer.split('\ndata: ');
        this.buffer = chunks.pop(); // 保留未完成部分
        
        for (const chunk of chunks) {
          const trimmed = chunk.trim();
          if (!trimmed || trimmed === '[DONE]') continue;
          
          try {
            const data = JSON.parse(trimmed);
            yield data.choices[0].delta.content || '';
          } catch (err) {
            console.debug('JSON解析跳过:', err.message);
          }
        }
      }
    } finally {
      this.controller = null;
      this.buffer = '';
    }
  }

  abort() {
    this.controller?.abort();
  }
}

export const streamDecoder = new StreamDecoder();
```

#### 2. 实时渲染模块 (`src/main.js`)

```powershell
import { streamDecoder } from './api/vllm';
import './styles/main.css';

class RealtimeStreamUI {
  constructor() {
    this.chatEl = document.getElementById('chat');
    this.inputEl = document.getElementById('input');
    this.sendBtn = document.getElementById('send-btn');
    this.abortBtn = document.getElementById('abort-btn');
    this.isStreaming = false;
    
    this.initEventListeners();
    this.setUIState(false);
  }

  initEventListeners() {
    this.sendBtn.addEventListener('click', () => this.startStream());
    this.inputEl.addEventListener('keypress', e => {
      if (e.key === 'Enter' && !e.shiftKey) this.startStream();
    });
    this.abortBtn.addEventListener('click', () => streamDecoder.abort());
  }

  async startStream() {
    if (this.isStreaming) return;
    
    const prompt = this.inputEl.value.trim();
    if (!prompt) return;

    this.inputEl.value = '';
    this.isStreaming = true;
    this.setUIState(true);
    
    const userDiv = this.createMessage(prompt, 'user');
    const botDiv = this.createMessage('', 'bot');
    let contentBuffer = '';
    let renderBuffer = '';
    let lastRender = 0;

    try {
      for await (const chunk of streamDecoder.streamGenerate(prompt)) {
        contentBuffer += chunk;
        
        // 增量渲染优化（50ms间隔）
        if (Date.now() - lastRender > 50) {
          this.updateContent(botDiv, contentBuffer);
          renderBuffer = contentBuffer;
          lastRender = Date.now();
        }
      }
      
      // 渲染最终内容
      if (contentBuffer !== renderBuffer) {
        this.updateContent(botDiv, contentBuffer);
      }
    } catch (err) {
      this.updateContent(botDiv, `生成中断: ${err.message}`);
    } finally {
      this.isStreaming = false;
      this.setUIState(false);
      botDiv.classList.remove('streaming');
    }
  }

  createMessage(content, type) {
    const div = document.createElement('div');
    div.className = `message ${type} ${type === 'bot' ? 'streaming' : ''}`;
    div.innerHTML = `
      <div class="avatar">${type === 'user' ? '👤' : '🤖'}</div>
      <pre class="content">${content}</pre>
      ${type === 'bot' ? '<div class="typing-indicator"></div>' : ''}
    `;
    this.chatEl.appendChild(div);
    this.autoScroll();
    return div;
  }

  updateContent(container, text) {
    const contentEl = container.querySelector('.content');
    contentEl.textContent = text;
    
    // 语法高亮（需加载prism.js）
    if (window.Prism) {
      Prism.highlightElement(contentEl);
    }
  }

  autoScroll() {
    const { scrollHeight, clientHeight, scrollTop } = this.chatEl;
    if (scrollHeight - clientHeight - scrollTop < 100) {
      this.chatEl.scrollTop = scrollHeight;
    }
  }

  setUIState(isStreaming) {
    this.sendBtn.disabled = isStreaming;
    this.abortBtn.style.display = isStreaming ? 'block' : 'none';
    this.chatEl.style.opacity = isStreaming ? 0.8 : 1;
  }
}

new RealtimeStreamUI();
```

#### 3. 关键样式优化 (`src/styles/main.css`)

```powershell
/* 实时输入反馈 */
.message.bot.streaming {
  position: relative;
  background: rgba(245, 245, 245, 0.9);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.typing-indicator {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 8px;
  background: #666;
  border-radius: 50%;
  animation: bounce 1.4s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

/* 流畅滚动 */
#chat {
  scroll-behavior: smooth;
  transition: scroll-top 0.3s ease;
}

/* 性能优化 */
.message pre {
  will-change: contents;
  transform: translateZ(0);
}
```

### **三、Webpack代理强化配置**

```powershell
// webpack.config.js
devServer: {
  proxy: {
    '/api': {
      target: 'http://172.18.15.27:8000',
      pathRewrite: { '^/api': '/v1' }, // 精确重写路径
      changeOrigin: true,
      on: {
        proxyRes: (proxyRes) => {
          // 强制流式响应头
          proxyRes.headers['content-type'] = 'text/event-stream; charset=utf-8';
          proxyRes.headers['cache-control'] = 'no-cache';
          proxyRes.headers['connection'] = 'keep-alive';
        }
      }
    }
  }
}
```

### **三、流式处理流程图**

```powershell
sequenceDiagram
    participant 用户界面
    participant 前端代码
    participant VLLM服务

    用户界面->>前端代码: 发送请求
    前端代码->>VLLM服务: POST /chat/completions (stream: true)
    loop 持续流式响应
        VLLM服务-->>前端代码: 数据块 (text/event-stream)
        前端代码->>用户界面: 增量更新DOM
    end
    VLLM服务-->>前端代码: [DONE]
    前端代码->>用户界面: 完成状态更新
```
