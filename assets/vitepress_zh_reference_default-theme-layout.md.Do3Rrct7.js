import{_ as s,c as e,o as i,ag as t}from"./chunks/framework.oP1PDRBo.js";const c=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/zh/reference/default-theme-layout.md","filePath":"vitepress/zh/reference/default-theme-layout.md","lastUpdated":1742361749000}'),l={name:"vitepress/zh/reference/default-theme-layout.md"};function n(h,a,o,p,d,r){return i(),e("div",null,a[0]||(a[0]=[t(`<h1 id="layout" tabindex="-1">布局 <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;布局 {#layout}&quot;">​</a></h1><p>可以通过设置页面 <a href="./frontmatter-config.html">frontmatter</a> 选项来选择页面布局。有 3 种布局选项 <code>doc</code>、<code>page</code> 和 <code>home</code>。如果未指定任何内容，则该页面将被视为 <code>doc</code> 页面。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="doc-layout" tabindex="-1">doc 布局 <a class="header-anchor" href="#doc-layout" aria-label="Permalink to &quot;doc 布局 {#doc-layout}&quot;">​</a></h2><p><code>doc</code> 是默认布局，它将整个 Markdown 内容设置为“documentation”外观。它的工作原理是将整个内容包装在 css <code>vp-doc</code> 类中，并将样式应用于它下面的元素。</p><p>几乎所有通用元素，例如 <code>p</code>, 或 <code>h2</code> 都有特殊的样式。因此，请记住，如果在 Markdown 内容中添加任何自定义 HTML，这些内容也会受到这些样式的影响。</p><p>它还提供下面列出的文档特定功能。这些功能仅在此布局中启用。</p><ul><li><a href="./default-theme-edit-link.html">编辑链接</a></li><li><a href="./default-theme-prev-next-links.html">上下页链接</a></li><li><a href="./default-theme-config.html#outline">大纲</a></li><li><a href="./default-theme-carbon-ads.html">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">page 布局 <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;page 布局 {#page-layout}&quot;">​</a></h2><p><code>page</code> 被视为“空白页”。Markdown 仍然会被解析，所有的 <a href="./../guide/markdown.html">Markdown 扩展</a> 都和 <code>doc</code> 布局一样运行，但它没有任何默认样式。</p><p><code>page</code> 布局将使可以自行设计所有内容，而不会受 VitePress 主题影响。当想要创建自己的自定义页面时，这很有用。</p><p>请注意，即使在此布局中，如果页面具有匹配的侧边栏配置，侧边栏仍会显示。</p><h2 id="home-layout" tabindex="-1">home 布局 <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;home 布局 {#home-layout}&quot;">​</a></h2><p><code>home</code> 将生成模板化的“主页”。在此布局中，可以设置额外的选项，例如 <code>hero</code> 和 <code>features</code> 以进一步自定义内容。请访问<a href="./default-theme-home-page.html">默认主题: 主页</a>了解更多详情。</p><h2 id="no-layout" tabindex="-1">无布局 <a class="header-anchor" href="#no-layout" aria-label="Permalink to &quot;无布局 {#no-layout}&quot;">​</a></h2><p>如果不想要任何布局，可以通过 frontmatter 传递 <code>layout: false</code>。如果想要一个完全可自定义的登录页面（默认情况下没有任何侧边栏、导航栏或页脚），此选项很有用。</p><h2 id="custom-layout" tabindex="-1">自定义布局 <a class="header-anchor" href="#custom-layout" aria-label="Permalink to &quot;自定义布局 {#custom-layout}&quot;">​</a></h2><p>也可以使用自定义布局：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">foo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>这将在上下文中查找注册名为 <code>foo</code> 的组件。例如，可以在 <code>.vitepress/theme/index.ts</code>中全局注册组件：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Foo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21)]))}const u=s(l,[["render",n]]);export{c as __pageData,u as default};
