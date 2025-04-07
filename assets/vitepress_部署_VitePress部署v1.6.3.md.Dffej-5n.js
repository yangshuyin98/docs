import{_ as a,c as n,o as i,ag as p}from"./chunks/framework.oP1PDRBo.js";const c=JSON.parse('{"title":"10分钟使用VitePress + 自动部署github pages 建立自己的博客","description":"","frontmatter":{"title":"10分钟使用VitePress + 自动部署github pages 建立自己的博客","date":"2024-02-10T00:00:00.000Z","tags":["健康","生活方式"],"categories":["健康生活"],"sticky":3},"headers":[],"relativePath":"vitepress/部署/VitePress部署v1.6.3.md","filePath":"vitepress/部署/VitePress部署v1.6.3.md","lastUpdated":1744031461000}'),l={name:"vitepress/部署/VitePress部署v1.6.3.md"};function e(t,s,h,k,d,r){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="vitepress部署v1-6-3" tabindex="-1">VitePress部署v1.6.3 <a class="header-anchor" href="#vitepress部署v1-6-3" aria-label="Permalink to &quot;VitePress部署v1.6.3&quot;">​</a></h1><p>难度：★★★☆☆</p><h2 id="_1-修改config-mjs" tabindex="-1">1.修改config.mjs <a class="header-anchor" href="#_1-修改config-mjs" aria-label="Permalink to &quot;1.修改config.mjs&quot;">​</a></h2><p>需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>base: &quot;/blogs/&quot;</span></span></code></pre></div><p>修改package.json, 添加<code> &quot;packageManager&quot;: &quot;pnpm@10.6.3&quot;</code>, 版本号要与后面yaml中的pnpm版本号一致</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;devDependencies&quot;: {</span></span>
<span class="line"><span>    &quot;@types/node&quot;: &quot;^22.13.10&quot;,</span></span>
<span class="line"><span>    &quot;vitepress&quot;: &quot;^1.6.3&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;packageManager&quot;: &quot;pnpm@10.6.3&quot;,</span></span>
<span class="line"><span>  &quot;dependencies&quot;: {</span></span>
<span class="line"><span>    &quot;vitepress-plugin-group-icons&quot;: &quot;^1.3.7&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_2-在-github-中创建一个名称为blogs的仓库" tabindex="-1">2.在 github 中创建一个名称为blogs的仓库 <a class="header-anchor" href="#_2-在-github-中创建一个名称为blogs的仓库" aria-label="Permalink to &quot;2.在 github 中创建一个名称为blogs的仓库&quot;">​</a></h2><h2 id="_3-在项目中初始化-git" tabindex="-1">3.在项目中初始化 git <a class="header-anchor" href="#_3-在项目中初始化-git" aria-label="Permalink to &quot;3.在项目中初始化 git&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git init</span></span></code></pre></div><p>Initialized empty Git repository in C:/Users/user/blogs/.git/</p><h2 id="_4-根目录blogs添加-gitignore-文件" tabindex="-1">4.根目录blogs添加.gitignore 文件 <a class="header-anchor" href="#_4-根目录blogs添加-gitignore-文件" aria-label="Permalink to &quot;4.根目录blogs添加.gitignore 文件&quot;">​</a></h2><p>docs目录作为 VitePress 站点的项目根目录。.vitepress目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。</p><blockquote><p>由于我们是项目中添加 vitepress 文档，所以还需要在 .gitignore 文件中，将 vitepress 缓存文件过滤一下。</p></blockquote><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/.vitepress/cache</span></span>
<span class="line"><span>docs/.vitepress/dist</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Project exclude paths</span></span>
<span class="line"><span>/coverage</span></span>
<span class="line"><span>/src/client/shared.ts</span></span>
<span class="line"><span>/src/node/shared.ts</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.tgz</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>.idea</span></span>
<span class="line"><span>.temp</span></span>
<span class="line"><span>.vite_opt_cache</span></span>
<span class="line"><span>.vscode</span></span>
<span class="line"><span>dist</span></span>
<span class="line"><span>/dist</span></span>
<span class="line"><span>cache</span></span>
<span class="line"><span>temp</span></span>
<span class="line"><span>examples-temp</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>pnpm-global</span></span>
<span class="line"><span>TODOs.md</span></span>
<span class="line"><span>*.timestamp-*.mjs</span></span></code></pre></div><h5 id="_5-上传代码" tabindex="-1">5.上传代码 <a class="header-anchor" href="#_5-上传代码" aria-label="Permalink to &quot;5.上传代码&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>echo &quot;# blogs&quot; &gt;&gt; README.md</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>git add README.md</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &quot;first commit&quot;</span></span>
<span class="line"><span>git branch -M main</span></span>
<span class="line"><span>git remote add origin https://github.com/yangshuyin98/blogs.git</span></span>
<span class="line"><span>git push -u origin main</span></span></code></pre></div><p>git push origin main</p><p>git commit -m &quot;更新文件&quot;</p><p>git commit -m &quot;更新文件&quot;</p><p>git add .</p><p>git push origin main</p><h5 id="_6-选择github-actions" tabindex="-1">6.选择github actions <a class="header-anchor" href="#_6-选择github-actions" aria-label="Permalink to &quot;6.选择github actions&quot;">​</a></h5><p>Actions→</p><p>Get started with GitHub Actions→</p><p>Skip this and set up a workflow yourself →</p><h5 id="_7-设置工作流" tabindex="-1">7.设置工作流 <a class="header-anchor" href="#_7-设置工作流" aria-label="Permalink to &quot;7.设置工作流&quot;">​</a></h5><p>重命名并设置deploy.yml脚本 脚本文件：参考的vitepress官方文档：<a href="https://vitepress.dev/guide/deploy#github-pages" target="_blank" rel="noreferrer">https://vitepress.dev/guide/deploy#github-pages</a> **这里发现参考资料里面的node包有问题,换成我们的</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义工作流名称为“部署 VitePress 站点到 Pages”</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy VitePress site to Pages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 触发工作流的事件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 当代码推送到 master 分支时触发</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 允许用户在 GitHub UI 手动触发工作流</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置tokenn访问权限</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置工作流运行时的权限</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 只读取仓库内容的权限</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 写入 GitHub Pages 的权限</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  id-token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 写入身份验证令牌的权限，用于工作流之间的通信</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置并发控制，确保同一时间只有一个部署任务在运行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 使用名为“pages”的并发组</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 不取消正在进行的运行，允许生产部署完成</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 构建工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 定义构建任务</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在最新的 Ubuntu 系统上运行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 检出代码仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 使用 GitHub 官方的检出动作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 获取完整的历史记录，用于生成正确的 lastUpdated 时间（如果需要）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 设置 pnpm 环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm/action-setup@v2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用 pnpm 官方的动作来设置 pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10.6.3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 指定要安装的 pnpm 版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 设置 Node.js 环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用 GitHub 官方的 Node.js 设置动作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22.14.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 使用 Node.js 18 版本</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 启用 pnpm 缓存以加速依赖安装</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 配置 GitHub Pages 环境</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用 GitHub 官方的动作来自动配置 Pages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 安装项目依赖</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm install</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 执行 pnpm install 命令安装依赖</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm install --frozen-lockfile</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #并通过 --frozen-lockfile 确保锁文件未被修改。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 使用 VitePress 构建项目</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          pnpm run docs:build            # 执行构建命令，生成静态文件到指定目录</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          touch .nojekyll           # 创建 .nojekyll 文件，避免 GitHub Pages 使用 Jekyll 处理站点</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           # 上传构建后的文件作为工作流 artifact（中间产物）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-pages-artifact@v3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 使用 GitHub 官方的动作上传文件</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vitepress/dist</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义部署任务</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 设置部署环境</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 环境名称为 github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 部署完成后获取页面的 URL</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 指定此任务依赖于 build 任务，必须在 build 完成后运行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    needs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 在build后面完成</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 在最新的 Ubuntu 系统上运行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 运行在最新版本的ubuntu系统上</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deployment</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 指定id# 为这个步骤设置一个 ID，方便后续引用</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/deploy-pages@v4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 将之前的构建产物部署到github pages中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 使用 GitHub 官方的动作部署到 Pages</span></span></code></pre></div><p>从代码的结构和逻辑来看，这段 GitHub Actions 工作流配置是合理且完整的，能够实现将 VitePress 站点部署到 GitHub Pages 的功能。以下是对代码合理性的具体分析：</p><h3 id="_1-触发条件-on" tabindex="-1">1. <strong>触发条件 (<code>on</code>)</strong>： <a class="header-anchor" href="#_1-触发条件-on" aria-label="Permalink to &quot;1. **触发条件 (\`on\`)**：&quot;">​</a></h3><ul><li><strong><code>push</code></strong>：当代码推送到 <code>master</code> 分支时触发工作流，这是常见的持续集成/持续部署 (CI/CD) 触发方式。</li><li><strong><code>workflow_dispatch</code></strong>：允许手动触发工作流，增加了灵活性，便于在需要时手动部署。</li></ul><h3 id="_2-权限设置-permissions" tabindex="-1">2. <strong>权限设置 (<code>permissions</code>)</strong>： <a class="header-anchor" href="#_2-权限设置-permissions" aria-label="Permalink to &quot;2. **权限设置 (\`permissions\`)**：&quot;">​</a></h3><ul><li><strong><code>contents: read</code></strong>：只读取仓库内容，确保工作流能够访问代码但不会意外修改。</li><li><strong><code>pages: write</code></strong>：允许写入 GitHub Pages，这是部署站点所必需的。</li><li><strong><code>id-token: write</code></strong>：允许写入身份验证令牌，用于工作流之间的通信和并发控制。</li></ul><h3 id="_3-并发控制-concurrency" tabindex="-1">3. <strong>并发控制 (<code>concurrency</code>)</strong>： <a class="header-anchor" href="#_3-并发控制-concurrency" aria-label="Permalink to &quot;3. **并发控制 (\`concurrency\`)**：&quot;">​</a></h3><ul><li><strong><code>group: pages</code></strong>：将所有与 Pages 相关的任务归为一组，确保同一时间只有一个部署任务在运行，避免冲突。</li><li><strong><code>cancel-in-progress: false</code></strong>：不取消正在进行的运行，确保生产部署能够完成，避免中断。</li></ul><h3 id="_4-构建任务-build" tabindex="-1">4. <strong>构建任务 (<code>build</code>)</strong>： <a class="header-anchor" href="#_4-构建任务-build" aria-label="Permalink to &quot;4. **构建任务 (\`build\`)**：&quot;">​</a></h3><ul><li><strong><code>runs-on: ubuntu-latest</code></strong>：在最新的 Ubuntu 系统上运行，这是 GitHub Actions 的标准环境，适合大多数 JavaScript 项目。</li><li><strong>步骤分析</strong>： <ul><li><strong><code>Checkout</code></strong>：检出代码仓库，<code>fetch-depth: 0</code> 确保获取完整的历史记录，这对于生成正确的 <code>lastUpdated</code> 时间（如果需要）是必要的。</li><li><strong><code>Setup pnpm</code></strong>：安装指定版本的 pnpm，确保依赖管理工具的一致性。</li><li><strong><code>Setup Node</code></strong>：设置 Node.js 环境，使用 Node.js 18 版本，并启用 pnpm 缓存以加速依赖安装。</li><li><strong><code>Setup Pages</code></strong>：自动配置 GitHub Pages 环境，简化部署流程。</li><li><strong><code>Install dependencies</code></strong>：安装项目依赖，确保所有必要的包都已准备好。</li><li><strong><code>Build with VitePress</code></strong>：运行构建命令，生成静态文件，并创建 <code>.nojekyll</code> 文件以避免 GitHub Pages 使用 Jekyll 处理站点。</li><li><strong><code>Upload artifact</code></strong>：将构建后的文件上传为工作流的中间产物，供后续的部署任务使用。</li></ul></li></ul><h3 id="_5-部署任务-deploy" tabindex="-1">5. <strong>部署任务 (<code>deploy</code>)</strong>： <a class="header-anchor" href="#_5-部署任务-deploy" aria-label="Permalink to &quot;5. **部署任务 (\`deploy\`)**：&quot;">​</a></h3><ul><li><strong><code>environment</code></strong>：定义部署环境为 <code>github-pages</code>，并从部署步骤的输出中获取页面的 URL。</li><li><strong><code>needs: build</code></strong>：明确依赖于 <code>build</code> 任务，确保部署基于最新的构建产物。</li><li><strong><code>runs-on: ubuntu-latest</code></strong>：同样在最新的 Ubuntu 系统上运行。</li><li><strong>步骤分析</strong>： <ul><li><strong><code>Deploy to GitHub Pages</code></strong>：使用官方动作将构建后的文件部署到 GitHub Pages，简单高效。</li></ul></li></ul><h3 id="_6-代码的可读性和注释" tabindex="-1">6. <strong>代码的可读性和注释</strong>： <a class="header-anchor" href="#_6-代码的可读性和注释" aria-label="Permalink to &quot;6. **代码的可读性和注释**：&quot;">​</a></h3><ul><li>每个步骤都有清晰的名称和注释，说明了其目的和作用，便于理解和维护。</li><li>使用了 GitHub Actions 的标准语法和官方动作，确保了代码的可靠性和可移植性。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>name: Deploy VitePress site to Pages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches: [master]</span></span>
<span class="line"><span>  workflow_dispatch:</span></span>
<span class="line"><span># 设置tokenn访问权限</span></span>
<span class="line"><span>permissions:</span></span>
<span class="line"><span>  contents: read</span></span>
<span class="line"><span>  pages: write</span></span>
<span class="line"><span>  id-token: write</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span>concurrency:</span></span>
<span class="line"><span>  group: pages</span></span>
<span class="line"><span>  cancel-in-progress: false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  # 构建工作</span></span>
<span class="line"><span>  build:</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Checkout</span></span>
<span class="line"><span>        uses: actions/checkout@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span>      - name: Setup pnpm</span></span>
<span class="line"><span>        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          version: 8.6.12 # 指定需要的 pnpm 版本</span></span>
<span class="line"><span>      - name: Setup Node</span></span>
<span class="line"><span>        uses: actions/setup-node@v3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          node-version: 18</span></span>
<span class="line"><span>          cache: pnpm # 设置缓存</span></span>
<span class="line"><span>      - name: Setup Pages</span></span>
<span class="line"><span>        uses: actions/configure-pages@v5  # 在工作流程自动配置GithubPages</span></span>
<span class="line"><span>      - name: Install dependencies</span></span>
<span class="line"><span>        run: pnpm install # 安装依赖</span></span>
<span class="line"><span>      - name: Build with VitePress</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          pnpm run docs:build # 启动项目</span></span>
<span class="line"><span>          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了</span></span>
<span class="line"><span>      - name: Upload artifact</span></span>
<span class="line"><span>        uses: actions/upload-pages-artifact@v3  # 上传构建产物</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 部署工作</span></span>
<span class="line"><span>  deploy:</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>      name: github-pages</span></span>
<span class="line"><span>      url: \${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL</span></span>
<span class="line"><span>    needs: build    # 在build后面完成</span></span>
<span class="line"><span>    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上</span></span>
<span class="line"><span>    name: Deploy</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      - name: Deploy to GitHub Pages</span></span>
<span class="line"><span>        id: deployment  # 指定id</span></span>
<span class="line"><span>        uses: actions/deploy-pages@v4 # 将之前的构建产物部署到github pages中</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结： <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结：&quot;">​</a></h3><p>这段代码逻辑清晰，配置合理，符合 GitHub Actions 的最佳实践。它能够正确地构建 VitePress 站点并部署到 GitHub Pages，同时通过并发控制和权限设置确保了部署的安全性和稳定性。如果项目需求没有特殊变化，这段代码可以直接使用。</p><p><img src="https://i-blog.csdnimg.cn/direct/29287e1d427840aba685302b147fec05.png" alt="在这里插入图片描述"></p><p>8.点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名：</p><p><img src="https://i-blog.csdnimg.cn/direct/c7436a384b364d3cb1cd97fc6410a13f.png" alt="在这里插入图片描述"></p><p><em><strong>最后，就部署完毕了</strong></em></p>`,50)]))}const g=a(l,[["render",e]]);export{c as __pageData,g as default};
