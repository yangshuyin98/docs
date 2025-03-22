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

# 🌅 Ollama

✨难度：★★★☆☆

## 🎯 启动并运行大语言模型

启动并运行大语言模型
本地运行DeepSeek-R1，Llama 3.3，Phi-4，Mistral，Gemma 2等大模型

⭐国内镜像下载地址https://ollama.zhike.in/

Ollama官网提供的是Github下载地址，由于Github无法打开或打开很慢，导致下载速度很慢，通过对官网的下载地址进行加速，提供更为快速稳定的下载体验

## 📅 部署DeepSeek R1模型 

在终端输入命令：ollama run deepseek-r1
默认是7B版本（4.7GB），如果你的设备配置高，可以尝试70B版本（需要24GB+显存）。

下载完成后，直接输入：ollama run deepseek-r1 运行DeepSeek R1，然后就可以开始和AI对话啦！

### 💡 常用命令
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



### 🌟 终端指令
1. 查看支持的指令：使用命令 /? 
2. 退出对话模型：使用命令 /bye 
3. 显示模型信息：使用命令 /show 
4. 设置对话参数：使用命令 /set 参数名 参数值，例如设置温度（temperature）或top_k值 
5. 清理上下文：使用命令 /clear 
6. 动态切换模型：使用命令 /load 模型名称 
7. 存储模型：使用命令 /save 模型名称 
8. 查看快捷键：使用命令 /?shortcuts

### ⏰可视化界面 
- 如果你觉得命令行不够友好，可以搭配Open Web UI、AnythingLLM等使用！
- 以Open Web UI为例，安装Docker后，运行命令：

在终端运行命令：

```
docker run -d -p 3000:8080 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- 打开浏览器，访问，选择DeepSeek R1模型，就能在可视化界面中愉快地聊天啦！

```
访问http://localhost:3000
```

















## 收获与变化

### 身体变化
1. 睡眠质量提升
2. 精力更充沛
3. 皮肤状态改善

### 心理变化
1. 心情更愉悦
2. 自控力增强
3. 工作效率提升

## 实用建议

### 如何坚持早起
1. 循序渐进调整作息
2. 准备充足的睡眠
3. 给自己适当奖励
4. 找到早起的动力

### 注意事项
- 不要操之过急
- 保证充足睡眠
- 建立晚间仪式感
- 控制手机使用

::: tip 小贴士
最重要的不是早起本身，而是培养规律的作息习惯。
:::

## 未来计划

接下来我会尝试：
- 继续保持早起习惯
- 增加晨间阅读时间
- 尝试冥想练习

> 一个小小的改变，可能带来生活质量的大提升。

今日状态：元气满满
坚持天数：21天 
