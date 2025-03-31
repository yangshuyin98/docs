以下是一个使用批处理请求生成多个前端代码方案的完整案例，包含代码差异对比和优化建议：

---

### **文件路径**：`modern/scripts/batch_client.py`
```python
from openai import OpenAI
import time
import difflib
import os

# 初始化客户端
client = OpenAI(
    base_url="http://localhost:8000/v1",
    api_key="EMPTY",
    timeout=45.0  # 延长超时时间
)


def batch_generate_frontend(prompt, num_versions=3):
    try:
        start_time = time.time()

        # 发送批处理请求
        response = client.chat.completions.create(
            model="/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
            messages=[
                {"role": "system", "content": "你是一个资深前端架构师，提供多种实现方案"},
                {"role": "user", "content": prompt}
            ],
            n=num_versions,  # 关键批处理参数
            stream=False,
            temperature=0.7,  # 提高多样性
            max_tokens=1024
        )

        # 提取所有候选方案
        candidates = [choice.message.content for choice in response.choices]
        elapsed = time.time() - start_time

        print(f"🎯 生成 {len(candidates)} 个方案 (耗时: {elapsed:.2f}s)")
        return candidates

    except Exception as e:
        print(f"❌ 批处理请求失败: {str(e)}")
        return []


def analyze_differences(candidates):
    """对比多个代码方案的差异"""
    print("\n=== 方案差异分析 ===")

    # 提取代码核心部分（忽略注释和空白）
    clean_codes = []
    for i, code in enumerate(candidates):
        lines = [line.strip() for line in code.split('\n')
                 if not line.strip().startswith('//') and line.strip() != '']
        clean_codes.append("\n".join(lines))

    # 使用difflib进行差异对比
    differ = difflib.Differ()
    diff_result = list(differ.compare(
        clean_codes[0].split('\n'),
        clean_codes[1].split('\n')
    ))

    print("【方案1 vs 方案2 主要差异】")
    for line in diff_result:
        if line.startswith('+ ') or line.startswith('- '):
            print(line)


if __name__ == "__main__":
    # 示例：生成轮播图组件
    prompt = """
    开发一个响应式图片轮播组件，要求：
    1. 支持自动播放和手动切换
    2. 移动端触摸滑动支持
    3. 提供淡入淡出动画效果
    4. 兼容现代浏览器
    """

    # 生成3个候选方案
    versions = batch_generate_frontend(prompt, num_versions=3)

    # 保存并展示结果
    output_dir = "carousel_versions"
    os.makedirs(output_dir, exist_ok=True)

    for idx, code in enumerate(versions, 1):
        filename = f"{output_dir}/carousel_v{idx}.html"
        with open(filename, "w") as f:
            f.write(code)

        print(f"\n🔖 方案 {idx} 已保存至 {filename}")
        print("--------------------------------------------------")
        print(code[:500] + "\n...")  # 预览部分代码

    # 执行差异分析（至少需要2个方案）
    if len(versions) >= 2:
        analyze_differences(versions)
```

---

### **关键功能说明**

#### 1. **批处理响应处理**
```python
# 响应数据结构示例
response.choices = [
    Choice(index=0, message=...),
    Choice(index=1, message=...),
    Choice(index=2, message=...)
]
```

#### 2. **方案对比技术**
- 使用Python标准库`difflib`进行代码差异分析
- 清理非关键内容（注释、空行）后对比核心逻辑差异
- 输出形如：
  ```diff
  - <div class="carousel fade">
  + <section id="slider" class="crossfade">
  ```

#### 3. **输出管理优化**
```python
# 自动创建版本目录结构
carousel_versions/
├── carousel_v1.html  # 方案1：使用纯CSS动画
├── carousel_v2.html  # 方案2：基于Swiper.js实现
└── carousel_v3.html  # 方案3：Vanilla JS + requestAnimationFrame
```

---

### **服务器优化参数**
启动API服务器时添加以下参数提升批处理性能：
```bash
python -m vllm.entrypoints.openai.api_server \
  --model ... \
  --max-num-seqs 256 \          # 提高并行处理容量
  --max-paddings 128 \          # 优化批处理填充
  --max-parallel-loading-workers 4  # 加速模型加载
```

---

### **运行效果示例**
```bash
🎯 生成 3 个方案 (耗时: 4.32s)

🔖 方案 1 已保存至 carousel_versions/carousel_v1.html
--------------------------------------------------
<!DOCTYPE html>
<html>
<head>
    <style>
        .carousel-container {
            position: relative;
            overflow: hidden;
        }
        /* ...CSS过渡动画定义... */
...

🔖 方案 2 已保存至 carousel_versions/carousel_v2.html 
--------------------------------------------------
<!-- 使用Swiper.js库实现 -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
<div class="swiper">
    <div class="swiper-wrapper">
...

=== 方案差异分析 ===
【方案1 vs 方案2 主要差异】
- <div class="carousel-container">
+ <div class="swiper">
-        opacity: 0;
+        transition: opacity 1s ease-in-out;
```

---

### **扩展应用场景**

1. **架构方案对比**
   ```python
   prompt = "实现微前端架构的三种不同方案对比"
   ```

2. **技术栈评估**
   ```python
   prompt = "分别用Vue3、React18、Svelte实现同一个Todo应用"
   ```

3. **性能优化建议**
   ```python
   prompt = "提供三种不同的前端性能优化方案，包含实现代码"
   ```

---

该方案特别适合需要：1) 快速原型设计时获取不同思路 2) 教学场景展示多种实现方式 3) 代码审查时对比优化方案。实际使用时可根据需求调整`temperature`参数控制生成多样性（0.3~1.0）。
