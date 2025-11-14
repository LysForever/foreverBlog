---
title: Screen命令
date:  2024-07-19 11:16:44
categories:
  - 工具与框架
tags:
  - screen
sticky: 0
---

**服务器长连接：Screen命令**

GNU Screen一款由GNU计划开发的用于命令行终端切换的软件，可以当做窗口管理器的命令行界面版本。只要Screen本身没有被终止，在其内部运行的会话都可以恢复，特别适合执行一些运行时间长的任务。

**查看会话列表**

```
screen -ls
```

**恢复指定列表**

```
scrren -r 124090.
```

**新建会话**

```
screen -S [name]
```

**删除指定会话**

```
screen -X -S 124090 quit
```

**断开其他对话，使用最新的对话**

```
screen -D -r
```


