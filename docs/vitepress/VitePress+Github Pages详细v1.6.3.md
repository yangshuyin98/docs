---
title: VitePress + Github Pages
date: 2024-02-10
tags:
 - VitePress
 - Github Pages
categories:
 - 健康生活健康生活
sticky: 3
---

# VitePress + Github Pages详细如何搭建个人博客

难度：★★★☆☆

## 

**前言：**

这里将介绍作为一个国内开发者，采取的最推荐的vitepress（vue3推荐方式）的方式进行搭建，这也是当下最流行的方式哦！

## 1、认识和介绍vitepress

VitePress 由 Vite 和 Vue 驱动的静态站点生成器 简单、强大、快速。就是你想要的现代 SSG 框架！

我们只需要写markdown文档就可以生成好看的博客文章，或者说，你直接写就成为了你的博客文章！

目前官网给我们推荐的方式有以下这几种：

这里我就直接采取了yarn的方式进行构建，下面是我的版本号：

```
node v22.14.0

经测试（Node 18.20.4 运行我们项目也完全没问题）

```

## 2、vitepress搭建和运行

`环境 Node 18 或者Node 20 推荐 `接下来就开始搭建咋们的个人博客

这里我们使用pnpm式，当然yarn，npm都是可以的,如果你没有安装pnpm可以全局安装

**先执行 `npm i pnpm -g` 安装一下**

开始构建我们的博客

### 👉 新建一个blogs文件夹

```
mkdir  blogs
```

进入目录名blogs

```
cd  blogs
```

cmd打开blogs文件夹

```
pnpm init
yarn init  // 初始化
```

安装需要的依赖,使用`pnpm`将`vitepress`安装为本地依赖。

```
pnpm add -D vitepress
yarn add -D vitepress //添加vitepress
```

- **pnpm add**：用于添加新的依赖包，并将其记录在 *package.json* 文件中。
- **pnpm install**：用于安装项目中所有的依赖包，不会修改 *package.json* 文件。
- *-D* 或 *--save-dev*：将包添加到 *devDependencies* 中。
- *-g* 或 *--global*：全局安装包。
- *-O* 或 *--save-optional*：将包添加到 *optionalDependencies* 中
- *--dev* 或 *-D*：仅安装 *devDependencies* 中的包。
- *--force*：强制重新安装所有依赖。

初始化Vitepress

```
pnpm vitepress init
yarn vitepress init // 用vitepress初始化项目 ，直接一直按
```

```
T  Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs
|
o  Site title:
|  My Awesome Project
|
o  Site description:
|  A VitePress Site
|
o  Theme:
|  Default Theme + Customization
|
o  Use TypeScript for config and theme files?
|  No
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run pnpm run docs:dev and start writing.

Tips:
- Since you've chosen to customize the theme, you should also explicitly install vue as a dev dependency.
```

初始化成功后，使用vscode或webstorm打开文件夹，会看到这样一个目录。

```
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md 入口文件
└─ package.json
```

接下来简单介绍一下每个文件的含义

```
.vitepress，最核心的目录，
theme目录。自定义主题配置，css样式等
config.mjs。最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
node_modules。安装的依赖
api-examples.md和markdown-examples.md。官方给的两个示例
index.md。主页相关
package.json和pnpm-lock.yml。包管理工具需要用的
```

### 👉 启动项目

```
pnpm run docs:dev
yarn docs:dev //运行
```

```bash
// 打包
npm run docs:build
```

```bash
// 预览
npm run docs:preview
```

打开，看到这个，说明初始化成功

