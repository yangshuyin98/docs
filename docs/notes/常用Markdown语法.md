### 常用 Markdown 语法

考虑到很多项目在开发时，时常遇到网络限制情况，导致网站无法访问，所以配置了一个本地访问的入口。

> 文档地址：[https://vitepress.dev/zh/guide/markdown](https://link.zhihu.com/?target=https%3A//vitepress.dev/zh/guide/markdown)
> 更新 md 文档：[https://github.com/vuejs/vitepress/edit/main/docs/zh/guide/markdown.md](https://link.zhihu.com/?target=https%3A//github.com/vuejs/vitepress/edit/main/docs/zh/guide/markdown.md)

创建 docs/other/markdown.md 文件

~~~text
# Markdown 扩展 {#markdown-extensions}

::: danger 注意，注意，注意
VitePress 带有内置的 Markdown 扩展。当前文档对应的是官方 [1.0.0-rc.40](https://vitepress.dev/zh/guide/markdown) 版。

考虑到很多项目在开发时，时常遇到网络限制情况，导致网站无法访问，所以配置了一个本地访问的入口，大家根据项目实际情况及时更新[官方文档](https://github.com/vuejs/vitepress/edit/main/docs/zh/guide/markdown.md)。
:::



## 标题锚点 {#header-anchors}

标题会自动应用锚点。可以使用 `markdown.anchor` 选项配置锚点的渲染。

### 自定义锚点 {#custom-anchors}

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

。。。
~~~

```
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

{
   mathJaxContainer[0]}  方程式latex

『**文字**』 加粗字体
『*文字*』 斜体

『```代码语言 空格』  代码块

『> 空格』 引用

```



##### （2）vitepress对md的支持

上面我们介绍了最简单的`markdown`语法，还有另一个要提到的问题是，vitepress官方对markdown的扩展支持。

**包括但不限于emoji：**

Emoji

input

```
:tada: :100:
```

**或者高亮信息：**
