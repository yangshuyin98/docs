import{_ as a,c as n,o as t,ag as e}from"./chunks/framework.oP1PDRBo.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/note.md","filePath":"notes/note.md","lastUpdated":1742312857000}'),p={name:"notes/note.md"};function i(l,s,g,o,c,d){return t(),n("div",null,s[0]||(s[0]=[e(`<h2 id="部署到github-pages" tabindex="-1">部署到GitHub Pages <a class="header-anchor" href="#部署到github-pages" aria-label="Permalink to &quot;部署到GitHub Pages&quot;">​</a></h2><p>既然要部署到GitHub Pages，你得先在github新建一个仓库，因为要用他的GitHub Pages，所以仓库命名为username.github.io的形式，username是你github的用户名。然后点击设置</p><p>选择pages</p><p>这里设置根目录/(root),当然也可以选择其它目录,点击保存，如果选择其它目录比如docs，config.js就需要配置一个base</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>    base:&#39;/docs/&#39;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>最后选择一个主题(这里不选择我发现站点不生效,后面把打包后的代码推上来即可,会默认加载index.html)</p><p>然后将打包后的dist下的文件推送到你的远程仓库。vitepress官网给我们提供了一个脚本文件<code>deploy.sh</code>,我们只需要改下远程仓库即可</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
<span class="line"><span># 忽略错误</span></span>
<span class="line"><span>set -e</span></span>
<span class="line"><span># 构建</span></span>
<span class="line"><span>npm run docs:build</span></span>
<span class="line"><span># 进入待发布的目录</span></span>
<span class="line"><span>cd docs/.vitepress/dist</span></span>
<span class="line"><span># 如果是发布到自定义域名</span></span>
<span class="line"><span># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"><span>git init</span></span>
<span class="line"><span>git add -A</span></span>
<span class="line"><span>git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span># 如果部署到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"><span># 如果是部署到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"><span>cd -</span></span></code></pre></div><p>直接执行这个脚本文件，我们的打包后的文件就会被推送到我们的仓库。然后我们就可以直接访问我们的静态博客站点了。如果你想要自定义其它域名的话,可以创建一个组织然后在组织下新建仓库名为organization.github.io的形式(organization是你组织名)然后执行同样的操作即可。具体可以点这里[创建 GitHub Pages 站点(<a href="https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Fpages%2Fgetting-started-with-github-pages%2Fcreating-a-github-pages-site" target="_blank" rel="noreferrer">https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Fpages%2Fgetting-started-with-github-pages%2Fcreating-a-github-pages-site</a>)</p>`,9)]))}const u=a(p,[["render",i]]);export{h as __pageData,u as default};