```
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

这个时候直接浏览器访问就可以了！

ok，一个基础的博客已近搭建完了，试了试，前后不过三分钟

## 3、vitepress博客配置

看看我们的文档结构：

### 👉配置路由

配置好了以后，接下来就开始设置砸门自己的博客了

docs/.vitepress/config.mts 配置路由等基本信息



### 👉设置浏览器标题和博客标题

我的是选择的ts版本的，位于.vitepress=> config.mts 文件里面：

### 👉设置网站logo

在根目录下面新建一个public=> logo.svg config.mts之中修改`themeConfig`

```
themeConfig: {                     // 配置logo位置，public目录
    title: "modern的Vitepress文档",
    description: "一个vitepress站点",
    logo: '/logo.svg',  
}
```

vitepress原生支持国外的sociallink，如果是国内需要自行复制svg代码

### 👉设置网站标题siteTitle

- 网站标题可以单独设置

```
 themeConfig: {
 	siteTitle: "modern的Vitepress文档",
    description: "一个vitepress站点",    
    logo: '/my-logo.svg',
    siteTitle:'壮壮牛牛♥',
 }

```

- 隐藏站点标题 `siteTitle`设置为false即可

```
// .vitepress/config.js
export default {
    themeConfig: {
    title: "modern的Vitepress文档",
    description: "一个vitepress站点",    
    logo: '/my-logo.svg',
    siteTitle: false
  }
}
```

### 👉设置导航栏

在`themeConfig.nav` 更改导航栏。

其中 `text` 是 nav 中显示文本，而 `link` 是单击文本时的链接。对于链接，将路径设置为不带 `.md` 后缀的实际文件，并且始终以 `/` 开头。

导航链接可以是下拉菜单。只需要替换 `link` 选项，设置 `items` 数组。

```
//config.mts
export default {
  themeConfig: {
     /nav开始
    nav: [
      { text: 'Home', link: '/' },      
      {
        text: 'VitePress',
        items: [
          { text: 'VitePress', link: '/document/vitepress/zh/guide/what-is-vitepress' },
          { text: '参考', link: '/document/vitepress/zh/reference/site-config' },
          { text: 'Examples', link: '/document/vitepress/markdown-examples' },
          { text: 'api-examples', link: '/document/vitepress/api-examples' },]
      },
      {
        text: '前端',
        items: [
          { text: 'vue', link: '/item-1' },
          { text: 'JavaScript', link: '/item-2' },
          { text: 'vue', link: '/item-3' },
          { text: 'else', link: '/item-3' },]
      },
      {
        text: '后端',
        items: [
          { text: 'java', link: '/item-1' },
          { text: 'python', link: '/item-2' },
          { text: 'else', link: '/item-3' },]
      }
    ],
    //nav结束
  }
}

```

### 👉美化文章页 

默认进来官方给的示例是三边栏的

左边是sidebar的配置，右边是显示的文章目录（默认显示一二级）。



### 👉设置右侧链接

右侧导航栏默认索引的是md文件的一二级标题，可能需要定义索引的标题级别和`On this page`这个说明。这个时候需要在config.mjs中配置下面这两个选项，`outlineTitle`用于替代On this page。`outline`定义展示的标题级别，这里定义2-6级

```
 themeConfig: {
  outlineTitle: '文章目录',
  outline: [2,6],
  }
```

`vitepress/config.ts`文件，在`themeConfig`中配置`outline`。

```
themeConfig: {
   
    outline: {
   
      level: [2, 6],
      label: '目录'
    }
  }
```



### **👉自动生成侧边栏**

我们使用这种配置时常常是一个目录有很多md文件，这些md文件所在的目录对应导航栏的一个选项。侧边栏的配置需要自己手写一个个路由映射到相应的文件上，那么有没有一个自动生成侧边栏的工具呢？根据一个目录下面的所有md文件自动生成路由，可以使用下面这个脚本

```
import path from "node:path";
import fs from "node:fs";

// 文件根目录
const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = [
  "index.md",
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
];

// 判断是否是文件夹
const isDirectory = (path) => fs.lstatSync(path).isDirectory();

// 取差值
const intersections = (arr1, arr2) =>
  Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));

