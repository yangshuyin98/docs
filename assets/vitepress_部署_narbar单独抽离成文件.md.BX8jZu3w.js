import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.oP1PDRBo.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/部署/narbar单独抽离成文件.md","filePath":"vitepress/部署/narbar单独抽离成文件.md","lastUpdated":1744277030000}'),t={name:"vitepress/部署/narbar单独抽离成文件.md"};function i(l,s,o,c,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h4 id="侧边栏美化sidebar" tabindex="-1">侧边栏美化Sidebar <a class="header-anchor" href="#侧边栏美化sidebar" aria-label="Permalink to &quot;侧边栏美化Sidebar&quot;">​</a></h4><p>我们当前只是定义了“数据结构与算法”专栏的入口文件，那在这个页面中的侧边栏，我们要展示的是「数据结构与算法」这个专栏所要填充的文章。比如：栈、队列、字典和集合等等。</p><p>那接下来，我们先去专栏下面建立相关文章的md文件。在<code>docs/column/Algorithm</code>文件下定义以下几个文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>|——— docs</span></span>
<span class="line"><span>  |——— column</span></span>
<span class="line"><span>    |——— Algorithm</span></span>
<span class="line"><span>      |——— 001_stack.md // 里面可以先随意填充些可辨识的内容</span></span>
<span class="line"><span>      |——— 002_queue.md</span></span>
<span class="line"><span>      |——— 003_dictionary.md</span></span>
<span class="line"><span>      |——— 004_truee.md</span></span>
<span class="line"><span>      |——— index.md</span></span></code></pre></div><p>想要生成侧边栏的内容有了，下面我们去给侧边栏做相应的配置。同样，考虑到以后会生成很多侧边栏，我们同样把<code>sidebar</code>单独抽离成文件。<strong>具体代码如下：</strong></p><p>设置/relaConf/nav.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// docs/.vitepress/relaConf/nav.ts</span></span>
<span class="line"><span>import type { DefaultTheme } from &#39;vitepress&#39;</span></span>
<span class="line"><span>export const navbar: DefaultTheme.NavItem[] = [</span></span>
<span class="line"><span>    { text: &#39;Home&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>设置/relaConf/index.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件</span></span>
<span class="line"><span>export * from &#39;./sidebar&#39;;</span></span>
<span class="line"><span>export * from &#39;./nav&#39;;</span></span></code></pre></div><p>设置/config.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 在config.ts中引用</span></span>
<span class="line"><span>import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span>import { navbar} from &#39;./relaConf&#39;;</span></span>
<span class="line"><span>export default defineConfig({   </span></span>
<span class="line"><span>    themeConfig: {   </span></span>
<span class="line"><span>    nav: navbar, // 把定义的navbar给替换进来</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>最终，我们来看下实现的效果。<strong>具体如下图所示：</strong></p><p>这样，就成功替换了当前专栏的导航栏。这里我们只对一个专栏做导航栏配置，如果有多个专栏的情况下，按照上面的方法，继续叠加配置即可。</p><p>写到这里的时候，周一突然发现个问题，导航栏的配置每回更新都要去手动修改，有时候又很容易出现错误订正的情况。然后我就在想，有没有什么办法，可以通过npm包等方式，来自动生成sidebar的配置？</p><p>实践了一番下来，周一觉得跟自己平常的归类整理方式相比，自定义化的程度比较低。</p>`,15)]))}const v=a(t,[["render",i]]);export{h as __pageData,v as default};
