---
title: vitepress从0到1
date: 2024-02-10
tags:
 - 博客
 - vitepress
categories:
 - vitepress
sticky: 3
---

# vitepress从0到1，让每个前后端小伙伴都拥有一个属于自己的博客

难度：★★★☆☆

vitepress从0到1，让每个前后端小伙伴都拥有一个属于自己的博客
📸前言
之前周一的个人博客是用vuepress来搭建，但随着文章的数量越来越多，导致每回在启动的时候构建都特别慢，于是周一有了改构建工具的想法。这不，vitepress工具自发布后，在技术圈内一直有些火热，于是周一就想着把博客的整体升级为vitepress。在搜罗了官方文档等各大网站的资料后，总结出了以下这篇教程。希望能帮助到正想要搭建博客的小伙伴们~

在下面的文章中，将带你从0到1用vitepress搭建一个个人博客，从初始化到项目部署。一起来看看~🕵️

一、📡项目启航
学完这篇文章，你将会收获以下内容：

1.1 将会收获
自定义首页样式
拥有一个可自定义的侧导
高度自定义化一个专属个人的博客
1.2 快速搭建
首先创建并进入一个新目录：

```
mkdir vitepress-demo-mondaylab && cd vitepress-demo-mondaylab

```

接着，使用你喜欢的包管理器进行初始化。这里我用`pnpm`，如下代码所示：

```
# 如果没有安装过pnpm，可以全局安装下
sudo npm install -g pnpm

# 用pnpm初始化
pnpm init
```

项目初始化完成以后，使用`pnpm`将`vitepress`安装为本地依赖。如下代码所示：

```
# 安装命令
pnpm add vitepress -D
```

在vitepress官方文档中提到，vitepress附带了一个命令行向导，来帮助我们构建一个基本的项目。通过以下命令来执行该操作：

```
pnpm exec vitepress init
```

```
T  Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs                                              //docs自动生成
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



此时文件的目录结构是这样的，如下树状代码所示：

```
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md 入口文件
└─ package.json

