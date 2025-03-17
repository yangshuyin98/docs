# 基于目录为VitePress生成侧边栏



封装了一个用于自动生成VitePress 侧边栏的npm包，vitepress-plugin-autobar

# Install

```
npm install -D vitepress-plugin-autobar
```

# VitePress

VitePress 是基于 [Vite](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvitejs%2Fvite)构建的文档网站框架，是 [VuePress](https://link.juejin.cn/?target=https%3A%2F%2Fvuepress.vuejs.org%2F) 的升级版本。

Vue3的文档就是用VitePress搭建的。

~~~text
npm install -D vitepress-plugin-autobar
~~~

# API

## getSideBar

```
getSideBar(rootDir = './', options?: Options)
```

- **rootDir**: `string` Directory to get configuration for
- **options**: `Options`Option to create configuration

Returns `sidebar` configuration for VitePress calculated using structure of directory and files in given path.

Type of Options:

```
interface Options {
  ignoreDirectory?: Array<string>, // Directoty path to ignore from being captured.
  ignoreMDFiles?: Array<string>, // File path to ignore from being captured.
}
```

# 使用

```
import { getSideBar } from 'vitepress-plugin-autobar'

module.exports = {
  // ...
  themeConfig: {
    // ...
    sidebar: getSideBar("./docs"),
  },
};

```



## Ignore Some path

You can pass options to keep some path out of the sidebar.

```
import { getSideBar } from 'vitepress-plugin-autobar'

module.exports = {
  // ...
  themeConfig: {
    // ...
    sidebar: getSideBar("./docs", {
      ignoreMDFiles: ['index'],
      ignoreDirectory: ['node_modules'],
    }),
  },
};
```





# How it work？

如果你的目录是下面这样的。

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ 01.Introduction
│  │  └─ START.md
│  ├─ 02.Utils
│  │  └─ dateUtil.md
│  │  └─ storeUtil.md
│  └─ index.md

```

调用 `getSideBar` 会生成下面这样的侧边栏数据。

- [x] Then `getSideBar` will return sidebar data like this. It will work well for vitepress.
- [x] Sidebar will order by file path.
- [x] Number in the file path will be removed.

**文件的编号会被用于排序，并被自动去除。**

```
[
    {
        "text":"Introduction",
        "items":[
            {
                "text":"START",
                "link":"01.Introduction/START"
            }
        ]
    },
    {
        "text":"Utils",
        "items":[
            {
                "text":"dateUtil",
                "link":"02.Utils/dateUtil"
            },
            {
                "text":"storeUtil",
                "link":"02.Utils/storeUtil"
            }
        ]
    },
    {
        "text":"Index",
        "items":[
            {
                "text":"Index",
                "link":"index"
            }
        ]
    }
]

```

# 下一步计划

如果未来VitePress支持插件，将通过插件的形式，提供自动生成侧边栏的支持。

如果你有其他需求，欢迎提issus，合理的一定会实现。

If vitepress supports plugins, this component will extend the functionality of plugins.

# License

MIT

Copyright (c) 2022-present, luciozhang

### Keywords

- [vitepress](https://www.npmjs.com/search?q=keywords:vitepress)
- [sidebar](https://www.npmjs.com/search?q=keywords:sidebar)
- [auto](https://www.npmjs.com/search?q=keywords:auto)
- [auto sidebar](https://www.npmjs.com/search?q=keywords:"auto sidebar")
- [autobar](https://www.npmjs.com/search?q=keywords:autobar)
- [vitepress config](https://www.npmjs.com/search?q=keywords:"vitepress config")

# 实现过程

实现过程比较简单，这里只简单贴一下流程就可以了。

- 新建npm包
- 添加TypeScript支持
- 添加ESLint（**Quality**）
- 代码实现：简单的遍历目录，按vitepress的配置结构生成sidebar数据。
- 添加rollup打包配置
- 添加Jest测试（**Quality**）
- 补充文档（**Quality**）
- npm包发布

后面带`Quality`的流程，都是影响npm质量评分的项目，不要偷懒不做。

