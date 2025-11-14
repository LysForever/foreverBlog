import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  base: "/foreverBlog/",

  lang: "zh-CN",
  title: "二进制星辰",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  plugins: [
    markdownMathPlugin({
      // 选项
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
