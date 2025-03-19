// docs/.vitepress/relaConf/sidebar.ts
import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/backEnd/': [
    { text: 'spring', link: '/backEnd/spring' },
    { text: 'java', link: '/backEnd/java' },
  ],





  '/frontEnd/': [
    { text: 'vue', link: '/frontEnd/vue/vue' },
    { text: 'JavaScript', link: '/frontEnd/JavaScript/JavaScript' },
    { text: '2024年前端学习路线图', link: '/frontEnd/else/2024年前端学习路线图.md' },
    { text: 'else', link: '/frontEnd/else/else.md' },
  ],

  //     /blogs/表示对这个文件夹下的所有md文件做侧边栏配置
  '/blogs/': [
    { text: '编程日志', link: '/blogs/coding-001' },
    { text: '美食记录', link: '/blogs/food-001/' },
    { text: '园艺笔记', link: '/blogs/garden-001/' },
    { text: "健康生活", link: "/blogs/health-001" },
    { text: "生活随笔", link: "/blogs/life-001" },
    { text: "影视评论", link: "/blogs/movie-001" },
    { text: "音乐分享", link: "/blogs/music-001" },
    { text: "摄影作品", link: "/blogs/photo-001" },
    { text: "读书笔记", link: "/blogs/reading-001" },
    { text: "旅行日记", link: "/blogs/travel-001" },
  ],




  '/notes/': [
    { text: '常用Markdown', link: '/notes/常用Markdown语法' },
    { text: '下载和安装Pandoc_Windows版本', link: '/notes/下载和安装Pandoc_Windows版本' },
    { text: 'GitHub', link: '/notes/GitHub上删除项目中的个别文件' },
    { text: 'note', link: '/notes/note' },
    { text: 'Pandoc命令', link: '/notes/Pandoc命令' },
  ],

  '/ollama/': [
    { text: 'Cherry Studio知识库', link: '/ollama/Cherry Studio知识库' },
  ],

  '/vitepress/zh/guide/': { base: '/vitepress/zh/guide/', items: sidebarGuide() },
  '/vitepress/zh/reference/': { base: '/vitepress/zh/reference/', items: sidebarReference(), },
  '/vitepress/部署/': [
    { text: '基于VitePress+Github Pages详细v1.6.3', link: '/vitepress/部署/VitePress+Github Pages详细v1.6.3' },
    { text: '支持PC和wap自适应', link: '/vitepress/部署/支持PC和wap自适应' },
    { text: 'dist部署', link: '/vitepress/部署/dist部署' },
    { text: 'narbar单独抽离成文件', link: '/vitepress/部署/sidebar单独抽离成文件' },
    { text: 'sidebar单独抽离成文件', link: '/vitepress/部署/sidebar单独抽离成文件' },
    { text: 'VitePress+Github Pages详细v1.6.3', link: '/vitepress/部署/VitePress+Github Pages详细v1.6.3' },
    { text: 'VitePress部署', link: '/vitepress/部署/VitePress部署' },
    { text: 'VitePress部署v1.6.3', link: '/vitepress/部署/VitePress部署v1.6.3' },
    { text: 'VitePress从0到1', link: '/vitepress/部署/VitePress从0到1' },

    

  ],







  //     /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
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