```

到这里，我们就基本完成了`vitepress`项目的初始化。最后，我们运行 `pnpm run docs:dev` 来打开项目。效果如下:

二、📹美化个人博客
基础框架我们已经搭建完成，但看着博客的整体内容还比较少。接下来我们需要对博客进行进一步美化。

2.1 整体布局
首先，我们需要了解下博客的整体布局，才能更好的做美化。

1、首页
对于vitepress来说，刚进去的那一刻，映入眼帘的就是首页，也就是docs/index.md这个文件。首页主要由以下五个部分组成：
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bca4ae295b2164fe4fa386bf5b8b47eb.png#pic_center)

对于首页来说，我们一般会比较少去放侧边栏，更多地是放一些个人博客的概述。下面我们先来继续了解下普通文章页面的布局，配置修改放后面。

##### 2、普通文章

对于普通文章页面来说，我们一般会在左侧放专栏的文章，中间放当前文章的内容，右边放文章的**锚点导航**。具体如下：

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/78d2982d157ba595699703370edaf25c.png#pic_center)

2.2 内容完善
上面，我们了解了整体布局。接下来，依据这个布局，我们来说一步步的修改。

1、导航条美化navbar
在上面的两张图当中，会发现到，它们共同的部分都是序号①，也就是navbar。因此，我们先来对这部分进行美化。

（1）左上角-logo和名称自定义
图标，可以去https://www.iconfont.cn/ 里头扒拉一个。

修改docs/.vitepress/config.ts文件下的配置，具体代码为：
————————————————

    export default defineConfig({
      title: "JacksonWangBlog",
      description: "A VitePress Site",
      themeConfig: {
        logo: '/avatar.png', // 表示docs/public/avartar.png
        }
    })
    

###### **（2）右上角-导航内容自定义**

接下来美化右上角部分，首先先确定nav在`docs/.vitepress/config.ts`文件的位置，具体如下👇🏻：

```
import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [

  {
    text: '首页',
    link: '/'
  },

//===================TestDemo======================
  {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/column/Algorithm/'
      }
    ]
  },

  //===================CPlusPlus======================
  {
    text: 'C++',
    items: [
      {
        text: 'C++并发编程实战',
        link: '/column/CPlusPlus/C++并发编程实战'
      },
      {
        text: 'C++Linux编程',
        link: '/column/CPlusPlus/C++Linux编程'
      },
      {
        text: 'C++基础不牢地动山摇',
        link: '/column/CPlusPlus/C++基础不牢地动山摇'
      },
      {
        text:'OpenCV学习笔记',
        link:'column/CPlusPlus/OpenCV学习笔记'
      },
      {
        text:'UNIX环境高级编程',
        link:'column/CPlusPlus/UNIX环境高级编程'
      },
      {
        text:'VC++深入详解',
        link:'column/CPlusPlus/VC++深入详解'
      },
      {
        text:'Win32开发笔记',
        link:'column/CPlusPlus/Win32开发笔记'
      },
      {
        text:'Window内核编程',
        link:'column/CPlusPlus/Window内核编程'
      },
      {
        text:'第三方库整合笔记',
        link:'column/CPlusPlus/第三方库整合笔记'
      },
      {
        text:'嵌入式开发笔记',
        link:'column/CPlusPlus/嵌入式开发笔记'
      },
      {
        text:'深入浅出OpenGL',
        link:'column/CPlusPlus/深入浅出OpenGL'
      },
      {
        text:'深入浅出QT程序设计',
        link:'column/CPlusPlus/深入浅出QT程序设计'
      },
      {
        text:'深入浅出WINDOWS程序设计',
        link:'column/CPlusPlus/深入浅出WINDOWS程序设计'
      },
      {
        text:'深入浅出WINDOW驱动程序开发',
        link:'column/CPlusPlus/深入浅出WINDOW驱动程序开发'
      }
    ]


  },
  //===================CPlusPlus======================

  //===================CSharp=========================
  {
    text: 'CSharp',
    items: [
      {
        text: 'CSharp程序设计基础入门教程',
        link: 'column/CSharp/CSharp程序设计基础入门教程'
      },
      {
        text: 'CSharp基础不牢地动山摇',
        link: 'column/CSharp/CSharp基础不牢地动山摇'
      },
    ]
  },
   //===================CSharp=========================

   //===================JavaScript======================
    {
      text: 'JavaScript',
      items: [
        {
          text: '吃螃蟹咯HarmonyOs真香',
          link: 'column/CPlusPlus/吃螃蟹咯HarmonyOs真香'
        },
        {
          text: '开源项目学习',
          link: 'column/CPlusPlus/开源项目学习'
        },
        {
          text: '小兔鲜电商项目实战',
          link: 'column/CPlusPlus/小兔鲜电商项目实战'
        },
      ]
    },
   //===================JavaScript======================


   //===================Java======================
   {
    text: 'Java',
    items: [
      {
        text: 'Java基础不牢地动山摇！',
        link: 'column/Java/Java基础不牢地动山摇！'
      },
      {
        text: 'Java开源项目学习',
        link: 'column/Java/Java开源项目学习'
      },
      {
        text: 'SpringBoot整合第三方库',
        link: 'column/Java/SpringBoot整合第三方库'
      },
    ]
   },
   //===================Java======================
   

  //===================Python======================
  {
    text: 'Python',
    items: [
      {
        text: 'Python玩OpenCV也是有一手的！',
        link: 'column/Python/Python玩OpenCV也是有一手的！'
      },
      {
        text: '你对象不会也在学测试吧',
        link: 'column/Python/你对象不会也在学测试吧'
      },
    ]
  },
  //===================Python======================
  {
    text: '设计模式',
    link: 'column/设计模式'
  
  },
  {
    text: '算法',
    link: 'column/算法'
  },


  //===================Link======================
   {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/zheng-zi-ji-67-89/posts'
      }
    ]
   }
  //===================Link======================
];


