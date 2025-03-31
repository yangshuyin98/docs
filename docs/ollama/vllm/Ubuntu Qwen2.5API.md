# Qwen2.5-Coder-7B-Instruct-AWQ模型

以下是使用VLLM部署Qwen2.5-Coder-7B-Instruct-AWQ模型并通过PyCharm调用其API的分步指南：

```bash
确保模型目录包含：
model.safetensors  # 必须存在
config.json        # 必须包含"quantization_config"字段
```

硬件要求：

| 组件 | 最低要求              | 推荐配置        |
| :--- | :-------------------- | :-------------- |
| GPU  | NVIDIA GTX 1080 (8GB) | RTX 3090 (24GB) |
| RAM  | 16GB                  | 32GB+           |
| VRAM | 8GB                   | 16GB+           |

性能优化参数：

```bash
# 启动服务器时添加这些参数
--tensor-parallel-size 2  # 多GPU并行
--gpu-memory-utilization 0.9  # 显存利用率
--max-num-seqs 64        # 提高并发处理量
--enforce-eager          # 小显存模式
```








## 1.环境清理与准备

```
# 创建纯净虚拟环境（避免旧依赖干扰）
python -m venv vllm_env
```

## 2.确认虚拟环境激活

```Linux
source vllm_env/bin/activate
```



## 3.安装依赖

```
# 安装vLLM 0.8.2（需与numpy<2.0兼容）
pip install vllm==0.8.2
```

安装必要的库，比如vllm和openai。

```
pip install  openai
```





## 4.启动VLLM API服务器

#### 在Ubuntu终端启动API服务器：

```
python -m vllm.entrypoints.openai.api_server --model /home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ --quantization awq --host 0.0.0.0 --port 8000 
```

参数说明‌：
--model: 模型路径（需替换为实际路径）。
--quantization awq: 启用AWQ量化加速。

--allowed-origins '["*"]'  # JSON 数组格式     允许所有域名

--host 0.0.0.0: 允许外部访问。
--port 8000: 指定API端口。



```
python -m vllm.entrypoints.openai.api_server --model /home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ --quantization awq_marlin --host 0.0.0.0 --port 8000 --generation-config vllm  --served-model-name MyCoder
```

启动时指定：

自定义API端点：--served-model-name MyCoder

```
--served-model-name MyCoder  # 自定义模型名称
```

--served-model-name MyCoder \  # 与API请求中的model参数一致



--generation-config vllm 

--quantization awq_marlin 该模型在运行时可转换为awq_marlin。使用awq_marlin内核。

{'reward', 'embed', 'generate', 'score', 'classify'}

此模型支持多种任务：{“转发”、“嵌入”、“生成”、“评分”、“分类”}。默认为“生成”。

Using default chat sampling params from model: {'repetition_penalty': 1.1, 'temperature': 0.7, 'top_k': 20, 'top_p': 0.8}

‘重复惩罚’：1.1，
“温度”：0.7，
'top_k'：20，
'top_p'：0.8

