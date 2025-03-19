import{_ as a,c as n,o as e,ag as p}from"./chunks/framework.oP1PDRBo.js";const h=JSON.parse('{"title":"基于目录为VitePress生成侧边栏","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/部署/基于目录为VitePress生成侧边栏.md","filePath":"vitepress/部署/基于目录为VitePress生成侧边栏.md","lastUpdated":1742376365000}'),t={name:"vitepress/部署/基于目录为VitePress生成侧边栏.md"};function i(l,s,o,r,c,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="基于目录为vitepress生成侧边栏" tabindex="-1">基于目录为VitePress生成侧边栏 <a class="header-anchor" href="#基于目录为vitepress生成侧边栏" aria-label="Permalink to &quot;基于目录为VitePress生成侧边栏&quot;">​</a></h1><p>封装了一个用于自动生成VitePress 侧边栏的npm包，vitepress-plugin-autobar</p><h1 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -D vitepress-plugin-autobar</span></span>
<span class="line"><span>cnpm install -D vitepress-plugin-autobar</span></span>
<span class="line"><span>+ vitepress-plugin-autobar ^1.0.8</span></span></code></pre></div><h1 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h1><p>VitePress 是基于 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvitejs%2Fvite" target="_blank" rel="noreferrer">Vite</a>构建的文档网站框架，是 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fvuepress.vuejs.org%2F" target="_blank" rel="noreferrer">VuePress</a> 的升级版本。</p><p>Vue3的文档就是用VitePress搭建的。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -D vitepress-plugin-autobar</span></span>
<span class="line"><span>npm install -D vitepress-plugin-autobar</span></span></code></pre></div><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="getsidebar" tabindex="-1">getSideBar <a class="header-anchor" href="#getsidebar" aria-label="Permalink to &quot;getSideBar&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>getSideBar(rootDir = &#39;./&#39;, options?: Options)</span></span></code></pre></div><ul><li><strong>rootDir</strong>: <code>string</code> Directory to get configuration for</li><li><strong>options</strong>: <code>Options</code>Option to create configuration</li></ul><p>Returns <code>sidebar</code> configuration for VitePress calculated using structure of directory and files in given path.</p><p>Type of Options:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>interface Options {</span></span>
<span class="line"><span>  ignoreDirectory?: Array&lt;string&gt;, // Directoty path to ignore from being captured.</span></span>
<span class="line"><span>  ignoreMDFiles?: Array&lt;string&gt;, // File path to ignore from being captured.</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { getSideBar } from &#39;vitepress-plugin-autobar&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    sidebar: getSideBar(&quot;./docs&quot;),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="ignore-some-path" tabindex="-1">Ignore Some path <a class="header-anchor" href="#ignore-some-path" aria-label="Permalink to &quot;Ignore Some path&quot;">​</a></h2><p>You can pass options to keep some path out of the sidebar.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { getSideBar } from &#39;vitepress-plugin-autobar&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    sidebar: getSideBar(&quot;./docs&quot;, {</span></span>
<span class="line"><span>      ignoreMDFiles: [&#39;index&#39;],</span></span>
<span class="line"><span>      ignoreDirectory: [&#39;node_modules&#39;],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre></div><h1 id="how-it-work" tabindex="-1">How it work？ <a class="header-anchor" href="#how-it-work" aria-label="Permalink to &quot;How it work？&quot;">​</a></h1><p>如果你的目录是下面这样的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ 01.Introduction</span></span>
<span class="line"><span>│  │  └─ START.md</span></span>
<span class="line"><span>│  ├─ 02.Utils</span></span>
<span class="line"><span>│  │  └─ dateUtil.md</span></span>
<span class="line"><span>│  │  └─ storeUtil.md</span></span>
<span class="line"><span>│  └─ index.md</span></span></code></pre></div><p>调用 <code>getSideBar</code> 会生成下面这样的侧边栏数据。</p><ul><li>[x] Then <code>getSideBar</code> will return sidebar data like this. It will work well for vitepress.</li><li>[x] Sidebar will order by file path.</li><li>[x] Number in the file path will be removed.</li></ul><p><strong>文件的编号会被用于排序，并被自动去除。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;text&quot;:&quot;Introduction&quot;,</span></span>
<span class="line"><span>        &quot;items&quot;:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;text&quot;:&quot;START&quot;,</span></span>
<span class="line"><span>                &quot;link&quot;:&quot;01.Introduction/START&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;text&quot;:&quot;Utils&quot;,</span></span>
<span class="line"><span>        &quot;items&quot;:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;text&quot;:&quot;dateUtil&quot;,</span></span>
<span class="line"><span>                &quot;link&quot;:&quot;02.Utils/dateUtil&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;text&quot;:&quot;storeUtil&quot;,</span></span>
<span class="line"><span>                &quot;link&quot;:&quot;02.Utils/storeUtil&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;text&quot;:&quot;Index&quot;,</span></span>
<span class="line"><span>        &quot;items&quot;:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                &quot;text&quot;:&quot;Index&quot;,</span></span>
<span class="line"><span>                &quot;link&quot;:&quot;index&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h1 id="下一步计划" tabindex="-1">下一步计划 <a class="header-anchor" href="#下一步计划" aria-label="Permalink to &quot;下一步计划&quot;">​</a></h1><p>如果未来VitePress支持插件，将通过插件的形式，提供自动生成侧边栏的支持。</p><p>如果你有其他需求，欢迎提issus，合理的一定会实现。</p><p>If vitepress supports plugins, this component will extend the functionality of plugins.</p><h1 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h1><p>MIT</p><p>Copyright (c) 2022-present, luciozhang</p><h3 id="keywords" tabindex="-1">Keywords <a class="header-anchor" href="#keywords" aria-label="Permalink to &quot;Keywords&quot;">​</a></h3><ul><li><a href="https://www.npmjs.com/search?q=keywords:vitepress" target="_blank" rel="noreferrer">vitepress</a></li><li><a href="https://www.npmjs.com/search?q=keywords:sidebar" target="_blank" rel="noreferrer">sidebar</a></li><li><a href="https://www.npmjs.com/search?q=keywords:auto" target="_blank" rel="noreferrer">auto</a></li><li>[auto sidebar](<a href="https://www.npmjs.com/search?q=keywords:" target="_blank" rel="noreferrer">https://www.npmjs.com/search?q=keywords:</a>&quot;auto sidebar&quot;)</li><li><a href="https://www.npmjs.com/search?q=keywords:autobar" target="_blank" rel="noreferrer">autobar</a></li><li>[vitepress config](<a href="https://www.npmjs.com/search?q=keywords:" target="_blank" rel="noreferrer">https://www.npmjs.com/search?q=keywords:</a>&quot;vitepress config&quot;)</li></ul><h1 id="实现过程" tabindex="-1">实现过程 <a class="header-anchor" href="#实现过程" aria-label="Permalink to &quot;实现过程&quot;">​</a></h1><p>实现过程比较简单，这里只简单贴一下流程就可以了。</p><ul><li>新建npm包</li><li>添加TypeScript支持</li><li>添加ESLint（<strong>Quality</strong>）</li><li>代码实现：简单的遍历目录，按vitepress的配置结构生成sidebar数据。</li><li>添加rollup打包配置</li><li>添加Jest测试（<strong>Quality</strong>）</li><li>补充文档（<strong>Quality</strong>）</li><li>npm包发布</li></ul><p>后面带<code>Quality</code>的流程，都是影响npm质量评分的项目，不要偷懒不做。</p>`,40)]))}const g=a(t,[["render",i]]);export{h as __pageData,g as default};
