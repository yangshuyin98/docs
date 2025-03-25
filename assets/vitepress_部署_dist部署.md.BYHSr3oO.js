import{_ as a,c as n,o as e,ag as t}from"./chunks/framework.oP1PDRBo.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/部署/dist部署.md","filePath":"vitepress/部署/dist部署.md","lastUpdated":1742891798000}'),p={name:"vitepress/部署/dist部署.md"};function i(l,s,c,o,g,d){return e(),n("div",null,s[0]||(s[0]=[t(`<h2 id="部署到github-pages" tabindex="-1">部署到GitHub Pages <a class="header-anchor" href="#部署到github-pages" aria-label="Permalink to &quot;部署到GitHub Pages&quot;">​</a></h2><p>既然要部署到GitHub Pages，你得先在github新建一个仓库，因为要用他的GitHub Pages，所以仓库命名为username.github.io的形式，username是你github的用户名。然后点击设置</p><h3 id="选择pages" tabindex="-1">选择pages <a class="header-anchor" href="#选择pages" aria-label="Permalink to &quot;选择pages&quot;">​</a></h3><p>这里采用的是<code>Github Page</code>来进行部署，值得注意的是，如果要用<code>Github Page</code>来部署，那么需要在<code>git</code>上的仓库需要是<code>public</code>状态哦~</p><p>这里设置根目录/(root),当然也可以选择其它目录,点击保存，如果选择其它目录比如docs，config.js文件里，就需要配置一个base</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>    base:&#39;/docs/&#39;</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>最后选择一个主题(这里不选择我发现站点不生效,后面把打包后的代码推上来即可,会默认加载index.html)</p><p>然后将打包后的dist下的文件推送到你的远程仓库。vitepress官网给我们提供了一个脚本文件<code>deploy.sh</code>,我们只需要改下远程仓库即可</p><p>在根目录下创建一个文件夹，名为<code>vitepress-starter</code>。之后，建立一个文件，名为<code>deploy.sh</code>。具体代码如下：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env sh</span></span>
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
<span class="line"><span>cd -</span></span></code></pre></div><p>直接执行这个脚本文件，我们的打包后的文件就会被推送到我们的仓库。</p><p>之后，先把我们调试完成的代码，推到<code>github</code>上的<code>master</code>分支上，然后跑脚本，发布到生产环境。本地终端运行如下代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;xxx&quot;</span></span>
<span class="line"><span>git push origin HEAD:refs/for/master</span></span>
<span class="line"><span>sh ./vitepress-starter/deploy.sh</span></span></code></pre></div><p>最后，可以在仓库的 <code>Setting → Pages</code> 中看到最后的地址：</p><p>然后我们就可以直接访问我们的静态博客站点了。如果你想要自定义其它域名的话,可以创建一个组织然后在组织下新建仓库名为organization.github.io的形式(organization是你组织名)然后执行同样的操作即可。具体可以点这里[创建 GitHub Pages 站点(<a href="https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Fpages%2Fgetting-started-with-github-pages%2Fcreating-a-github-pages-site" target="_blank" rel="noreferrer">https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Fpages%2Fgetting-started-with-github-pages%2Fcreating-a-github-pages-site</a>)</p>`,15)]))}const u=a(p,[["render",i]]);export{h as __pageData,u as default};
