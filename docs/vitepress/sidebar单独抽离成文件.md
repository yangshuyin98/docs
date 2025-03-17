#### 侧边栏美化Sidebar

我们当前只是定义了“数据结构与算法”专栏的入口文件，那在这个页面中的侧边栏，我们要展示的是「数据结构与算法」这个专栏所要填充的文章。比如：栈、队列、字典和集合等等。

那接下来，我们先去专栏下面建立相关文章的md文件。在`docs/column/Algorithm`文件下定义以下几个文件：

```
|——— docs
  |——— column
    |——— Algorithm
      |——— 001_stack.md // 里面可以先随意填充些可辨识的内容
      |——— 002_queue.md
      |——— 003_dictionary.md
      |——— 004_truee.md
      |——— index.md

```

想要生成侧边栏的内容有了，下面我们去给侧边栏做相应的配置。同样，考虑到以后会生成很多侧边栏，我们同样把`sidebar`单独抽离成文件。**具体代码如下：**

```
// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件
export * from './sidebar';

// docs/.vitepress/relaConf/navbar.ts
import {
    DefaultTheme } from 'vitepress';
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
import {
    defineConfig } from 'vitepress';
import {
    nav } from './relaConf';

export default defineConfig({
   
    themeConfig: {
   
        sidebar: sidebar, // 把定义的sidebar给替换进来
    }
})

```

最终，我们来看下实现的效果。**具体如下图所示：**

这样，就成功替换了当前专栏的侧边栏。这里我们只对一个专栏做侧边导航栏配置，如果有多个专栏的情况下，按照上面的方法，继续叠加配置即可。

写到这里的时候，周一突然发现个问题，侧边栏的配置每回更新都要去手动修改，有时候又很容易出现错误订正的情况。然后我就在想，有没有什么办法，可以通过npm包等方式，来自动生成sidebar的配置？

于是找到了这篇文章：[基于目录为VitePress生成侧边栏](https://juejin.cn/post/7169108165198348302#comment)。实践了一番下来，周一觉得跟自己平常的归类整理方式相比，自定义化的程度比较低。因此这里不再做详细介绍，大家各取所需~
