import{_ as a,c as n,o as i,ag as p}from"./chunks/framework.oP1PDRBo.js";const o=JSON.parse('{"title":"Llama 3.1","description":"","frontmatter":{"title":"Llama 3.1","date":"2024-02-10T00:00:00.000Z","tags":["OpenWeb UI","Ollama","Spring AI"],"categories":["健康生活"],"sticky":3},"headers":[],"relativePath":"ollama/Llama 3.1 综合指南.md","filePath":"ollama/Llama 3.1 综合指南.md","lastUpdated":1744363690000}'),l={name:"ollama/Llama 3.1 综合指南.md"};function t(e,s,h,r,k,g){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="llama-3-1-综合指南" tabindex="-1">Llama 3.1 综合指南 <a class="header-anchor" href="#llama-3-1-综合指南" aria-label="Permalink to &quot;Llama 3.1 综合指南&quot;">​</a></h1><blockquote><p>本文介绍如何使用 Ollama 在本地部署 Llama 3.1:8B 模型，并通过 OpenWeb UI 和 Spring AI 来增强模型交互体验和简化 API 的调用过程。</p></blockquote><p><img src="https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/5717d1394b394c0e8a71a585244b1cda~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgQ2xlYW5lcg==:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742038192&amp;x-signature=TqvNf8trPXmuc7z%2FStcj1nXWaWE%3D" alt="ollama-01.png"></p><h2 id="ollama" tabindex="-1">Ollama <a class="header-anchor" href="#ollama" aria-label="Permalink to &quot;Ollama&quot;">​</a></h2><p>Ollama 是一个开源的大语言模型服务工具，旨在简化大模型的本地部署和运行过程。用户只需要输入一行命令（如： <code>ollama run llama3.1</code> ），即可在本地硬件环境中部署和使用大语言模型。Ollama 还提供了 REST API 接口，下文中会介绍如何使用 Spring AI 集成 Ollama，实现与大模型 API 接口的交互。</p><p>Ollama 支持下载 Llama、Gemma、qwen 和 glm4 等多种主流大语言模型和代码语言模型，我们可以在 <a href="https://link.juejin.cn?target=https%3A%2F%2Follama.com%2Flibrary" target="_blank" rel="noreferrer">官网</a> 查看 Ollama 支持的所有模型及其相关信息和使用命令。 <strong>本机运行 7B 参数量的模型至少需要 8GB 内存，运行 13B 参数量的模型至少需要 16GB 内存，运行 33B 参数量的模型至少需要 32GB 内存。</strong></p><table tabindex="0"><thead><tr><th>模型</th><th>参数</th><th>大小</th><th>使用命令</th></tr></thead><tbody><tr><td>Llama 3.1</td><td>8B</td><td>4.7GB</td><td><code>ollama run llama3.1</code></td></tr><tr><td>Llama 3.1</td><td>70B</td><td>40GB</td><td><code>ollama run llama3.1:70b</code></td></tr><tr><td>Llama 3.1</td><td>405B</td><td>231GB</td><td><code>ollama run llama3.1:405b</code></td></tr><tr><td>Gemma 2</td><td>9B</td><td>5.5GB</td><td><code>ollama run gemma2</code></td></tr><tr><td>Gemma 2</td><td>27B</td><td>16GB</td><td><code>ollama run gemma2:27b</code></td></tr><tr><td>qwen2</td><td>7B</td><td>4.4GB</td><td><code>ollama run qwen2</code></td></tr><tr><td>qwen2</td><td>72B</td><td>41GB</td><td><code>ollama run qwen2:72b</code></td></tr><tr><td>glm4</td><td>9B</td><td>5.5GB</td><td><code>ollama run glm4</code></td></tr></tbody></table><h3 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p>访问 <a href="https://link.juejin.cn?target=https%3A%2F%2Follama.com%2Fdownload" target="_blank" rel="noreferrer">Ollama 官网</a>，选择操作系统，然后点击 download 按钮进行下载。<strong>操作系统要求 MacOS 11 和 Windows 10 及以上版本</strong>。下载完成后的 Ollama 其实是一个命令行工具，我们可以直接在终端中使用 Ollama。（执行 <code>ollama --help</code> 可查看 Ollama 提供的的命令）</p><h3 id="部署-llama-3-1" tabindex="-1">部署 Llama 3.1 <a class="header-anchor" href="#部署-llama-3-1" aria-label="Permalink to &quot;部署 Llama 3.1&quot;">​</a></h3><p>在终端中执行命令 <code>ollama run llama3.1</code> ，即可下载 Llama3.1:8B 模型。模型下载完成后，会自动启动大模型，进入命令行交互模式，直接输入指令，就可以和模型进行对话了。</p><p>通过 Ollama，我们轻松的实现了本地大模型的部署和命令行式的交互，但是为了更好的使用大模型，以及对大模型进行管理和配置等方面的需求，就需要借助 Ollama 社区中一些强大的工具了，其中代表性的工具之一是 OpenWeb UI（之前称为 Ollama WebUI）。</p><h2 id="openweb-ui" tabindex="-1">OpenWeb UI <a class="header-anchor" href="#openweb-ui" aria-label="Permalink to &quot;OpenWeb UI&quot;">​</a></h2><p>OpenWeb UI 是一个功能丰富且易于使用的大模型管理工具，它为用户提供了一个直观的图形化界面，以及广泛的功能和灵活的配置选项。</p><ul><li>方便部署：使用 Docker 实现简单快捷的部署。</li><li>用户友好的页面：国际化多语言支持，提供多种主题样式，响应式设计，模型参数、Prompt 等便捷配置。</li><li>功能丰富：本地 RAG 支持，Web 浏览功能（可以在对话中访问网站），语音交互等。</li><li>API 支持：支持 OpenAI API 和其他兼容 API。</li><li>多模型支持：支持同时管理和操作多个大语言模型。</li></ul><h3 id="下载-1" tabindex="-1">下载 <a class="header-anchor" href="#下载-1" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p>部署 OpenWeb UI 需要使用 Docker 环境，我本机的 Docker 版本是 24.0.2。OpenWeb UI 提供了集成 Ollama 的部署方式， 因为 Ollama 已经下载到我本机上了，所以只需要执行以下命令即可完成部署。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main</span></span></code></pre></div><p>容器启动成功后，可以访问 3000 端口，查看页面。首次登陆需要先填写邮箱和密码注册账号。登陆进来后，可以看到，OpenWeb UI 已经自动加载到了我们本地部署的 Llama3.1 模型。</p><p>在模型编辑页面，我们可以修改模型的配置参数和 Prompt 等信息，并利用 Document 和 Tools 等工具来增强模型的能力和使用体验。</p><p><img src="https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/ba3bccdd924d47518f5829e99e98e71a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgQ2xlYW5lcg==:q75.awebp?rk3s=f64ab15b&amp;x-expires=1742038192&amp;x-signature=v8V%2BsqOe5MajMcWHw7kUBBAkeXU%3D" alt="ollama-05.png"></p><h2 id="spring-ai" tabindex="-1">Spring AI <a class="header-anchor" href="#spring-ai" aria-label="Permalink to &quot;Spring AI&quot;">​</a></h2><p>Spring AI 是 Spring 生态里人工智能方向的应用框架，它提供了与各种大语言模型交互的高级抽象接口，极大地简化了Java 人工智能应用程序的开发过程，让 Java 开发者也能够开发 AI 应用。</p><p>接下来将详细介绍 Spring AI 的使用流程，以及如何调用 Ollama 的 API 接口，与我们本地的 Llama 3.1 进行交互。</p><h3 id="集成-ollama" tabindex="-1">集成 Ollama <a class="header-anchor" href="#集成-ollama" aria-label="Permalink to &quot;集成 Ollama&quot;">​</a></h3><ol><li>创建一个新的 Spring Boot 项目，版本要求 Spring Boot 3 + JDK 17。</li><li>引入 Spring AI + Ollama 依赖。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span>    &lt;parent&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;3.3.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;</span></span>
<span class="line"><span>    &lt;/parent&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.cleaner&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;culture-ai&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;name&gt;Cleaner-ai&lt;/name&gt;</span></span>
<span class="line"><span>    &lt;description&gt;culture-ai&lt;/description&gt;</span></span>
<span class="line"><span>    &lt;properties&gt;</span></span>
<span class="line"><span>        &lt;java.version&gt;17&lt;/java.version&gt;</span></span>
<span class="line"><span>        &lt;spring-ai.version&gt;1.0.0-SNAPSHOT&lt;/spring-ai.version&gt;</span></span>
<span class="line"><span>    &lt;/properties&gt;</span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;!-- ollama --&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.ai&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-ai-ollama-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependencyManagement&gt;</span></span>
<span class="line"><span>        &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;!-- spring ai --&gt;</span></span>
<span class="line"><span>            &lt;dependency&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.springframework.ai&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-ai-bom&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;version&gt;\${spring-ai.version}&lt;/version&gt;</span></span>
<span class="line"><span>                &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span>                &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span>            &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;/dependencies&gt;</span></span>
<span class="line"><span>    &lt;/dependencyManagement&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;build&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span>
<span class="line"><span>    &lt;repositories&gt;</span></span>
<span class="line"><span>        &lt;!-- spring ai --&gt;</span></span>
<span class="line"><span>        &lt;repository&gt;</span></span>
<span class="line"><span>            &lt;id&gt;spring-milestones&lt;/id&gt;</span></span>
<span class="line"><span>            &lt;name&gt;Spring Milestones&lt;/name&gt;</span></span>
<span class="line"><span>            &lt;url&gt;https://repo.spring.io/milestone&lt;/url&gt;</span></span>
<span class="line"><span>            &lt;snapshots&gt;</span></span>
<span class="line"><span>                &lt;enabled&gt;false&lt;/enabled&gt;</span></span>
<span class="line"><span>            &lt;/snapshots&gt;</span></span>
<span class="line"><span>        &lt;/repository&gt;</span></span>
<span class="line"><span>        &lt;repository&gt;</span></span>
<span class="line"><span>            &lt;id&gt;spring-snapshots&lt;/id&gt;</span></span>
<span class="line"><span>            &lt;name&gt;Spring Snapshots&lt;/name&gt;</span></span>
<span class="line"><span>            &lt;url&gt;https://repo.spring.io/snapshot&lt;/url&gt;</span></span>
<span class="line"><span>            &lt;releases&gt;</span></span>
<span class="line"><span>                &lt;enabled&gt;false&lt;/enabled&gt;</span></span>
<span class="line"><span>            &lt;/releases&gt;</span></span>
<span class="line"><span>        &lt;/repository&gt;</span></span>
<span class="line"><span>    &lt;/repositories&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre></div><p>3.编写 application.yaml 配置文件，添加 Ollama 的相关配置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 8888</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: Cleaner-AI</span></span>
<span class="line"><span>  ai:</span></span>
<span class="line"><span>    ollama:</span></span>
<span class="line"><span>      # ollama API Server 地址</span></span>
<span class="line"><span>      base-url: http://localhost:11434</span></span>
<span class="line"><span>      chat:</span></span>
<span class="line"><span>        enabled: true</span></span>
<span class="line"><span>        # 使用的模型名称</span></span>
<span class="line"><span>        model:</span></span>
<span class="line"><span>          llama3.1:8b</span></span>
<span class="line"><span>        options:</span></span>
<span class="line"><span>          temperature: 0.7</span></span></code></pre></div><p>4.编写接口。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.cleaner.ai.controller;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jakarta.annotation.Resource;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.ai.chat.messages.UserMessage;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.ai.chat.model.ChatResponse;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.ai.chat.prompt.Prompt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.ai.ollama.OllamaChatModel;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RequestParam;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reactor.core.publisher.Flux;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/ollama&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OllamaController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Resource</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OllamaChatModel ollamaChatModel;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 流式对话</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> message</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 用户指令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/streamChat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flux&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ChatResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateStream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;请使用中文简体回答：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Prompt prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ollamaChatModel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prompt);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 普通对话</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> message</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   用户指令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/chat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;请使用中文简体回答：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Prompt prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ChatResponse chatResponse </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ollamaChatModel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prompt);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String content </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chatResponse.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> content);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> chatResponse.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>5.调用接口，可以看到 API 接口调用成功。（8B 模型生成的回答内容还是比较有限）</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>本地部署的大模型可以脱离网络离线使用，但是要达到实际使用的要求，还需要对模型进行细致化的配置，当然部署模型的参数量越大，使用效果会更好，但也要考虑本机电脑的配置限制。对于学习了解大模型及其相关的技术知识而言，在条件允许的情况下，本机部署确实是一个不错的选择。</p>`,34)]))}const c=a(l,[["render",t]]);export{o as __pageData,c as default};
