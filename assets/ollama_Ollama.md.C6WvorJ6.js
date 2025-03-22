import{_ as l,c as e,o as i,ag as t}from"./chunks/framework.oP1PDRBo.js";const u=JSON.parse('{"title":"Ollama","description":"","frontmatter":{"title":"Ollama","date":"2025-02-10T00:00:00.000Z","tags":["Ollama","大语言模型"],"categories":["大语言模型"],"sticky":3},"headers":[],"relativePath":"ollama/Ollama.md","filePath":"ollama/Ollama.md","lastUpdated":1742619885000}'),o={name:"ollama/Ollama.md"};function r(s,a,h,n,p,d){return i(),e("div",null,a[0]||(a[0]=[t('<h1 id="🌅-ollama" tabindex="-1">🌅 Ollama <a class="header-anchor" href="#🌅-ollama" aria-label="Permalink to &quot;🌅 Ollama&quot;">​</a></h1><p>✨难度：★★★☆☆</p><h2 id="🎯-启动并运行大语言模型" tabindex="-1">🎯 启动并运行大语言模型 <a class="header-anchor" href="#🎯-启动并运行大语言模型" aria-label="Permalink to &quot;🎯 启动并运行大语言模型&quot;">​</a></h2><p>启动并运行大语言模型 本地运行DeepSeek-R1，Llama 3.3，Phi-4，Mistral，Gemma 2等大模型</p><p>⭐国内镜像下载地址<a href="https://ollama.zhike.in/" target="_blank" rel="noreferrer">https://ollama.zhike.in/</a></p><p>Ollama官网提供的是Github下载地址，由于Github无法打开或打开很慢，导致下载速度很慢，通过对官网的下载地址进行加速，提供更为快速稳定的下载体验</p><h2 id="📅-部署deepseek-r1模型" tabindex="-1">📅 部署DeepSeek R1模型 <a class="header-anchor" href="#📅-部署deepseek-r1模型" aria-label="Permalink to &quot;📅 部署DeepSeek R1模型&quot;">​</a></h2><p>在终端输入命令：ollama run deepseek-r1 默认是7B版本（4.7GB），如果你的设备配置高，可以尝试70B版本（需要24GB+显存）。</p><p>下载完成后，直接输入：ollama run deepseek-r1 运行DeepSeek R1，然后就可以开始和AI对话啦！</p><h3 id="💡-常用命令" tabindex="-1">💡 常用命令 <a class="header-anchor" href="#💡-常用命令" aria-label="Permalink to &quot;💡 常用命令&quot;">​</a></h3><ul><li>启动Ollama服务： ollama serve</li><li>从模型文件创建模型： ollama create</li><li>显示模型信息： ollama show</li><li>运行模型： ollama run 模型名称</li><li>从注册表中拉去模型： ollama pull 模型名称</li><li>将模型推送到注册表： ollama push</li><li>列出模型： ollama list</li><li>复制模型： ollama cp</li><li>删除模型： ollama rm 模型名称</li><li>获取有关Ollama任何命令的帮助信息： ollama help</li></ul><h3 id="🌟-终端指令" tabindex="-1">🌟 终端指令 <a class="header-anchor" href="#🌟-终端指令" aria-label="Permalink to &quot;🌟 终端指令&quot;">​</a></h3><ol><li>查看支持的指令：使用命令 /?</li><li>退出对话模型：使用命令 /bye</li><li>显示模型信息：使用命令 /show</li><li>设置对话参数：使用命令 /set 参数名 参数值，例如设置温度（temperature）或top_k值</li><li>清理上下文：使用命令 /clear</li><li>动态切换模型：使用命令 /load 模型名称</li><li>存储模型：使用命令 /save 模型名称</li><li>查看快捷键：使用命令 /?shortcuts</li></ol><h3 id="⏰可视化界面" tabindex="-1">⏰可视化界面 <a class="header-anchor" href="#⏰可视化界面" aria-label="Permalink to &quot;⏰可视化界面&quot;">​</a></h3><ul><li>如果你觉得命令行不够友好，可以搭配Open Web UI、AnythingLLM等使用！</li><li>以Open Web UI为例，安装Docker后，运行命令：</li></ul><p>在终端运行命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d -p 3000:8080 --name open-webui --restart always ghcr.io/open-webui/open-webui:main</span></span></code></pre></div><ul><li>打开浏览器，访问，选择DeepSeek R1模型，就能在可视化界面中愉快地聊天啦！</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>访问http://localhost:3000</span></span></code></pre></div><h2 id="收获与变化" tabindex="-1">收获与变化 <a class="header-anchor" href="#收获与变化" aria-label="Permalink to &quot;收获与变化&quot;">​</a></h2><h3 id="身体变化" tabindex="-1">身体变化 <a class="header-anchor" href="#身体变化" aria-label="Permalink to &quot;身体变化&quot;">​</a></h3><ol><li>睡眠质量提升</li><li>精力更充沛</li><li>皮肤状态改善</li></ol><h3 id="心理变化" tabindex="-1">心理变化 <a class="header-anchor" href="#心理变化" aria-label="Permalink to &quot;心理变化&quot;">​</a></h3><ol><li>心情更愉悦</li><li>自控力增强</li><li>工作效率提升</li></ol><h2 id="实用建议" tabindex="-1">实用建议 <a class="header-anchor" href="#实用建议" aria-label="Permalink to &quot;实用建议&quot;">​</a></h2><h3 id="如何坚持早起" tabindex="-1">如何坚持早起 <a class="header-anchor" href="#如何坚持早起" aria-label="Permalink to &quot;如何坚持早起&quot;">​</a></h3><ol><li>循序渐进调整作息</li><li>准备充足的睡眠</li><li>给自己适当奖励</li><li>找到早起的动力</li></ol><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>不要操之过急</li><li>保证充足睡眠</li><li>建立晚间仪式感</li><li>控制手机使用</li></ul><div class="tip custom-block"><p class="custom-block-title">小贴士</p><p>最重要的不是早起本身，而是培养规律的作息习惯。</p></div><h2 id="未来计划" tabindex="-1">未来计划 <a class="header-anchor" href="#未来计划" aria-label="Permalink to &quot;未来计划&quot;">​</a></h2><p>接下来我会尝试：</p><ul><li>继续保持早起习惯</li><li>增加晨间阅读时间</li><li>尝试冥想练习</li></ul><blockquote><p>一个小小的改变，可能带来生活质量的大提升。</p></blockquote><p>今日状态：元气满满 坚持天数：21天</p>',35)]))}const m=l(o,[["render",r]]);export{u as __pageData,m as default};
