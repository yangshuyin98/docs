---
title: Vuepress搭建个人博客_基础篇vuepress@1.9.10
date: 2025-03-11
tags:
 - 编程
 - Vuepress

 - 学习笔记
categories:
 - 技术分享

---

## 前言

哈喽，大家好，又和大家见面了。这是一期关于用 `Vuepress` 搭建博客并将它部署到 `Github Pages` 上的教程文章，事情的起因还得从我上周发的一篇沸点说起。

第一次打开的时候可能会比较卡，如果卡的话建议用切换数据流量来打开博客。手机移动端和电脑 `PC` 端都是可以查看的。

这里我会介绍两版教程，一是基础版，二是升级版。

## 一、何为Vuepress

在开始搭建博客前，我们先来介绍一下 `Vuepress`。

VuePress 是 Vuejs 官方提供的一个是Vue驱动的静态网站生成器，基于[Markdown语法](https://so.csdn.net/so/search?q=Markdown语法&spm=1001.2101.3001.7020)生成网页。简单的说它就是一个快速建设文档站点的工具，在简单配置好功能后，需要做的事情就剩下写好一个个 Markdown 文档，并且可以将其发布到github。

VuePress ,一个全新的基于 vue 实现的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。特别适用于构建文档和博客，如果想快速搭建一个静态的博客网站来简单记录记录笔记或者文章，用 `Vuepress` 是个不错的选择，因为它对新手很友好。

`Vuepress` 是由 `Vue` 支持的静态网站生成工具，`Vue` 大家都知道或者使用过吧，一种轻量级且好用的框架，因为 `Vue` 上手起来很简单，所以 `Vuepress` 使用起来也不难。

VuePress 由两部分组成：一个以 Vue 驱动的主题系统简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。

关于 VuePress 更多的内容，可以了解 VuePress 的官方文档：

vuepress官网：<https://vuepress.vuejs.org/zh/>

介绍完 `Vuepress`，我们就可以开始进行博客的搭建了。

结构简单清晰明了，没有特别复杂的东西。接下来我开始手把手教大家搭建此项目。

## 二、环境准备

1、安装NodeJs： [NodeJs 安装教程](https://blog.csdn.net/weixin_54546701/article/details/134153746)

首先，确保你的系统中已安装Node.js。可以通过命令行输入`node -v`和`npm -v`来检查Node.js和npm的版本。

如果未安装，请先下载并安装Node.js。 npm V11.2.0

**安装cnpm**  

使用以下命令全局安装cnpm：

```bash
 npm install -g cnpm --registry=https://mirrors.cloud.tencent.com/npm/
```

安装完成后，可以通过以下命令检查cnpm是否安装成功：

```bash
cnpm -v
```

pnpm i eslint -D

cnpm升级到最新

```bash
cnpm install -g cnpm@latest
```

2、安装Git ：[Git基础使用教程](https://blog.csdn.net/weixin_54546701/article/details/132799182)

3、注册GitHub账号：[GitHub官网](https://github.com/)

## 三、安装运行vuepress

**#全局安装 VuePress到固定版本**（VuePress的最新版本为2.0.0-rc.2，这一版本在2024年5月)

```bash
npm install -g vuepress@1.9.10
```

### A1本地初步搭建

接下来，创建一个新的 VuePress 项目：创建并进入一个新文件夹，这里我们把它命名为 **blogs**（博客）吧。

创建一个目录

```bash
mkdir blogs
```

进入目录

```bash
cd blogs
```

然后使用 **npm** 或者 **yarn** 进行初始化，我这里使用的是 **npm** 包管理器。

初始化项目：生成一个package.json文件

```bash
npm  init  -y
```

安装 VuePress 为本地依赖。

```bash
npm install -D vuepress@1.9.10
```

- `-D`：这是一个参数，代表 `--save-dev` 的缩写。它的作用是将安装的包作为开发依赖项添加到项目的 `package.json` 文件中。这样做的好处是，在未来的项目开发中，如果你需要重新安装所有依赖或与其他开发者共享依赖列表，`package.json` 可以作为一个依赖清单。

  ```bash
  cnpm list
  `-- vuepress@1.9.10
  ```

**安装主题**，需安装默认主题：

```bash
npm install -D @vuepress/theme-default
```

完成这些之后开始创建我们的第一篇文档，先创建 **docs** 文件夹，然后在文件夹下创建 **README.md** 文件，**README.md** 文件中我们可以随意加入点内容，比如 Hello Vuepress。

创建一个 markdown 文件 

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

这里需要注意，如果使用如下命令创建的话，后续可能会出现乱码的情况，这时候只需将**README.md** 的编码格式改为 UTF-8 即可

最后，我们再向 **package.json** 中的 **scripts** 里添加一些 scripts。

开始编写文档  vuepress dev

构建    vuepress build

```javascript
"scripts": {    
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```

使用npm，在本地启动服务器， VuePress  启动一个热重载的开发服务器。

```bash
npm run docs:dev 
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/368a47b05b4d401894ee38b1ce774c44~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

项目运行在 `8080` 端口。

先给大家看一下最终完成之后的博客项目的目录结构吧。

```text
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json

docs/.vuepress: 用于存放全局的配置、组件、静态资源等。
docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。
docs/.vuepress/theme: 用于存放本地主题。
docs/.vuepress/styles: 用于存放样式相关的文件。
docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
docs/.vuepress/styles/palette.styl: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
docs/.vuepress/public: 静态资源目录。
docs/.vuepress/templates: 存储 HTML 模板文件。
docs/.vuepress/templates/dev.html: 用于开发环境的 HTML 模板文件。
docs/.vuepress/templates/ssr.html: 构建时基于 Vue SSR 的 HTML 模板文件。
docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。
docs/.vuepress/enhanceApp.js: 客户端应用的增强。
```

### A2启动失败

#### 1.检查并更新配置文件

VuePress 2.x 要求显式指定 **bundler**（打包工具）和 **theme**（主题），需在 `.vuepress/config.js` 中添加以下配置：

**如果未安装 bundler**，需单独安装对应包：

```bash
npm install -D @vuepress/bundler-webpack@next
```

**如果未安装主题**，需安装默认主题：

```bash
npm install -D @vuepress/theme-default@next
```

**原因**：VuePress 2.x 将核心功能模块化，需手动选择打包工具和主题

#### 2. **验证项目目录结构**

```text
docs/
├─ .vuepress/
│  └─ config.js   # 配置文件
└─ README.md      # 文档入口
```

#### 3. **清理并重新安装依赖**

若依赖安装不完整或存在版本冲突，可尝试以下步骤：

清理npm缓存，避免旧版本依赖的影响：

```bash
npm install来重新安装所有依赖项      # 删除现有依赖
npm cache clean --force来清理npm缓存
rmdir /s /q node_modules     # 删除node_modules文件夹

npm install          # 重新安装
```

此操作可解决因依赖缺失或版本不一致导致的问题，类似其他 Vue 项目中依赖问题的通用解法。

##### 4. **检查环境变量与脚本命令**

**脚本命令**：在 `package.json` 中确认脚本定义正确：

```text
{
  "scripts": {
    "docs:dev": "vuepress dev docs"
  }
}
```

确保命令指向正确的文档目录（如 `docs`）

**全局依赖冲突**：若全局安装了旧版 VuePress，可通过 `npm uninstall -g vuepress` 卸载，避免冲突

```bash
npm cache clean --force
```

查看详细的错误日志，获取更多关于错误的信息：

```bash
npm run docs:dev --verbose
```

完成这些之后一个初步的博客框架就出来了，通过如下代码在本地启动服务器可以查看。

### A3基本配置文件

#### 1. 添加标题和描述

在 项目根目录**docs** 文件夹下添加 **.vuepress** 目录，所有 `VuePress` 相关的文件都会被放在这里。在 **.vuepress** 文件夹下添加 **config.js**，配置网站的标题和描述，此时项目的目录结构是这样的：

```text
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json      
```

编辑 `.vuepress/config.js` 文件，添加基本配置：

```js
//config.js   (标题和描述自定义)
module.exports = {
  title: 'XXX的博客',
  description: "我的个人博客",    // 网站的描述
  theme: '@vuepress/theme-default', // 默认主题，可替换为自定义主题
}
```

### 静态资源

有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。

如果你希望引用一张放在 .vuepress/public 中的图片，你需要使用这样路径：/image.png

VuePress 遵循 “约定优于配置” 的原则，静态资源图片存放在 **.vuepress** 文件夹下的 **public** 文件夹中。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/203b488109d747b0a521ea7e5b129504.png)

### Markdown 应用

所有的标题将会自动地应用 anchor（锚） 链接，anchor 的渲染可以通过 markdown.anchor 来配置。

网站内部的链接，将会被转换成 router-link 用于 SPA 导航。同时，站内的每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /。

以如下的文件结构为例：

```text
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 foo/one.md 中：

```text
[Home](/)                                         <!-- 跳转到根部的 README.md -->
[foo](/foo/)                                       <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading)                          <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md)                    <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html)                         <!-- 也可以用 .html -->
```

你会得到这样的页面：你会得到这样的页面：

现在你已经了解了基本的目录结构，并且已经学习了如何使用 Markdown 语法，现在你就可以在这个项目中添加内容了。

### Front Matter

front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

```md
---
title: 博客标题
author: 作者名
description: 当前页面的描述
layout: 布局
---
```

除去这些还有很多，需要根据开发者自身需求使用调整

默认的主题提供了一个首页（Homepage）的布局。想要使用它，需要在你的根级 README.md 的 YAML front matter 指定 home: true。以下是一个如何使用的例子：

#### 2.修改首页的配置

默认的主题提供了一个首页（Homepage）的布局(用于这个网站的主页)。想要使用它，需要在你的根级 README.md的home: true，然后添加数据

在docs目录下创建主页README.md配置如下：

添加主页标题和描述 

```md
---
home: true                            
heroImage: /avatar.jpg
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/                  <!-- 跳转到 /zh/guide/文件夹的 index.html -->
features:
- title: 简洁至上 
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: Copyright © 2018-present baitao
---
```

你可以将相应的内容设置为 null 来禁用标题和副标题。

任何 YAML front matter 之后额外的内容将会以普通的 markdown 被渲染，并插入到 features 的后面。

使用npm， 热重载<http://localhost:8080>

```bash
npm run docs:dev 
```

显示网站的标题，与主页

#### 3. 添加导航栏配置

你可以通过 themeConfig.logo 增加导航栏 Logo ，Logo 可以被放置在公共文件目录：

```js
// 以下内容放在 .vuepress/config.js 中
module.exports = {
    themeConfig: {
        logo: '/assets/logo.png',
    }
}
```

**编辑 .vuepress/config.js** 创建/public/assets/img/

```js
module.exports = {
  themeConfig: {
    logo: '/assets/img/comet.png',
  }
}
```

你可以通过 themeConfig.nav 增加一些导航栏链接，并且你可以添加下拉选项，其他网站:

我们在首页的右上角添加导航栏，需要修改 **config.js**中的nav：

```js
module.exports = {
    title: "xxx博客",     // 网站的标题
    description: "我的个人博客",    // 网站的描述
    theme: '@vuepress/theme-default', // 默认主题，可替换为自定义主题
    themeConfig: {
        logo: '/assets/img/comet.png',
        // 导航栏
        nav: [
            { text: '首页', link: '/' },//标签
            {//标签
                text: 'note',
                items: [{
                    text: 'front', items: [
                        { text: 'HTML-CSS', link: '/note/front/html-css/' },
                        { text: 'JavaScript', link: '/note/front/javascript/' },
                        { text: 'Vue', link: '/note/front/Vue' },
                    ]
                },
                {
                    text: 'back_end', items: [
                        { text: 'MYSQL', link: '/note/back_end/mysql/' },
                        { text: 'Spring', link: '/note/back_end/spring/' }
                    ]
                },
                ]
            },
            {//标签
                text: 'vuepress',
                items: [
                    { text: 'Node.js安装', link: '/vuepress/Node.js安装/' },
                    { text: '文档规范', link: '/vuepress/文档规范/' },
                    { text: 'vuepress官方搭建', link: '/vuepress/vuepress官方搭建/' },
                    { text: 'vuepress@1.9.10', link: '/vuepress/vuepress@1.9.10/' },
                    { text: '基础篇vuepress', link: '/vuepress/基础篇/' },
                ]
            },
            {//标签
                text: 'blogs',
                items: [
                    { text: 'food-001', link: '/blogs/food-001/' },
                    { text: 'garden-001', link: '/blogs/garden-001/' },
                    { text: "health-001", link: "/blogs/health-001" },
                    { text: "life-001", link: "/blogs/life-001" },
                    { text: "movie-001", link: "/blogs/movie-001" },
                    { text: "music-001", link: "/blogs/music-001" },
                    { text: "photo-001", link: "/blogs/photo-001" },
                    { text: "reading-001", link: "/blogs/reading-001" },
                    { text: "travel-001", link: "/blogs/travel-001" },
                ]
            },
            {//标签
                text: '百度', link: 'https://www.baidu.com/'
            },
            {//标签
                text: '开源项目',
                items: [
                    { text: "掘金", link: "https://XXX" },
                    { text: "Github", link: "https:XXX" }
                ]
            },
            { text: '关于我', link: '/about/about.md' }
        ],
        //导航栏结束
    }
}


```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0e39d36d734b866bf6c07950be8092b6.png)

使用npm， 热重载

```bash
npm run docs:dev 
```

显示网站的标题，与主页，与导航栏

#### 4. 添加侧边栏sidebar

想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组：

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
}
```

你可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 */README.md，这个链接的文字将会被自动获取到（无论你是声明为页面的第一个 header，还是明确地在 YAML front matter 中指定页面的标题）。如果你想要显示地指定链接的文字，使用一个格式为  [link, text] 的数组。

你可以通过使用对象来将侧边栏划分成多个组：

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }
}
```

侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。

如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：

```text
.
├─ README.md
├─ contact.md
├─ about.md
├─ foo/
│ ├─ README.md
│ ├─ one.md
│ └─ two.md
└─ bar/
├─ README.md
├─ three.md
└─ four.md
```

接着，遵循以下的侧边栏配置：

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        }
    }
}
```

