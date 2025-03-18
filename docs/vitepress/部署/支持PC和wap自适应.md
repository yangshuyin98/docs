# 二. vitepress

`vitepress`是由`vite`的核心开发成员，[Evan You](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fyyx990803) 创建，基于`vite`提供极速的`hmr`能力和快速的服务器启动。配置也十分简单，几乎只用书写`markdown`，就能搭建一个高性能的网站。

注意：截止目前，`vitepress`依然没有发布正式版本，当前最新版本是`1.0.0-alpha.29`。不建议使用在特别正式的环境。

## 1.vitepress最佳实践

一般去学习一个新东西，往往会先去看它的官网：

- [中文官网](https://link.juejin.cn/?target=https%3A%2F%2Fvitejs.cn%2Fvitepress%2F)
- [英文官方](https://link.juejin.cn/?target=https%3A%2F%2Fvitepress.vuejs.org%2F)
- [github地址](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvitepress)

但由于它的中文文档已经长达一年多不更新。英文文档虽然更新的很快，但有些部分仍然在编写中。所以最佳实践是，找一个比较 **有名气** 且是用`vitepress`搭建的网站，看它的源码，往往就是最佳实践。

比如说`vite`官网：[vitejs.dev/](https://link.juejin.cn/?target=https%3A%2F%2Fvitejs.dev%2F)

### (1).创建项目

```
mkdir docs
pnpm init
```

查看`vite`官网的`vitepress`是哪个版本，使用跟它一样的版本。 进入`vite`的[官方仓库](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvitejs%2Fvite)，查看项目下的`package.json`,找到`vitepress`的版本

```
pnpm i vitepress@1.0.0-alpha.29
```

### (2).查看vite的最佳实践

找到`vite`项目中的`docs`目录，查看目录结构

可以一个个点进去看看目录结构，先说下结论，

`.vitepress`是配置文件(必需)。

`index.md`是文档的入口。

`public`是存放静态文件的地方，比如图片。

`_data`里面是核心开发者的信息。其他目录里面都是`markdown`文件。

### (3).配置首页

首先创建`index.md`，它的内容就是首页，具体配置我们可以参考`vite`首页，基本就能发现是怎么配置的

```
---
layout: home

title: Vite
titleTemplate: Next Generation Frontend Tooling

hero:
  name: Vite // 网站的左上角标题
  text: Next Generation Frontend Tooling // 最中间的文字
  tagline: Get ready for a development environment that can finally catch up with you. // 最中间的文字
  image:
    src: /logo-with-shadow.png // 页面中最大的那个图标，默认地址 /public，放在public中无需写完整路径
    alt: Vite
  actions: // 对应页面上，vite英文介绍下面的三个按钮
    - theme: brand
      text: Get Started
      link: /guide/
      
   ... // 省略一部分

features: // 页面中下位置的文字介绍
  - icon: 💡
    title: Instant Server Start
    details: On demand file serving over native ESM, no bundling required!
  - icon: ⚡️
    title: Lightning Fast HMR
    details: Hot Module Replacement (HMR) that stays fast regardless of app size.
  ... // 省略一部分
---


```

### (4).配置导航栏nav和config

那么问题来了，最上方的导航栏是怎么配置的呢。导航栏在`.vitepress`里面的`config.ts`进行配置 目录结构如下

配置`config.ts`的内容







# 三. github actions配置

## 1.github的配置

找到项目`setting`,配置`secrets`中的`actions`

A.其中`secrets`是在个人设置`setting`进行设置

个人设置`setting` →Developer settings→Personal access tokens→Tokens（classic）→

```
ghp_yanghhY3sIfA1nYNJ8vzSoGARtqth2itHB0RzI0M
```

B.找到项目docs中的`setting`,配置`secrets`中的`actions`

→setting→Secrets and variables→ Actions→New repository→name=docs→secrets→create→→→

## 2.项目增加actions

新建目录

```
name: pages-build-site
on: 
  push:  // 有代码push或者merge到main分支时，才进行下面的操作
    branches: 
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest 
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - uses: pnpm/action-setup@v2 // 配置使用pnpm
        name: Install pnpm
        id: pnpm-install
        with:
          version: 7
          run_install: false
      
      - name: Get pnpm store directory
        id: pnpm-cache
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT

      - uses: actions/cache@v3
        name: Setup pnpm cache
        with:
          path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-

      - name: Install dependencies
        run: pnpm install

      - name: Build docs
        run: pnpm -F docs build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.RAN_ACTIONS_TOKEN }} // 配置在项目里的secrets
          exclude_assets: ''
          publish_dir: packages/docs/.vitepress/dist // 需要发布内容的路径

```

上述命令简单来说就是：监听是否`push`或者`merge`到`main`分支，执行我们写好的打包命令`pnpm -F docs build`, 将指定路径的文件`packages/docs/.vitepress/dist`发布到一个指定的分支，默认是`gh-pages`。

如果这时候提交代码到`main`分支，点开`actions`能看到

如果这时候提交代码到`main`分支，点开`actions`能看到





如果有报错，我们还可以点进去看具体的报错情况，进行修改

需要注意下，设置部署网站的分支，因为静态网站的资源都在`gh-pages`分支上

至此访问`github`安排的链接，就可以看到页面啦



已经添加`MIT`协议，可以随便使用，欢迎`star`，`issue`，`pr`，互相学习，一起进步～



## 部署到GitHub Pages

既然要部署到GitHub Pages，你得先在github新建一个仓库，因为要用他的GitHub Pages，所以仓库命名为username.github.io的形式，username是你github的用户名。然后点击设置

选择pages

这里设置根目录/(root),当然也可以选择其它目录,点击保存，如果选择其它目录比如docs，config.js就需要配置一个base

```
export default {
    base:'/docs/'
  }
```

最后选择一个主题(这里不选择我发现站点不生效,后面把打包后的代码推上来即可,会默认加载index.html)

然后将打包后的dist下的文件推送到你的远程仓库。vitepress官网给我们提供了一个脚本文件`deploy.sh`,我们只需要改下远程仓库即可

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

直接执行这个脚本文件，我们的打包后的文件就会被推送到我们的仓库。然后我们就可以直接访问我们的静态博客站点了。如果你想要自定义其它域名的话,可以创建一个组织然后在组织下新建仓库名为organization.github.io的形式(organization是你组织名)然后执行同样的操作即可。具体可以点这里[创建 GitHub Pages 站点(https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Fpages%2Fgetting-started-with-github-pages%2Fcreating-a-github-pages-site)

