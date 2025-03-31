---
title: Ollama
date: 2025-02-10
tags:
 - Ollama
 - 大语言模型
categories:
 - 大语言模型
sticky: 3
---

✨难度：★★★☆☆

## 启动并运行大语言模型

启动并运行大语言模型
本地运行DeepSeek-R1，Llama 3.3，Phi-4，Mistral，Gemma 2等大模型

⭐国内镜像下载地址<https://ollama.zhike.in/>

Ollama官网提供的是Github下载地址，由于Github无法打开或打开很慢，导致下载速度很慢，通过对官网的下载地址进行加速，提供更为快速稳定的下载体验

## 部署DeepSeek R1模型

在终端输入命令：ollama run deepseek-r1
默认是7B版本（4.7GB），如果你的设备配置高，可以尝试70B版本（需要24GB+显存）。

下载完成后，直接输入：ollama run deepseek-r1 运行DeepSeek R1，然后就可以开始和AI对话啦！

### 常用命令

- 启动Ollama服务： ollama serve
- 从模型文件创建模型： ollama create
- 显示模型信息： ollama show
- 运行模型： ollama run 模型名称
- 从注册表中拉去模型： ollama pull 模型名称
- 将模型推送到注册表： ollama push
- 列出模型： ollama list
- 复制模型： ollama cp
- 删除模型： ollama rm 模型名称
- 获取有关Ollama任何命令的帮助信息： ollama help

### 终端指令

1. 查看支持的指令：使用命令 /?
2. 退出对话模型：使用命令 /bye
3. 显示模型信息：使用命令 /show
4. 设置对话参数：使用命令 /set 参数名 参数值，例如设置温度（temperature）或top_k值
5. 清理上下文：使用命令 /clear
6. 动态切换模型：使用命令 /load 模型名称
7. 存储模型：使用命令 /save 模型名称
8. 查看快捷键：使用命令 /?shortcuts

### 可视化界面

- 如果你觉得命令行不够友好，可以搭配Open Web UI、AnythingLLM等使用！
- 以Open Web UI为例，安装Docker后，运行命令：

在终端运行命令：

```powershell
docker run -d -p 3000:8080 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- 打开浏览器，访问，选择DeepSeek R1模型，就能在可视化界面中愉快地聊天啦！

```powershell
访问http://localhost:3000
```

Ollama是建立在llama.cpp开源推理引擎基础上的大模型推理工具框架。得益于底层引擎提供的高效模型推理，以及多硬件适配，Ollama能够在包括CPU、GPU在内的，不同的硬件环境上，运行各种精度的GGUF格式大模型。通过一个命令行就能拉起LLM模型服务。

ModelScope社区上托管了数千个优质的GGUF格式的大模型（包括LLM和视觉多模态模型），并支持了Ollama框架和ModelScope平台的链接，通过简单的 `ollama run`命令，就能**直接加载运行ModelScope模型库上的GGUF模型**。

## 一键运行

```powershell
ollama run modelscope.cn/Qwen/Qwen2.5-3B-Instruct-GGUF
```

在安装了Ollama的环境(建议使用>=0.3.12版本)上，直接通过上面的命令行，就可以直接在本地运行 Qwen2.5-3B-Instruct-GGUF模型。

ollama run modelscope.cn/{username}/{model}

```powershell
ollama run modelscope.cn/Qwen/Qwen2.5-3B-Instruct-GGUF
ollama run modelscope.cn/second-state/gemma-2-2b-it-GGUF
ollama run modelscope.cn/Shanghai_AI_Laboratory/internlm2_5-7b-chat-gguf

```

## 配置定制

Ollama支持加载不同精度的GGUF模型，同时在一个GGUF模型库中，一般也会有不同精度的模型文件存在，例如Q3_K_M, Q4_K_M, Q5_K等等，入下图所示：

一个模型repo下的不同GGUF文件，对应的是不同量化精度与量化方法。默认情况下，如果模型repo里有Q4_K_M版本的话，我们会自动拉取并使用该版本，在推理精度以及推理速度，资源消耗之间做一个较好的均衡。如果没有该版本，我们会选择合适的其他版本。

此外，您也可以显式配置来指定想要使用的版本。例如

```powershell
ollama run modelscope.cn/Qwen/Qwen2.5-3B-Instruct-GGUF:Q3_K_M
```

这里命令行最后的`:Q3_K_M`选项，就指定了使用Q3_K_M精度的GGUF模型版本，这个选项大小写不敏感，也就是说，无论是`:Q3_K_M`，还是`:q3_k_m`，都是使用模型repo里的"qwen2.5-3b-instruct-q3_k_m.gguf" 这个模型文件。当然，您也可以直接指定模型文件的全称，这同样是支持的：

```powershell
ollama run modelscope.cn/Qwen/Qwen2.5-3B-Instruct-GGUF:qwen2.5-3b-instruct-q3_k_m.gguf
```

### 视觉多模态模型使用

除了常见的LLM以外，这种使用方式也支持了包括Llama3.2-Vision在内的视觉多模态模型。这类模型需要确保使用Ollama 0.4.0以上的版本。 例如：

```powershell
ollama run modelscope.cn/AI-ModelScope/Llama-3.2-11B-Vision-Instruct-GGUF
```

::: tip 小贴士
最重要的不是早起本身，而是培养规律的作息习惯。
:::