// 把方法导出直接使用
function getList(params, path1, pathname) {
  // 存放结果
  const res = [];
  // 开始遍历params
  for (let file in params) {
    // 拼接目录
    const dir = path.join(path1, params[file]);
    // 判断是否是文件夹
    const isDir = isDirectory(dir);
    if (isDir) {
      // 如果是文件夹,读取之后作为下一次递归参数
      const files = fs.readdirSync(dir);
      res.push({
        text: params[file],
        collapsible: true,
        items: getList(files, dir, `${pathname}/${params[file]}`),
      });
    } else {
      // 获取名字
      const name = path.basename(params[file]);
      // 排除非 md 文件
      const suffix = path.extname(params[file]);
      if (suffix !== ".md") {
        continue;
      }
      res.push({
        text: name,
        link: `${pathname}/${name}`,
      });
    }
  }
  // 对name做一下处理，把后缀删除
  res.map((item) => {
    item.text = item.text.replace(/\.md$/, "");
  });
  return res;
}

export const set_sidebar = (pathname) => {
  // 获取pathname的路径
  const dirPath = path.join(DIR_PATH, pathname);
  // 读取pathname下的所有文件或者文件夹
  const files = fs.readdirSync(dirPath);
  // 过滤掉
  const items = intersections(files, WHITE_LIST);
  // getList 函数后面会讲到
  return getList(items, dirPath, pathname);
};
```



### 👉设置socialLinks

使用themeConfig.socialLinks可以配置我们的社交链接，目前支持的有

```
type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }
```

设置themeConfig=> socialLinks

```
socialLinks: [
  { icon: 'github', link: 'https://github.com/NexusLin'}
  { icon: "twitter", link: "..." },
   // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
],
```





### 👉设置页脚

设置themeConfig=> footer

```
 footer: {
  message: "Released under the MIT License.",
  copyright: "Copyright ©2025 modern",
},
```

### 👉设置主页布局

页就是进入我们博客会加载docs/index.md,所以我们需要对其进行一个美化，我们VitePress默认主题提供了一个主页布局

.vitepress目录之外的 Markdown 文件被视为源文件。

VitePress 使用基于文件的路由：每个.md文件将在相同的路径被编译成为.html文件。例如，index.md将会被编译成index.html，可以在生成的 VitePress 站点的根路径/进行访问。

接下来我们根目录下面的`index.md`文件里面

##### 🍎首页的部分设置也非常简单，按照着设置一一对应就可以

分别是

name:标题的博客

text: 随便写点啥

tagline: 帅气又迷人的小月

image:这里有一个图形，具体不知道哪里来的，但是非常好

actions:下面的按钮，

features:以及再下面的描述部分



![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9322b86dd7c748f88edac126f2c8540a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=3tsRlEGSbKhrZJtO4xFbrPiACP0%3D)



##### 🍎 也可以添加链接和图片

```
features:
  - icon: 📝
    title: 专注内容
    details: 只需 Markdown 即可轻松创建美观的文档站点。
link: /api-examples
```



##### 🍎 自己在主页再添加markdown文本

```
# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.
```



### 👉配置一个新页面Gapi.md

根目录docs下新建一个TGapi.md文档，然后再index.md之中配置一下

```
在主页index.md=> hero=> actions
  actions:
    - theme: alt
      text: API Examples
      link: /TGapi