```



##### 2、首页美化home

###### （1）layout选择

首页部分的配置在`docs/index.md`文件，具体来看下面这些配置项.我们可以配置背景图和显示文字哦

```
---
# 提供三种布局，doc、page和home https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# https://vitepress.dev/reference/default-theme-home-page
title: 嘿，小爱同学
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: 好记性不如烂笔头
    text: Stay foolish, Stay hungry.
    tagline: /斜杠青年/人间清醒/工具控/
    image:
        src: /background.png
        alt: 背景图
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
features:
  - icon: 🤹‍♀️
    title: Web后端
    details: 某厂程序猿，国内某互联网厂搬砖。
    link: /column/views/guide
  - icon: 👩‍🎨‍
    title: 喜欢美学
    details: 热爱一切美学，喜欢用各种设计工具造图。
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---


<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<home />

```

到这里，我们就完成了`navbar` 和首页`home`的美化。具体来看下效果：

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6ed86559e1017f86b01a0e4af94670e9.png#pic_center)

到此，一个像模像样的首页就有了。但有些同学会觉得，自定义力度还不够，比如说想在页面的下方再加点图片或者图标之类的，那下面我们就来说说，在vitepress中如何自定义组件。

（2）自定义组件
首先，我们在docs/.vitepress/components文件夹下定义一个文件，名为home.vue。然后在里面写些想要展示的内容所对应的代码，比如：
————————————————

    <template>
      <div class="home-wrapper">
        <div v-for="item in list" :key="item" class="home-item">{{ item }}</div>
      </div>
    </template>
    
    <script lang="ts" setup>
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    </script>
    
    <style scoped>
    .home-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    .home-item {
      vertical-align: middle;
      margin: 4px 4px 10px;
      padding: 4px 8px;
      font-weight: bolder;
      display: inline-block;
      cursor: pointer;
      border-radius: 2px;
      line-height: 13px;
      font-size: 13px;
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
      transition: all 0.5s;
    }
    </style>
    
    

接着，在`docs/index.md`中引入，具体如下：

```
---
#
#
#
---

<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<home />

```

下面来看实现后的效果：

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b2acc504d7fe295340726ee6c4e869e1.png#pic_center)

这样，我们就实现了相应的自定义内容。按照这个思路，我们也可以在组件里面写各种自己想要添加的东西，达到页面自定义的效果。

到这里，navbar和主页都完成了，下面就要去写文章了。那这里有的小伙伴就会开始疑问：

①文章的目录怎么存放？

②不同的专栏怎么独立分类？

③侧边栏怎么展示？

④h1~h6的标题怎么对齐锚点？

不着急，下面我们一个个来逐一突破。

3、侧边栏美化Sidebar
看2.1中的第2点我们可以知道，文章页面包括序号②③④三个部分。那我们先来看看，怎么定义侧边栏。

（1）定义入口
假设说我们现在有一个专栏，叫数据结构与算法。那么我们会先去navbar定义入口。入口代码在docs/relaConf/navbar.ts，定义内容如下：
————————————————

    export const nav: DefaultTheme.NavItem[] = [
        {
        text: '前端开发',
        items: [
          {
            text: '数据结构与算法',
            link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
          }
        ]
      }
    ]
    

定义完成之后，来看下现在的效果：

此时大家会发现，左边的侧边栏莫名奇妙的。其实这是因为，在我们刚开始初始化项目的时候，脚手架给我们预置的侧边栏内容，对应 `docs/.vitepress/config.ts`中的`themeConfig.sidebar`。下面，我们来改造这个位置的内容。

（2）侧边栏规范化
我们当前只是定义了“数据结构与算法”专栏的入口文件，那在这个页面中的侧边栏，我们要展示的是「数据结构与算法」这个专栏所要填充的文章。比如：栈、队列、字典和集合等等。

那接下来，我们先去专栏下面建立相关文章的md文件。在docs/column/Algorithm文件下定义以下几个文件：
————————————————

    |——— docs
      |——— column
        |——— Algorithm
          |——— 001_stack.md // 里面可以先随意填充些可辨识的内容
          |——— 002_queue.md
          |——— 003_dictionary.md
          |——— 004_truee.md
          |——— index.md
    

想要生成侧边栏的内容有了，下面我们去给侧边栏做相应的配置。同样，考虑到以后会生成很多侧边栏，我们同样把`sidebar`单独抽离成文件。**具体代码如下：**

```
// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件
export * from './sidebar';

// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Algorithm/': [
     // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/Algorithm/001_Stack'
        },
        {
          text: '队列-事件循环',
          link: '/column/Algorithm/002_Queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ]
};


// 在config.ts中引用
import { defineConfig } from 'vitepress';
import { nav } from './relaConf';

export default defineConfig({
    themeConfig: {
        sidebar: sidebar, // 把定义的sidebar给替换进来
    }
})


```

最终，我们来看下实现的效果。**具体如下图所示：**



##### 4、正文排版Markdown

侧边导航栏介绍完毕，下面我们来了解下正文的排版。有一小部分小伙伴可能不知道markdown语法，所以在对文章排版的时候，会自上而下地用黑体字来处理。

这里，我们来讲讲平常经常会排版的方式，就是markdown语法。vitepress官网也对markdown做了很好的支持，具体可以戳此链接。

（1）md基础语法
————————————————

    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题
    
    『- 空格』 无需列表
    『1. 空格』有序列表
    
    *** 分割线
    --- 分割线
    
    $$文字$$  方程式latex
    
    『**文字**』 加粗字体
    『*文字*』 斜体
    
    『```代码语言 空格』  代码块
    
    『> 空格』 引用
    
    

原文链接：https://blog.csdn.net/WNX10086/article/details/137160521

###### （2）vitepress对md的支持

上面我们介绍了最简单的`markdown`语法，还有另一个要提到的问题是，vitepress官方对markdown的扩展支持。

**包括但不限于emoji：**

**或者高亮信息：**

还有其他很多种类型的扩展支持，这里不再赘述。

###### （3）最后更新时间

到这里，我们已经了解了`md`的大部分内容。配置到一半的时候，细心的小伙伴可能已经发现，在正文的最后，有个**最后更新时间LastUpdated**的样式。这其实是因为我们在`docs/index.md`文件里配置了这个文件，所以展示了这个样式。**代码如下**

```
---
lastUpdated: true
---

```

5、锚点导航Anchor
现在，我们来到锚点导航。锚点导航对应的是，2.1 第 2 点中的④区域。也就是说，点击其对应的导航，就能够跳转到文章对应地页面位置上。类似于掘金右边导航的这种效果~

回到正题，怎么配置呢？回答.vitepress/config.ts文件，在themeConfig中配置outline。具体如下代码所示：
————————————————

    themeConfig: {
        outline: {
          level: [2, 6],
          label: '目录'
        }
      }
    

**具体展示效果如下：**

值得注意的是📢，目前锚点导航只能配置**h2-h6级**的标题，**h1标题**暂时不能配置。看了下`github`，发现有小伙伴提了`issue`，但似乎目前还没解决。静等官方解决……

##### 6、页脚配置

忘记了还有个页脚：

这个是直接配置footer，在`config.mjs defineConfig themeConfig`下面配置就可以了

```
 export default defineConfig({ 
  themeConfig: {
  footer:{
      copyright:'Copyright@ 2023 Jackson Wang'
    }
    }
    });

```



##### 7、美化地址栏icon

在`config.mjs defineConfig`下面直接配置即可

```
export default defineConfig({ 
head: [["link", { rel: "icon", href: "/avatar.png" }]],
    });
```

2.3 配色相关
1、修改主题色
上面描述了内容主体的整体布局，接下来谈谈整体配色。也就是，整体的绿色如何更换成其他颜色呢？

首先，我们需要确定想要更换的颜色色调，需要稍微统一一下。这里推荐个网站：https://coolors.co/palettes。

可以先在上面这个网站找一套自己喜欢的颜色，比如紫色：
之后呢，要做的就是，把`vitepress`项目中对应的全局变量的颜色给替换掉。**具体操作如下：**

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
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */);
  }
};

