import CodeDemo from "E:/Resources/Projects/MyProjects/LysBlog/foreverBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "E:/Resources/Projects/MyProjects/LysBlog/foreverBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
