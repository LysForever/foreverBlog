import { GitContributors } from "E:/Resources/Projects/MyProjects/LysBlog/foreverBlogs/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
