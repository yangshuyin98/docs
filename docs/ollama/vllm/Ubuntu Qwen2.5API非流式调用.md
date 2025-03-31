以下是对非流式调用的解释和完整的前端代码生成案例：

---

### **一、非流式调用效果说明**
| 特性          | 流式调用 (stream=True)                       | 非流式调用 (stream=False)              |
| ------------- | -------------------------------------------- | -------------------------------------- |
| 响应方式      | 实时逐词返回（类似打字机效果）               | 完整生成后一次性返回                   |
| 返回类型      | Generator[CompletionChunk]                   | Completion 对象                        |
| 延迟感知      | 首响应时间快，但整体耗时长                   | 需等待全部生成完成                     |
| JSON 访问方式 | 每个块单独解析：chunk.model_dump()           | 直接访问：response.json()              |
| 示例代码      | choice.delta.content                         | choice.message.content                 |
| 内存占用      | 低（逐步释放）                               | 高（需缓存完整结果）                   |
| 适用场景      | 实时展示/需要渐进式输出/长文本生成、实时显示 | 需要完整代码/后续处理/快速获取完整结果 |

根据 OpenAI 兼容 API 的标准响应格式修正代码：
流式响应结构 (stream=True):

```
{
  "choices": [
    {
      "delta": {  // 增量内容
        "content": "生成文本片段"
      }
    }
  ]
}
```





### **二、完整前端代码生成案例**

#### **文件路径**：`modern/scripts/openai_client.py`
```python
from openai import OpenAI
import time
from pathlib import Path

# 初始化客户端
client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="EMPTY",
    timeout=30.0  # 增加超时时间
)

# 自动获取绝对路径
model_dir = Path(__file__).parent.parent / "models" / "Qwen" / "Qwen2.5-Coder-7B-Instruct-AWQ"
def generate_frontend_code(requirement):
    try:
        # 非流式请求
        start_time = time.time()
        response = client.chat.completions.create(
            model=str(model_dir),
            messages=[
                {"role": "system", "content": "你是一个专业的前端开发工程师，使用HTML/CSS/JS实现需求"},
                {"role": "user", "content": requirement}
            ],
            stream=False,
            temperature=0.2,
            max_tokens=2048
        )
        print(
            f"Tokens用量: {response.usage.total_tokens} (输入: {response.usage.prompt_tokens}, 输出: {response.usage.completion_tokens})")

        # 获取完整响应
        full_code = response.choices[0].message.content
        elapsed = time.time() - start_time

        print(f"✅ 生成完成 (耗时: {elapsed:.2f}s)\n")
        return full_code

    except Exception as e:
        print(f"❌ 请求失败: {str(e)}")
        return None


if __name__ == "__main__":
    # 示例：生成登录页面代码
    prompt = """
    创建一个响应式登录页面，要求：
    1. 包含邮箱和密码输入框
    2. 带表单验证功能
    3. 使用Material Design风格
    4. 适配移动端
    """

    code = generate_frontend_code(prompt)
    if code:
        print("=== 生成代码 ===")
        print(code)

        # 可选：保存到文件
        with open("login_page.html", "w") as f:
            f.write(code)
        print("\n代码已保存到 login_page.html")

```

---

### **三、关键代码解析**
#### 1. **客户端配置优化**
```python
# 可添加超时设置（单位：秒）
client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="EMPTY",
    timeout=30.0  # 增加超时时间
)
```

#### 2. **性能监控增强**
```python
# 在返回前添加性能数据
print(f"Tokens用量: {response.usage.total_tokens} (输入: {response.usage.prompt_tokens}, 输出: {response.usage.completion_tokens})")
```

#### 3. **输出格式化**
```python
# 自动检测代码块并高亮显示
import re

if code:
    # 提取第一个代码块
    code_block = re.search(r'```(?:html|javascript|css)?(.*?)```', code, re.DOTALL)
    if code_block:
        clean_code = code_block.group(1).strip()
        print(clean_code)
```

---

### **四、运行效果示例**
```bash
✅ 生成完成 (耗时: 3.18s)

=== 生成代码 ===
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>响应式登录页面</title>
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
        /* 移动端优先样式 */
        .login-container { max-width: 400px; margin: 2rem auto; padding: 1rem }
        /* ...完整CSS样式... */
    </style>
</head>
<body>
    <!-- 完整HTML结构... -->
    <script>
        // 表单验证逻辑
        function validateForm() {
            const email = document.getElementById('email').value
            if (!/^\w+@\w+\.\w+$/.test(email)) {
                alert('请输入有效的邮箱地址')
                return false
            }
            return true
        }
    </script>
</body>
</html>

代码已保存到 login_page.html
```

---

### **五、生产环境建议**
1. **异常处理增强**
```python
from openai import APIError, APITimeoutError

try:
    # 原有代码
except APITimeoutError:
    print("⏰ 请求超时，请检查服务器负载")
except APIError as e:
    print(f"🔧 服务端错误 (HTTP {e.status_code}): {e.message}")
```

2. **请求重试机制**
```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
def generate_frontend_code(requirement):
    # 原有代码
```

3. **速率限制**
```python
# 在服务端启动时添加参数
python -m vllm.entrypoints.openai.api_server \
  --max-num-batched-tokens 4096 \
  --max-model-len 2048
```

---

该案例可直接在PyCharm中运行，生成可直接预览的HTML文件。如果需要生成React/Vue组件代码，只需修改prompt中的技术栈要求即可。
