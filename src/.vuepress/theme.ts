import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  darkmode: "switch",

  hostname: "https://mister-hope.github.io",

  author: {
    name: "二进制星辰",
    url: "https://blog.csdn.net/qq_63786218?type=blog",
  },

  logo: "./avatar/avatar.jpg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  // displayFooter: true,

  // 博客相关
  blog: {
    description: "一个正在迷茫的小羔羊",
    intro: "https://blog.csdn.net/qq_63786218?type=blog",
    medias: {
      CSDN: {
        icon:"https://simpleicons.org/icons/csdn.svg",
        link:"https://blog.csdn.net/qq_63786218?type=blog",
      },
      // github:"https://blog.csdn.net/qq_63786218?type=blog"
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/随笔/": {
        // hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  // metaLocales: {
  //   // editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    // component: true,
    // demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    // include: true,
    mark: true,
    // plantuml: true,
    spoiler: false,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    math: {
      // 或者安装 @mathjax/src
      type: "mathjax",
    },


    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    

    blog: true,
    slimsearch: true,
    // components: {
    //   components: ["Badge", "VPCard"],
    // },

    // icon: {
    //   prefix: "fa6-solid:",
    // },
  },
});