侧边栏的内容放在了blogs下了

我们在 **config.js** 添加如下配置：

```js
module.exports = {
  title: "xxx博客",     // 网站的标题
  description: "我的个人博客",    // 网站的描述
  theme: 'reco',
  themeConfig: {
    nav: [...],
    sidebar: {
            '/blogs/': [
                "",
                "coding-001",
                "food-001",
                "garden-001",
                "health-001",
                "life-001",
                "movie-001",
                "music-001",
                "photo-001",
                "reading-001",
                "travel-001",
            ],
            "/note/front/": [
                "",
                "html-css",
                "javascript",
                "Vue",
            ],
            "/note/back_end/": [
                "",
                "mysql",
                "spring",
            ],
            "/vuepress/": [
                "",
                "Node.js安装",
                "vuepress官方搭建",
                "vuepress@1.9.10",
                "基础篇",
                "文档规范",
            ],

        },
        //侧边栏结束
        sidebarDepth: 2,  //添加了全局的 sidebarDepth: 2 配置，可以显示到 h3 级别的标题
        lastUpdated: 'Last Updated',    //最后更新时间。//



    }//themeConfig结束
}//module.exports结束
```

如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏，你可以通过 YAML front matter 来实现：

```text
--- 
sidebar: auto 
---
```

你也可以通过配置来在所有页面中启用它：