```

这样，我们就完成整体主题色的替换：

大家可以看到，整体变成了以紫色调为主，右图像的渐变也有了。如果还想要修改其他跟主题色相关的颜色，可以看下官方github上的变量说明，进行相应的修改。

这里附上官方网站的详细说明：https://vitepress.dev/guide/extending-default-theme#customizing-css ；

以及github的变量地址：https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css

2、更换主题
当我搭建到这一步的时候，就开始想着vitepress有没有像vuepress-theme-reco类似的主题。很遗憾的是，暂时还没看到。

不过在掘金社区里搜到一些博主自己搭建了一些主题，这里不做详细介绍，感兴趣的同学可以前往查看。戳链接：

@sugarat/theme - https://theme.sugarat.top/
一个简约风的VitePress博客主题
三、🎥其他周边
3.1 搜索功能
谈到搜索，vitepress支持两种搜索模式：本地搜索和algolia。对于algolia来说，相当于把网站的数据丢给algolia，然后当你在网站上进行搜索时，会向algolia发送一个请求，然后呢，algolia在你上传的数据中进行搜索，之后把结果返回给你，就可以在网站上进行展示。这种方式相对比较繁琐些，这里不详细介绍，有需要可以查看这篇文章：vitepress 如何开启 algolia 全文搜索。

另一种方式是：本地搜索。本地搜索只需要这样处理即可：
————————————————

     // .vitepress/config.ts
    
    import { defineConfig } from 'vitepress'
    
    export default defineConfig({
      themeConfig: {
               // 设置搜索框的样式
           search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索文档",
                  buttonAriaLabel: "搜索文档",
                },
                modal: {
                  noResultsText: "无法找到相关结果",
                  resetButtonTitle: "清除查询条件",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
      }
    })
    

#### 3.2 国际化i18n

对于个人博客来说，一般只用到中文。不过有的小伙伴可能会想要兼容下中英文，那么可以使用**国际化i18n**来解决。`vitepress`提供了这个解决方案：

    // .vitepress/config.ts
    themeConfig: {
        i18nRouting: true
    }
    

四、📽Github Page部署
到这里，我们基本完成了一个博客的搭建。那搭建完成以后，就是发布上线啦~

这里采用的是Github Page来进行部署，值得注意的是，如果要用Github Page来部署，那么需要在git上的仓库需要是public状态哦~

部署步骤
Github Pages专门用来托管静态内容，由于不需要服务器且基于git，支持CI/CD，成为很多静态网站比如博客、文档网站的很好的选择。下面介绍流程

1、在github上创建仓库，如果没有Github账号，需要先注册一个。
需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon

      base: '/docs-demo/',
    

- 2、 在你没有git 托管的本地给工程中创建 gitignore文件，并添加如下内容。

```
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local

```

- 3、初始化git仓库

```
git init

```

- 4、添加本地所有文件到git仓库

```
git add .

```



- 5、创建第一次提交

```
git commit -m "first commit"

```



- 6、添加远程仓库地址到本地

```
git remote add origin https://github.com/wangnaixinggithub/docs-demo.git

```



- 7、推送项目到github

```
git push -u origin master

```

- 8、选择github actions

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/870e5c513268f6ffca299fbda497f1e3.png#pic_center)

9、设置工作流

![img](https://i-blog.csdnimg.cn/blog_migrate/2c0147b7caf12af2eda97c632917af99.png#pic_center)

- 10、重命名并设置deploy脚本

脚本文件：参考的vitepress官方文档：https://vitepress.dev/guide/deploy#github-pages

❗node版本和pnpm版本需要一致

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f44a3ab7833e6a7e63a9773894e1c9e5.png#pic_center)

❗需要注意项目的根目录（.vitepress所在的目录）

```
name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]

# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.15.5 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v3  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2  # 上传构建产物
        with:
          path: docs/.vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v2 # 将之前的构建产物部署到github pages中

```

这样配置之后，工作流就会跑了。构建成功，我们的文档网站就做好了。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2deca29d1fda0b2b8a305f9d4cf1a457.png#pic_center)
