## 部署到GitHub Pages

既然要部署到GitHub Pages，你得先在github新建一个仓库，因为要用他的GitHub Pages，所以仓库命名为username.github.io的形式，username是你github的用户名。然后点击设置

### 选择pages

这里采用的是`Github Page`来进行部署，值得注意的是，如果要用`Github Page`来部署，那么需要在`git`上的仓库需要是`public`状态哦~

这里设置根目录/(root),当然也可以选择其它目录,点击保存，如果选择其它目录比如docs，config.js文件里，就需要配置一个base

```
export default {
    base:'/docs/'
  }
```

最后选择一个主题(这里不选择我发现站点不生效,后面把打包后的代码推上来即可,会默认加载index.html)

然后将打包后的dist下的文件推送到你的远程仓库。vitepress官网给我们提供了一个脚本文件`deploy.sh`,我们只需要改下远程仓库即可

在根目录下创建一个文件夹，名为`vitepress-starter`。之后，建立一个文件，名为`deploy.sh`。具体代码如下：

~~~text
#!/usr/bin/env sh
# 忽略错误
set -e
# 构建
npm run docs:build
# 进入待发布的目录
cd docs/.vitepress/dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd -
~~~

直接执行这个脚本文件，我们的打包后的文件就会被推送到我们的仓库。

之后，先把我们调试完成的代码，推到`github`上的`master`分支上，然后跑脚本，发布到生产环境。本地终端运行如下代码：

```
git add .
git commit -m "xxx"
git push origin HEAD:refs/for/master
sh ./vitepress-starter/deploy.sh

```

最后，可以在仓库的 `Setting → Pages` 中看到最后的地址：

然后我们就可以直接访问我们的静态博客站点了。如果你想要自定义其它域名的话,可以创建一个组织然后在组织下新建仓库名为organization.github.io的形式(organization是你组织名)然后执行同样的操作即可。具体可以点这里[创建 GitHub Pages 站点(https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Fpages%2Fgetting-started-with-github-pages%2Fcreating-a-github-pages-site)

