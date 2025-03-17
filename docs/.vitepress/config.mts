import { defineConfig } from 'vitepress'
import { type DefaultTheme } from 'vitepress'


export default defineConfig({
  base: "/blogs/",
  title: "modern的Vitepress文档",
  description: "一个vitepress站点",
  themeConfig: {    // 👉设置主题配置    
    outlineTitle: '文章目录',
    outline: [2, 6],
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    //nav开始
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'VitePress',
        items: [
          { text: 'VitePress', link: '/vitepress/zh/guide/what-is-vitepress' },
          { text: '参考', link: '/vitepress/zh/reference/site-config' },
          { text: '哈哈', link: '/vitepress/haha' },
          {
            text: 'vitepress',
            items: [
              { text: 'VitePress+Github Pages详细v1.6.3', link: '/vitepress/部署/VitePress+Github Pages详细v1.6.3' },
              { text: 'VitePress部署v1.6.3', link: '/vitepress/部署/VitePress部署v1.6.3' },],
          },

          { text: 'Examples', link: '/vitepress/markdown-examples' },
          { text: 'api-examples', link: '/vitepress/api-examples' },]
      },
      {
        text: '前端',
        items: [
          { text: 'vue', link: '/frontEnd/vue/vue' },
          { text: 'JavaScript', link: '/frontEnd/JavaScript/JavaScript' },
          { text: 'vue', link: '/frontEnd/vue/vue2' },
          { text: 'else', link: '/frontEnd/else/else.md' },]
          
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
    sidebar: {
      
      '/document/vitepress/zh/guide/': { base: '/document/vitepress/zh/guide/', items: sidebarGuide() },
      '/document/vitepress/zh/reference/': { base: '/document/vitepress/zh/reference/', items: sidebarReference() }
    },
    // '/zh/reference/': {
    //   text: '前端',
    //   base: '/zh/reference/',
    //   items: [
    //     { text: '站点配置', link: '/runtime-api/' },
    //     { text: 'Frontmatter配置', link: '/frontmatter-config/' },
    //   ]
    // }



    //开启搜索项
    search: {
      provider: "local",
    },

    //设置右侧链接(导航)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {          // 👉设置页脚
      message: "Released under the MIT License.",
      copyright: "Copyright ©林太白",
    },
  }
})


function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/document/vitepress/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}