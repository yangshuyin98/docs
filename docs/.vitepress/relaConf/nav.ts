// docs/.vitepress/relaConf/nav.ts
import type { DefaultTheme } from 'vitepress'
export const navbar: DefaultTheme.NavItem[] = [

    { text: 'Home', link: '/' },
    {
        text: 'hypermesh二次开发',
        items: [
            { text: '21讲二次开发大纲', link: '/hypermesh二次开发/21讲二次开发大纲' },
            { text: '22讲 set puts expr for循环', link: '/hypermesh二次开发/22讲set puts expr for循环' },
            { text: '23讲列表和字符串的操作方法', link: '/hypermesh二次开发/23讲列表和字符串的操作方法' },
            { text: '24讲文件对话框的操作方法', link: '/hypermesh二次开发/24讲文件对话框的操作方法' },]
    },

    {
        text: 'ollama',
        items: [
            { text: 'Cherry Studio知识库', link: '/ollama/Cherry Studio知识库' },]
    },
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
                    { text: 'VitePress部署v1.6.3', link: '/vitepress/部署/VitePress部署v1.6.3' },
                    { text: 'sidebar单独抽离成文件', link: '/vitepress/部署/sidebar单独抽离成文件' },],
            },

            { text: 'Examples', link: '/vitepress/markdown-examples' },
            { text: 'api-examples', link: '/vitepress/api-examples' },]
    },
    {
        text: '笔记',
        items: [
            { text: '常用Markdown', link: '/notes/常用Markdown语法' },
            { text: '下载和安装Pandoc_Windows版本', link: '/notes/下载和安装Pandoc_Windows版本' },
            { text: 'GitHub', link: '/notes/GitHub上删除项目中的个别文件' },
            { text: '安装git', link: '/notes/安装git' },
            { text: 'note', link: '/notes/note' },
            { text: 'Pandoc命令', link: '/notes/Pandoc命令' },]
    },
    {
        text: '前端',
        items: [
            { text: 'vue', link: '/frontEnd/vue/vue' },
            { text: 'JavaScript', link: '/frontEnd/JavaScript/JavaScript' },
            { text: 'else', link: '/frontEnd/else/else.md' },]
    },
    {
        text: '后端',
        items: [
            { text: 'spring', link: '/backEnd/spring' },
            { text: 'java', link: '/backEnd/java' },]
    },
    {//标签
        text: 'blogs',
        items: [
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
        ]
    },








]