```
INFO 03-28 08:19:16 [api_server.py:1028] Starting vLLM API server on http://0.0.0.0:8000
INFO 03-28 08:19:16 [launcher.py:26] Available routes are:
INFO 03-28 08:19:16 [launcher.py:34] Route: /openapi.json, Methods: GET, HEAD
INFO 03-28 08:19:16 [launcher.py:34] Route: /docs, Methods: GET, HEAD
INFO 03-28 08:19:16 [launcher.py:34] Route: /docs/oauth2-redirect, Methods: GET, HEAD
INFO 03-28 08:19:16 [launcher.py:34] Route: /redoc, Methods: GET, HEAD
INFO 03-28 08:19:16 [launcher.py:34] Route: /health, Methods: GET
INFO 03-28 08:19:16 [launcher.py:34] Route: /load, Methods: GET
INFO 03-28 08:19:16 [launcher.py:34] Route: /ping, Methods: POST, GET
INFO 03-28 08:19:16 [launcher.py:34] Route: /tokenize, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /detokenize, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/models, Methods: GET
INFO 03-28 08:19:16 [launcher.py:34] Route: /version, Methods: GET
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/chat/completions, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/completions, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/embeddings, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /pooling, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /score, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/score, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/audio/transcriptions, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /rerank, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v1/rerank, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /v2/rerank, Methods: POST
INFO 03-28 08:19:16 [launcher.py:34] Route: /invocations, Methods: POST
INFO:     Started server process [709]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

点击运行按钮，控制台输出 `INFO: Application startup complete` 表示启动成功。



## 5.编写PyCharm中创建客户端文件：

###  配置 PyCharm‌

1. 在 PyCharm 中打开项目，进入 `File > Settings > Project: <项目名> > Python Interpreter`。
2. 点击齿轮图标选择 `Add Interpreter > Existing`。
3. 找到虚拟环境的 Python 解释器路径（例如 `~/vllm_env/bin/python`）。

#### 网络配置‌：

若VLLM服务部署在远程服务器，需将 localhost 替换为服务器IP，并确保防火墙开放端口（如8000）。

错误排查‌：检查VLLM日志（vllm.log）是否有启动错误。
测试API连通性：curl http://172.18.15.27:8000/v1/models

```
{"object":"list","data":[{"id":"/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ","object":"model","created":1743128501,"owned_by":"vllm","root":"/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ","parent":null,"max_model_len":32768,"permission":[{"id":"modelperm-e3b9d839f2de483187de047503f31f1f","object":"model_permission","created":1743128501,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":true,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]}]}
```

提供服务端的完整启动命令

 curl http://172.18.15.27:8000/v1/models 的输出结果

```
{"object":"list","data":[{"id":"MyCoder","object":"model","created":1743145239,"owned_by":"vllm","root":"/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ","parent":null,"max_model_len":32768,"permission":[{"id":"modelperm-02048ca2299f4ce89ac9a57253c52d57","object":"model_permission","created":1743145239,"allow_create_engine":false,"allow_sampling":true,"allow_logprobs":true,"allow_search_indices":false,"allow_view":true,"allow_fine_tuning":false,"organization":"*","group":null,"is_blocking":false}]}]}
```



扩展功能‌

调整生成参数‌：
修改API请求中的 temperature, top_p, max_tokens 等参数控制生成结果。

`top_p`、`top_k` 以及 `temperature` 都是与大语言模型生成文本过程相关的采样参数。以下是对每个参数的解释：

参数组合策略
保守生成（代码/事实类）：
top_p=0.8
top_k=30
temperature=0.3
创意生成（故事/文案类）：
top_p=0.95
top_k=0    # 禁用 top_k
temperature=1.0
平衡模式（通用对话）：
top_p=0.9
top_k=50
temperature=0.7

 注意：与 top_k 二选一使

1. **`repetition_penalty`:**
   - 中文含义：重复惩罚
   - 作用：用于控制模型在生成文本时对重复使用相同词汇或短语的限制。
   - 解释：较高的 `repetition_penalty` 值会减少模型重复相似内容的可能性，从而降低结果中出现重复词语的风险。

2. **`temperature`:**
   - 中文含义：温度
   - 作用：控制生成文本的随机性和创造性程度。
   - 解释：
     - 温度较高（例如 0.9）时，模型会更加随机和富有创造力，可能会跳脱出常规思维进行创作。但若温度过高（如接近或超过 1），可能导致输出的内容不够连贯，甚至出现怪异的结果。
     - 温度较低（例如 0.3）时，模型的决策更加保守和确定性，倾向于选择较为常见和合理的表达方式，输出更加稳定和收敛。

3. **`top_k`:**
   - 中文含义：限制候选词数量，防止生成重复内容
   - 推荐值域：20~100
   - 作用：在生成下一个词时，从所有可能候选中随机选择前 k 个概率最高的词汇。
   - 解释：
     - 较小的 `top_k` 值（比如 10）会使模型选择范围较窄，输出更加集中和保守。
     - 较大的 `top_k` 值（比如 50 或更高）会让模型有更多选择余地，从而生成更加多样化且意想不到的结果。
   
4. **`top_p`:**
   - 中文含义：核采样（概率累积阈值）
   - 推荐值域：0.5~0.95                                                  
   - 作用：基于词汇的概率累积和，只在所有候选中选择概率累积和超过 `p%` 的范围内的词汇。
   - 解释：
     - 较小的 `top_p` 值（例如 0.2）会极大地限制生成的内容，减少结果的多样性。
     - 较大的 `top_p` 值（例如 0.8 或更高）则允许更多的词汇选择，增加生成内容的新意和不可预测性。

---

总结来说：
- **温度 (`temperature`) 是创意与稳定性的平衡点。**
- **顶部 k (`top_k`) 和 顶部 p (`top_p`) 都是控制多样性的方式，分别从数量上的-top k 个或概率累积的-top p% 值选择候选项。**
- **重复惩罚 (`repetition_penalty`) 则是用来防止模型在生成文本时过于重复之前的内容。**

这些参数可以根据具体需求进行调整，从而影响模型输出的结果风格和质量。



#### 编写API调用代码‌

```
import requests
import json

url = "http://172.18.15.27:8000/v1/completions"

headers = {
    "Content-Type": "application/json"
}

data = {
    "model": "/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
    "prompt": "Hello, my name is",
    "max_tokens": 9000,
    "temperature": 0.7,
    "top_k":50,
    "top_p":0.8
}

response = requests.post(url, headers=headers, data=json.dumps(data))
print("Status Code:", response.status_code)
print("Response JSON:\n", json.dumps(response.json(), indent=2))

```

输出内容为：

```
D:\WEB\PycharmProjects\venv\Scripts\python.exe D:\WEB\PycharmProjects\pythonProject1\markdown\openai_client.py 
Status Code: 200
Response JSON:
 {
  "id": "cmpl-fda6dd053c2f421d8fec68ae3463b96f",
  "object": "text_completion",
  "created": 1743129660,
  "model": "/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
  "choices": [
    {
      "index": 0,
      "text": " [Your Name] and I am a [Your Profession]. I am writing to you today because I am interested in learning more about [Your Area of Interest]. I believe that your expertise and knowledge in this field would be invaluable to me and I am hoping that you could share some of your insights and advice with me. I am open to any questions you may have and I am excited to learn more about this topic. Thank you for your time and consideration. Sincerely, [Your Name]",
      "logprobs": null,
      "finish_reason": "stop",
      "stop_reason": null,
      "prompt_logprobs": null
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 105,
    "completion_tokens": 100,
    "prompt_tokens_details": null
  }
}

Process finished with exit code 0

```





#### 编写API调用代码‌——stream

流式输出（streaming response），这样客户端可以逐步接收生成的内容，而不是等待整个生成完成。

设置 "stream": True 后，API会持续返回结果（逐token输出），适用于需要实时反馈的场景。

用Python代码调用这个API。需要用到openai库，并配置base_url指向本地运行的VLLM服务器，以及正确的API密钥（虽然VLLM可能不需要，但为了兼容性可能需要设置一个虚拟的）。同时，处理流式响应需要在客户端循环读取返回的数据块，并拼接结果。

```python
# modern/scripts/openai_client.py
from openai import OpenAI

# 初始化客户端
client = OpenAI(
    base_url="http://172.18.15.27:8000/v1",  # 本地访问地址
    api_key="EMPTY",  # VLLM默认不需要鉴权
    max_retries=3,  # 新增HTTP重试
    timeout=10.0    # 单独设置TCP连接超时

)

# 流式请求
stream = client.chat.completions.create(
    model="/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
    messages=[
   	 	{"role": "system","content": "You are a helpful assistant."},
    	{"role": "user", "content": "如何使用你的编程，列举几个例子"}
    ],
    stream=True,  # 启用流式传输
    temperature=0.1,
    top_p=0.9,  # 新增参数
    max_tokens=4096,

)
 print("[系统] 开始生成回答...", flush=True)
# 处理流式响应
for chunk in stream:  # 每个chunk中的choices是一个包含至少一个对象的列表
    content = chunk.choices[0].delta.content #每个choice对象有delta属性，delta里又有content。
    if content:
        print(content, end="", flush=True)
```

VLLM是否支持流式传输？是的，VLLM的OpenAI API接口支持stream参数，当设置为True时，会以流式返回结果，每个token逐个发送。

```
# modern/scripts/openai_client.py
from openai import OpenAI  # 导入OpenAI SDK客户端（用于连接大模型服务）
# 初始化OpenAI客户端配置
client = OpenAI(
    base_url="http://172.18.15.27:8000/v1",  # 配置本地模型服务的API端点地址
    api_key="EMPTY"              # API密钥留空（可能用于内部测试环境）
)

# 定义流式响应处理函数
def stream_response(prompt):
    # 创建流式响应生成器（保持长连接实时获取输出）
    stream = client.chat.completions.create(
        model="/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",  # 指定本地模型路径
        messages=[{"role": "user", "content": prompt}],         # 构建对话消息结构
        stream=True,                             # 启用流式返回模式
        temperature=0.3,                      # 设置随机性参数（低值更确定）
        max_tokens=4096,  # 优化6：调整为模型支持的最大值（避免报错）
        top_p=0.2,  # 新增参数（例如 0.2）会极大地限制生成的内容，减少结果的多样性
        timeout=30.0,  # 优化7：添加超时控制
    )
    print("[开始生成回答...]", end="  ")
    # 逐块处理流式返回内容
    for chunk in stream:
        # 提取当前块的文本内容（delta表示增量更新）
        content = chunk.choices[0].delta.content
        if content:                               # 过滤空内容并实时输出
            print(content, end="", flush=True)         # 禁用换行+强制立即输出


if __name__ == "__main__":
    stream_response("写一个Python正则表达式验证邮箱格式")    # 调用流式响应函数并传入测试提示词
```



通过以上步骤，您可以在PyCharm中实现：1）低延迟的代码生成 2）实时流式输出 3）多轮对话支持。实际部署时建议使用反向代理（如Nginx）增强API安全性。





##### openai_client客户端代码存放位置

(1) 推荐存放路径：

```
modern/
├── scripts/
│   ├── qwen_inference.py  # API服务器启动脚本
│   └── openai_client.py   # 新建的PyCharm客户端代码 👈 推荐位置
```

## 6. 跨系统访问配置

跨系统访问规则：

| 场景       | 服务器位置   | 客户端位置   | 配置要点                                                    |
| :--------- | :----------- | :----------- | :---------------------------------------------------------- |
| 最佳实践   | Ubuntu 20.04 | Ubuntu 20.04 | `base_url="http://localhost:8000/v1"`                       |
| 跨系统访问 | Ubuntu 20.04 | Windows 10   | 需修改为Ubuntu的IP：`base_url="http://[Ubuntu_IP]:8000/v1"` |

### Windows访问Ubuntu服务的步骤：

1. 在Ubuntu终端查看IP地址：

   ```
   ip addr show eth0 | grep "inet "
   ip a  # 查看ens33或eth0的inet地址
   ```

   inet 172.21.136.206/20 brd 172.21.143.255 scope global eth0

3. 修改客户端连接地址：

   ```python
   base_url="http://172.21.136.206:8000/v1"  # 替换为实际Ubuntu IP
   client = OpenAI(
       base_url="http://172.21.136.206:8000/v1",  # 替换此处为Ubuntu的实际IP
       api_key="EMPTY"
   )
   ```
   
4. 开放Ubuntu防火墙：

   ```bash
   sudo ufw allow 8000/tcp
   ```

####  网络连通性验证

在Windows命令提示符中执行：

```bash
ping 172.21.136.206          # 测试基础连通性
telnet 172.21.136.206 8000   # 测试端口可达性（需开启Telnet客户端功能）
```

预期结果：

- ping成功：表示网络层可达
- telnet连接成功：表示VLLM的8000端口已开放

补充说明

1. 地址类型：`172.21.136.206` 是私有地址（B类私有地址范围：`172.16.0.0~172.31.255.255`），适用于内网环境

2. WSL2用户注意：如果您使用的是WSL2，需在Windows中执行以下命令启用端口转发：

   ```powershell
   netsh interface portproxy add v4tov4 listenport=8000 listenaddress=0.0.0.0 connectport=8000 connectaddress=172.21.136.206
   ```

------

您现在可以直接在Windows客户端的代码中使用 `172.21.136.206:8000` 访问Ubuntu的VLLM服务。



### 跨系统访问配置-win10——IP

#### 获取宿主机的局域网IP

启动服务时需绑定到 `0.0.0.0`（所有网络接口），而非默认的 `127.0.0.1`。
修正命令：

```
# 在WSL中执行（确保添加--host参数）
CUDA_VISIBLE_DEVICES=0 vllm serve /path/to/model \
  --host 0.0.0.0 \  # 关键！允许局域网访问
  --port 8102 \
  --max-model-len 2048 \
  --quantization awq
```

在Windows 10（宿主机）中按 `Win+R` 输入 `cmd` 执行：

```
ipconfig | findstr "IPv4"
```

记录输出中的IPv4地址（如 172.18.15.27）。

#### 配置Windows防火墙

##### 1. 开放端口

1. 打开 控制面板 → 系统和安全 → Windows Defender 防火墙 → 高级设置
2. 右键 入站规则 → 新建规则 → 端口 → TCP 8102 → 允许连接 → 完成

##### 2. 验证防火墙规则

```
# 以管理员身份运行PowerShell
Get-NetFirewallRule | Where-Object { $_.LocalPort -eq 8102 }
```

确保状态为 `Enabled` 且动作为 `Allow`

## 7.安全加固（可选）

#### 1. API密钥验证

启动服务时添加 `--api-key` 参数：

```
vllm serve ... --api-key YOUR_SECRET_KEY
```

调用时需携带密钥：

```
from openai import OpenAI
client = OpenAI(
    base_url="http://192.168.1.100:8102/v1",
    api_key="YOUR_SECRET_KEY"
)
```

#### 2. IP白名单限制

在Windows防火墙中配置 入站规则 → 作用域 → 仅允许下列IP地址，添加允许的局域网IP段（如 `192.168.1.0/24`）

## 8.跨设备调用示例代码

#### Python客户端（任意设备）：

```
from openai import OpenAI
# 初始化客户端
client = OpenAI(
    base_url="http://172.18.15.27:8000/v1",
    api_key="EMPTY"  # 若未设置--api-key则留空
)

response = client.completions.create(
    model="/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
    prompt="请写一首关于春天的诗",
    列举使用编程功能的提示词
    max_tokens=4096,
    top_p=0.1,  # 新增参数
    temperature=0.7
)
print(response.choices[0].text)
```

#### JavaScript（浏览器）：

```
// 直接在浏览器控制台测试
fetch('http://172.18.15.27:8000/v1/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: "MyCoder",
    prompt: '如何学习机器学习？',
    max_tokens: 100
  })
})
.then(response => response.json())
.then(data => console.log(data.choices[0].text));
```



##  9.编写API调用代码‌



使用Chat模式‌：
如果模型支持对话，可改用 /v1/chat/completions 接口：

```python
API_URL = "http://172.18.15.27:8000/v1"
data = {
    "messages": [{"role": "user", "content": prompt}]
}
```


通过以上步骤，您可以在PyCharm中轻松调用VLLM部署的模型API。如果需要更复杂的交互逻辑（如对话历史管理），可进一步封装API请求。
