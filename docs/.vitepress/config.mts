import { defineConfig } from 'vitepress'
import {  sidebar } from './relaConf';
import { navbar} from './relaConf';
import { type DefaultTheme } from 'vitepress'
export default defineConfig({
  
  base: "/docs/",
  title: "modern的Vitepress文档",
  description: "一个vitepress站点",
  themeConfig: {        
    outlineTitle: '文章目录',
    outline: [2, 6],
    logo: '/comet.png',
    nav: navbar,
    sidebar: sidebar, // 把定义的sidebar给替换进来
   
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'full'
      }
    },


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
      copyright: "Copyright © modern",
    },
  }
})