```

### 👉左侧侧边栏配置

sidebar可以是数组，也可以是对象。还是修改config.mjs

在config.mts之中themeConfig=> sidebar 配置左侧的侧边栏部分

```
 sidebar: [
      {
        text: 'TGapi文档',
        items: [
          { text: 'TGapi登陆注册', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
       {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]

```

也就是点击进去的这部分

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/bfb9312876964bb8923fda87d760fcff~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=IUY5HudXBE7I9iFd2JaQRZZ64Ng%3D)

不过我们一般不会使用这种方式配置侧边栏，因为这样每个页面都会有侧边栏。我们需要做到仅某些页面才会出现侧边栏。所以我们可以这样配置

```
sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
```

sideBar值改成一个对象，对象的key是一个路径，只有包含这个路径的才会出现侧边栏。所以我们将nav的配置中的guild改成博客，同时路径指向我们的articles下的markdown文件

```
nav: [
      { text: "博客", link: "/articles/组件库环境搭建" },
     ]
```

此时你会发现进入首页并不会出现sideBar，只有点击博客才会出现侧边栏

### 👉左侧侧边栏折叠

配置可折叠侧边栏只需将`collapsible`设置为`true`即可,默认初始页面是全部展开页面，如果你需要关闭状态只需要将`collapsed`设置为`true`

在config.mts之中themeConfig=> sidebar 配置左侧的侧边栏部分=> 设置collapsed:true, 就可以成功折叠展开

```
 {
        collapsed: false,
        text: 'TGapi文档',
        items: [
          { text: 'TGapi登陆注册', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },

```



### 👉右侧侧边栏其实就是我们文章的标题

On this page 右侧一直显示一个是官方默认给我们的，其他都是我们自己的

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1f50c8c426fb49f2ba85202151c59be3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=GAr1CvNcSTBx3g4KVeerurLdEak%3D)

## 4、新建页面和自定义页面

#### 👉新建一个页面Hello.vue,在根目录docs下面存一个Hello.vue文件

然后在主页之中直接引入连接

```
<script setup>
import Hello from './Hello.vue'
</script>

# Docs

This is a .md using a custom component

<Hello />

```

Hello.md内容如下：

```
<template>
	<div class="pagehello">我是vue页面</div>
</template>

<style>
	.pagehello{
		width: 400x;
		height: 400px;
		background: cadetblue;
		color: #fff;
	}
</style>

```

看到这个操作vue文件。岂不是意味着我们可以随便定义我们的网站吗

## 5、自定义主题

#### 1、修改主题色

上面描述了内容主体的整体布局，接下来谈谈整体配色。也就是，整体的绿色如何更换成其他颜色呢？

首先，我们需要确定想要更换的颜色色调，需要稍微统一一下。这里推荐个网站：https://coolors.co/palettes。

可以先在上面这个网站找一套自己喜欢的颜色，比如紫色：

之后呢，要做的就是，把`vitepress`项目中对应的全局变量的颜色给替换掉。**具体操作如下：**

```
// 在.vitepress/theme/index.ts文件
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
   
  ...DefaultTheme
};
// 在.vitepress/theme/custom.css文件
/* color vars: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css */
/* purple brand color: https://coolors.co/palette/dec9e9-dac3e8-d2b7e5-c19ee0-b185db-a06cd5-9163cb-815ac0-7251b5-6247aa */

/* Color Base */
:root {
   
  --vp-c-purple: #b185db;
  --vp-c-purple-light: #c19ee0;
  --vp-c-purple-lighter: #d2b7e5;
  --vp-c-purple-dark: #a06cd5;
  --vp-c-purple-darker: #9163cb;

  /* 设置字体颜色 */
  /* --vp-home-hero-name-color: transparent; */
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff); */

  /* 设置右图像渐变 */
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #8e99ee 50%, #ffffff 50% );
  --vp-home-hero-image-filter: blur(150px);

}

/* Color Theme */
:root {
   
  --vp-c-brand: var(--vp-c-purple);
  --vp-c-brand-light: var(--vp-c-purple-light);
  --vp-c-brand-lighter: var(--vp-c-purple-lighter);
  --vp-c-brand-dark: var(--vp-c-purple-dark);
  --vp-c-brand-darker: var(--vp-c-purple-darker);
}

```

这样，我们就完成整体主题色的替换：

大家可以看到，整体变成了以**紫色调**为主，右图像的渐变也有了。如果还想要修改其他跟主题色相关的颜色，可以看下官方`github`上的变量说明，进行相应的修改。

这里附上官方网站的详细说明：https://vitepress.dev/guide/extending-default-theme#customizing-css ；

以及`github`的变量地址：https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css

#### 2、更换主题

当我搭建到这一步的时候，就开始想着`vitepress`有没有像`vuepress-theme-reco`类似的主题。很遗憾的是，暂时还没看到。

不过在掘金社区里搜到一些博主自己搭建了一些主题，这里不做详细介绍，感兴趣的同学可以前往查看。戳链接：

- @sugarat/theme - https://theme.sugarat.top/
- [一个简约风的VitePress博客主题](https://juejin.cn/post/7196517835380293693#heading-1)









vitepress也支持我们自定义自己的主题，接下来我们就自定义一下自己的主题然后看看

在.vitepress=> theme =>  index.ts

在这个里面不仅可以放我们的样式，同时也可以引入我们的组件，vitepress也推荐这种方式

```
import DefaultTheme from 'vitepress/theme'
// import Foo from '../../views/Echarts.vue'
import './tg.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('foo', Foo)
  }
}
```

`theme/tg.css` (天工开源的缩写)进行样式代码编写

```
/* 该文件配置网站的文字  图标 等等 一系列dom元素的样式文件 */
:root {
  /* 通过配置 自定义颜色 */
  --vp-home-hero-name-color: transparent;
  /* 主页标题文字的颜色  */
  --vp-home-hero-name-background: -webkit-linear-gradient(
  -45deg, 
  #47caff  50%, 
  #5468ff
  );
  
  /* 主页左侧背景添加渐变光圈 */
  --vp-home-hero-image-background-image: linear-gradient(
  135deg, 
  #5468ff 10%, 
  #47caff  50%
  );
  --vp-home-hero-image-filter: blur(100px);


  /* botton按钮 */
  /* --vp-button-brand-border: #81634b; */
  /* 按钮文本颜色 */
  --vp-button-brand-text: #ffffff;
  /* 按钮背景颜色 */
  --vp-button-brand-bg: #5468ff;

/*#00FFEE*/
  /* 鼠标悬停的效果之后的样式 */
  --vp-button-brand-hover-border: #bd34fe;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #bd34fe;

  --vp-button-brand-active-border: #bd34fe;

  /* 主题基色 */
  --vp-c-brand: #bd34fe;
  /* 白色模式 主题基色 */
  --vp-c-brand-light: #bd34fe;
  /* 黑色模式 主题基色 */
  --vp-c-brand-dark: #bd34fe;
}

```

然后看看我们自己自定义的颜色

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/f130218e1bb3423a9e2eda68945b893b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5p6X5aSq55m9:q75.awebp?rk3s=f64ab15b&x-expires=1742385314&x-signature=Z5cTci9a%2B4zRP%2BosQRR43W71RhI%3D)







## 6、开启搜索项

谈到搜索，`vitepress`支持两种搜索模式：**本地搜索**和**algolia**。对于`algolia`来说，相当于把网站的数据丢给`algolia`，然后当你在网站上进行搜索时，会向`algolia`发送一个请求，然后呢，`algolia`在你上传的数据中进行搜索，之后把结果返回给你，就可以在网站上进行展示。这种方式相对比较繁琐些，这里不详细介绍，有需要可以查看这篇文章：[vitepress 如何开启 algolia 全文搜索](https://fyzhu.github.io/2022/11/01/vitepress-如何添加-algolia-搜索/)。

另一种方式是：**本地搜索**。本地搜索只需要这样处理即可：

设置themeConfig=> socialLinks

```
search: {
      provider: "local",
 },
```

```
// .vitepress/config.ts

import {
    defineConfig } from 'vitepress'

export default defineConfig({
   
  themeConfig: {
   
    search: {
   
      provider: 'local'
    }
  }
})

```





## 7、 国际化i18n

对于个人博客来说，一般只用到中文。不过有的小伙伴可能会想要兼容下中英文，那么可以使用**国际化i18n**来解决。`vitepress`提供了这个解决方案：



```
// .vitepress/config.ts
themeConfig: {
   
    i18nRouting: true
}

```

具体路由配置见这里：https://vitepress.dev/reference/default-theme-config#i18nrouting
