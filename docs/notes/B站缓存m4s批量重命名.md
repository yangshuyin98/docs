
# B站m4s文件批量重命名

## 单文件夹处理

```python
import os
import json
import re
import shutil  # 新增导入
from pypinyin import lazy_pinyin  # 需要先安装：pip install pypinyin

original_path = r"D:\bili_download\NEW\AJAX入门到实战全套教程\c_1154598226\entry.json"
def sanitize_filename(text):
    """将中文转换为拼音并清理非法字符"""
    # 转换中文为拼音
    # pinyin_list = lazy_pinyin(text, style=0)  # style=0 表示不带声调
    pinyin_list = text
    print(pinyin_list)
    cleaned = ''.join(pinyin_list)
    print("修改1:", cleaned)

    # 替换非法字符（保留字母、数字、下划线、减号）
    # 汉字（Unicode 范围 \u4e00-\u9fa5）
    # cleaned = re.sub(r'[^a-zA-Z0-9_-]', '_', cleaned)
    cleaned = re.sub(r'[^a-z A-Z0-9\u4e00-\u9fa5]', '_', cleaned)
    print("修改2:", cleaned)
    # 去除连续下划线
    cleaned = re.sub(r'_+', '_', cleaned)
    print("修改3:", cleaned)
    # 去除首尾无效字符
    return cleaned.strip('_')


def modify_filepath(original_path):
    """修改路径中的c_xxxx部分为page_data内容"""
    try:
        # 读取JSON数据
        # AJAX - Day01 - 12.案例_登录_提示消息
        # 'part': 'AJAX-Day01-12.案例_登录_提示消息',
        with open(original_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            page_data = data.get("page_data", {})
            part = page_data.get('part', '')
            print(json.dumps(part, indent=4, ensure_ascii=False))
            if not part:
                print("未找到有效part字段")
                return
        sanitized_folder = f"c_{sanitize_filename(part)}"  # 保持c_前缀

        # 分解路径
        dir_path, filename = os.path.split(original_path)
        parent_dir = os.path.dirname(dir_path)

        # 构建新路径
        new_dir = os.path.join(parent_dir, sanitized_folder)
        new_path = os.path.join(new_dir, filename)

        # 创建目录并返回路径
        original_dir = os.path.dirname(original_path)  # 获取原目录
        try:
            # 移动所有文件
            for item in os.listdir(original_dir):
                src = os.path.join(original_dir, item)
                dst = os.path.join(new_dir, item)
                shutil.move(src, dst)

            # 删除空原目录
            os.rmdir(original_dir)
            return new_path

        except Exception as e:
            print(f"文件移动失败: {str(e)}")

            return original_path



    except Exception as e:
        print(f"文件修改失败: {str(e)}")
        return original_path
# original_path = r"D:\bili_download\NEW\AJAX入门到实战全套教程\c_1154601403\entry.json"
new_path = modify_filepath(original_path)

print("原始路径:", original_path)
print("新路径:", new_path)


```

## 需要遍历该目录下的所有子文件夹

```python
import os
import json
import re
import shutil
import time
from pypinyin import lazy_pinyin


def batch_process(root_dir):
    """批量处理目录下的所有子文件夹"""
    # 遍历根目录下的所有子目录
    for dir_name in os.listdir(root_dir):
        dir_path = os.path.join(root_dir, dir_name)

        # 只处理c_开头的目录
        allowed_prefixes = ("c_", "a_", "b_", "q_")
        if os.path.isdir(dir_path) and dir_name.startswith(allowed_prefixes):
            entry_json = os.path.join(dir_path, "entry.json")

            if os.path.exists(entry_json):
                print(f"\n正在处理目录: {dir_path}")
                process_single_entry(entry_json)
            else:
                print(f"跳过目录 {dir_name}（缺少entry.json）")


def process_single_entry(entry_path):

    """处理单个entry.json文件（改进版）"""
    original_dir = os.path.dirname(entry_path)
    try:
        with open(entry_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            page_data = data.get("page_data", {})
            part = page_data.get('part', '').strip()

        if not part:
            print("未找到有效part字段")
            return

        # 生成唯一目录名（添加随机后缀）
        sanitized = sanitize_filename(part)
        # new_dir_name = f"a_{sanitized}_{uuid4().hex[:4]}"
        new_dir_name = f"{sanitized}"
        parent_dir = os.path.dirname(original_dir)
        new_dir = os.path.join(parent_dir, new_dir_name)

        # 创建目标目录
        os.makedirs(new_dir, exist_ok=True)

        # 移动所有文件（含重试机制）
        moved_all = True
        for item in os.listdir(original_dir):
            src = os.path.join(original_dir, item)
            dst = os.path.join(new_dir, item)

            # 文件移动重试逻辑
            max_retries = 3
            for attempt in range(max_retries):
                try:
                    shutil.move(src, dst)
                    print(f"移动成功: {item}")
                    break
                except Exception as e:
                    if attempt == max_retries - 1:
                        moved_all = False
                        print(f"移动失败 [{item}]: {str(e)}")
                    else:
                        time.sleep(0.5)  # 等待500ms重试

        # 清理原目录（增强版）
        if moved_all:
            print(f"运行moved_all")
            # safe_remove_directory(original_dir)
        else:
            print(f"存在未移动文件，跳过清理: {original_dir}")


    except Exception as e:
        print(f"处理失败: {str(e)}")


def sanitize_filename(text):
    """清理文件名（保留中文）"""
    # 保留：中文、字母、数字、下划线、减号
    cleaned = re.sub(r'[^\w\u4e00-\u9fa5-]', '_', text)
    cleaned = re.sub(r'_+', '_', cleaned)
    return cleaned.strip('_')


if __name__ == "__main__":
    root_path = r"D:\bili_download\NEW\Node_js全套入门教程"
    batch_process(root_path)
    print("\n批量处理完成！")
```

## 批量合并视频

```python
import os
import subprocess

# 定义根目录路径
root_folder = r"D:\bili_download\NEW\AJAX入门到实战全套教程"

# 遍历根目录下的所有文件夹
for folder_name in os.listdir(root_folder):
    # 构造当前文件夹的完整路径
    current_folder = os.path.join(root_folder, folder_name)

    # 检查是否是文件夹
    if os.path.isdir(current_folder):
        # 构造 80 文件夹的路径
        target_folder = os.path.join(current_folder, "80")

        # 检查 80 文件夹是否存在
        if os.path.exists(target_folder) and os.path.isdir(target_folder):
            # 定义输入和输出文件路径
            video_file = os.path.join(target_folder, "video.m4s")
            audio_file = os.path.join(target_folder, "audio.m4s")
            output_file = os.path.join(target_folder, folder_name+".mp4")

            # 检查 video.m4s 和 audio.m4s 文件是否存在
            if os.path.exists(video_file) and os.path.exists(audio_file):
                # 构造 ffmpeg 命令
                command = [
                    "ffmpeg.exe",
                    "-i", video_file,
                    "-i", audio_file,
                    "-codec", "copy",
                    output_file
                ]

                # 执行命令
                print(f"正在合并 {target_folder} 中的视频...")
                try:
                    subprocess.run(command, check=True, cwd=target_folder)
                    print(f"{target_folder} 中的视频合并完成!")
                except subprocess.CalledProcessError as e:
                    print(f"合并 {target_folder} 中的视频时出错: {e}")
            else:
                print(f"{target_folder} 中缺少 video.m4s 或 audio.m4s 文件，跳过该文件夹。")
        else:
            print(f"{current_folder} 中不存在 80 文件夹，跳过该文件夹。")
```