```js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: 'auto'
    }
}
```

##### **侧边栏sidebar的两种形式系统**

支持多路径映射、自动生成侧边栏：

- **对象形式**（按路径匹配）：

```js
themeConfig: {
  sidebar: {
    '/guide/': [
      { text: '安装', link: '/guide/install' },
      { text: '配置', collapsible: true, children: [...] }
      { text: '快速开始', collapsible: true, children: ['/guide/install.md']  }
    ]
  }
}
```

- **数组形式**（全局生效）：

```js
sidebar: [
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' }
]
```

##### **禁止侧边栏**

```md
---
lang: zh-CN
title: 页面的标题
date: 2077-10-01
description: 页面的描述，可省略
sidebar: false         #  sidebar: false   禁用侧边栏 auto 开启
---
```

#### 5. 浏览器图标favicon图标自定义

将图片先转成favicon.**ico**格式：

将图片放在 **public** 目录下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c1459bfc14734e34a1acdd59279b7b98.png)

编辑 .vuepress/config.js

在 **config.js**中添加以下配置，设置favicon.ico的路径。

```js
  head: [
    [
      'link',{ rel: 'icon', href: '/favicon.ico' }
    ]
  ],

```

## 四、加入主题

现在博客的基本功能已经实现，如果还想要更多类似于加载、切换等效果或者功能的话，我们可以直接使用主题，这里我使用的主题是 [vuepress-theme-reco](https://link.juejin.cn/?target=https%3A%2F%2Fvuepress-theme-reco.recoluan.com%2F)，一款简洁而大气的主题。

### 1.vuepress-theme-reco

现在我们安装 `vuepress-theme-reco`：

- **快速上手**：通过 `npm install vuepress-theme-reco` 安装后，在 `.vuepress/config.js` 中设置 **`theme: 'reco'`**，并配置 `themeConfig` 实现基础功能

```bash
npm install vuepress-theme-reco --save-dev
```

然后需要在 **config.js** 中引用该主题：

```js
module.exports = {
  title: 'XXX的博客',
  description: 'YYY',
  theme: 'reco',
  nav: [...],
  themeConfig: [...],
}  
```

### 2.其他主题

除了 `vuepress-theme-reco` 这个主题，还有很多其他主题，比如 [vuepress-theme-hope](https://link.juejin.cn/?target=https%3A%2F%2Fvuepress-theme-hope.github.io%2Fv2%2Fzh%2F) 也会是个不错的主题选择，这里我就不介绍它了，感兴趣的朋友可以去官网上查找它的相关资料。

### 3.美化版博客

目前VuePress的热门主题有如下几个：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d6b111a50c6b489886eb953df0de6ad9.png).

可以选择一个自己喜欢的风格：<https://ecosystem.vuejs.press/zh/>
我这里使用的是 <vuepress-theme-reco@2.x> 主题风格，

在使用该主题时，需要注意不可参照方默认主题文档来配置，必须按照该文档进行配置。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/ae5ac5ba79144e8c83272e17e918addf.png)使用 vuepress-reco模板快速开始:

```bash
npx @vuepress-reco/theme-cli init
```

根据提示进行选择，哪一个模板其实都可以，不过主页会有些区别。可以直接选择2.x，风格会好看些。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/00ef58cf576842e6bfb1daf41a182f05.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/90c06a873c2c4264b5fedda25e60e93e.png)

————————————————

运行：npm run dev

再在上面进行魔改一顿：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/4ffef22e588349a189bb02950028a836.png)

![ ](https://i-blog.csdnimg.cn/direct/109157a98f2f4fc8885f9f3ea3cae1a1.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/d489f7b0a078410b9b4bb33bcaeb6e7f.png)

我们可以通过添加相关文件来修改博客的默认样式。

## 五、主题色样式

### 1.主题颜色修改

`VuePress` 默认主题颜色是绿色，我们可以将主题颜色修改为自己喜欢的颜色。在 **.vuepress** 目录下创建 **styles** 文件夹，**styles** 文件夹里创建一个 **palette.styl** 文件，文件代码如下：

```js
$accentColor = #3178c6  // 蓝色主题色
```

这就可以将主题颜色改为蓝色了。

### 2.其他样式修改

如果我们切换到暗黑模式下，可能会发现文字看不清楚，所以我们需要修改文字的颜色和背景色。

在之前创建好的 **styles** 文件夹下再新建一个 **index.styl** 文件，文件代码如下：

```js
.dark .content__default code {
  background-color: rgba(58,58,92,0.7);
  color: #fff;
}
```

这样就可以解决上面那个问题了。

最终一个基础版的简单博客界面就搭建好了。

如果后面还需要增加新内容，可以按照上面同样的方式在 **blogs** 目录下新增 **md** 文档即可。

## 六、VuePress 资源

如果你觉得样式过于单调，功能少，可以看一看 VuePress 的开源项目：

[Awesome Vuepress](https://link.zhihu.com/?target=https%3A//github.com/vuepress/awesome-vuepress)

[github.com/vuepress/awesome-vuepress](https://link.zhihu.com/?target=https%3A//github.com/vuepress/awesome-vuepress)

其中包含了 VuePress 的各种资源、插件、主题等等。

## 七、vuepress项目部署到github pages上

### 准备工作

如果你已经把内容编辑好，就可以准备部署了，有三种方法供你参考：

1. 你可以选择购买服务器，购买域名来部署这个静态网站，
2. 购买了服务器和域名，把博客部署在 Gitee/GitHub/Coding 上，用云服务做跳转
3. 既不买域名也不买服务器，直接把网站部署在 Gitee/GitHub/Coding 的 Pages 中，会生成一个独属于你的域名。

这里我们讲第三种，白嫖方案。

部署之前你需要先生成静态文件，确保项目没有问题。在命令行中输入：

```text
vuepress build docs
```

由于构建的时候生成静态页面，所以将dist文件夹中的内容可以部署在gitHub的pages或者coding的pages都可以。

1.vuepress项目中添加文件

推荐项目名称和远程仓库名称一致

项目中`package.json`文件中查看"script"节点，配置运行和打包的命令

```js
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
},
```

下面要用到打包命令`docs:build`

2.修改config.js中的base

```js
module.exports = {
    ...
    base: '/你的项目名称/', // 或者'./'
    ...
}
```

```js
在.vuepress目录下有个config.js文件，添加配置base节点，如果不配置会导致部署后出现错误

module.exports = {
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/xxxxxxx/blog-demo',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: '第一篇博客', link: '/blog/haha1.md' }
        ]
    }
}
```

3.项目根目录下新建deploy.sh脚本

如果使用git上传到github上，操作比较繁琐，这里使用脚本的方式自动部署到github上。

在vuepress项目的根目录doc下添加deploy.sh文件，该文件是用于执行发布的脚本文件。  请自行修改github仓库地址

```yml
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 这里是填写你的github仓库地址，把git@github.com:xxx/xxx.git替换成你的仓库地址
git push -f git@github.com:xxx/xxx.git master:gh-pages

cd -
```

保存，运行，就可以了

### 新建github仓库

在github上创建一个名为 study_blogs 的仓库

在新建好仓库后，把这个新仓库的地址添加到上述的`deploy.sh`文件中。

### 部署

在项目根目录下打开终端(git bash、cmd等都可以)，执行`sh deploy.sh`命令

```bash
sh deploy.sh
```

因为这里deploy.sh文件是在根目录下，所以可以直接写文件名称。如果是在项目根目录下添加了目录，则需要加上目录(路径形式)，比如：

```text
项目根目录
|--scripts目录
|--deploy.sh
比如在项目根目录下新建了scripts目录下添加的deploy.sh文件（添加目录一般都叫scripts）
此时命令就要写成:

sh scripts/deploy.sh
```

执行命令后，没有报红报错即可。

在Windows PowerShell中不能运行命令，打开gitbash执行部署脚本，同样./deploy.sh命令等同于sh deploy.sh

```sh
./deploy.sh
```

### 体验

打开github，打开刚才的仓库，找到`Settings`选项

然后在侧边找到`Pages`选项，进行一个简单的配置

 在setting中找到github pages 在source下选择master branch就可以了，如果是分支，选择分支就行，显示的网址就是部署在github上，自己博客的静态网址.

如果配置后没有显示网址，可以尝试刷新。

后续项目要更新新内容的话，只需要再次在终端里执行deploy.sh文件就可以了
