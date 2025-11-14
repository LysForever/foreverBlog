import { sidebar } from "vuepress-theme-hope";
import { readdirSync, existsSync } from "fs";
import { join, resolve } from "path";

const srcRoot = resolve(__dirname, ".."); // 指向 src 目录

const slugify = (name: string) => name.replace(/\+/g, "_");

const resolveArticles = (dir: string) => {
  const absDir = resolve(srcRoot, dir);
  return readdirSync(absDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => existsSync(join(absDir, entry.name, `${entry.name}.md`)))
    .map((entry) => {
      const slug = slugify(entry.name);
      return `${slug}/${slug}`;
    });
};

export default sidebar({
  "/": [
    {
      text: "深度学习",
      prefix: "/深度学习/",
      collapsible: true,
      collapsed: true,
      children: resolveArticles("深度学习"),
    },
    {
      text: "工具与框架",
      prefix: "/工具与框架/",
      collapsible: true,
      collapsed: true,
      children: resolveArticles("工具与框架"),
    },
    {
      text: "其他",
      prefix: "/其他/",
      collapsible: true,
      collapsed: true,
      children: resolveArticles("其他"),
    },
    {
      text: "随笔",
      prefix: "/随笔/",
      collapsible: true,
      collapsed: true,
      children: resolveArticles("随笔"),
    },
  ],
});
