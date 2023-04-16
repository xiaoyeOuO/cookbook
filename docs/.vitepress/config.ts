import { link } from "node:fs";
import { test } from "node:test";
import { text } from "stream/consumers";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Xiaoye Cookbook",
  description: "日常学习的简单记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
      // {text: 'JavaScript', link: '/JavaScript/文件夹测试'}
      {text: 'Vue', link: '/Vue/Vue2响应式原理'}
    ],

    sidebar: [
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
      {
        text: 'Vue',
        items: [
          {text: 'Vue2响应式原理', link: '/Vue/Vue2响应式原理'}
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  outDir: '../public'
});
