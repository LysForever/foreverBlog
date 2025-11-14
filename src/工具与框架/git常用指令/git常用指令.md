---
title: git常用指令
date:  2024-06-08 01:55:36
categories:
  - 工具与框架
tags:
  - git
sticky: 0
sidebar: 'auto'
---


使用git进行操作时经常遇到的一些命令，记录下来，方便自己和他人一起学习。如有错误，欢迎指出，鄙人将不胜感激！

## 1.上传文件

**（1）初始化（第一次使用）**

```
git init
```

**（2）更新文件至本地仓库（有两种更新方式）**

第一种是更新所有文件

```
git add .
```

第二种更新指定文件

```
git add view.py
```

**（3）提交文件**

```
git commit -m "注释"
```

**（4）与远程仓库建立连接**

```
git remote origin [远程仓库地址]
```

**（5）上传至远程仓库**

```
git push origin [分支]
```



## 2.仓库操作

**（1）查看仓库**

```
git remote -v
```

**（2）切换仓库**

```
git remote set-url [仓库地址]
```



## 3.分支操作

**（1）查看当前所有分支**

```
git branch
```

**（2）切换分支**

```
git checkout [分支]
```

**（3）创建分支**

```
git branch [分支名]
```

**（4）删除分支**

```
git branch -d [分支名]
```

**（5）上传新分支至仓库**

```
git push origin [分支名]
```



## 4.上传新项目到云端仓库中

**（1）初始化本地仓库**

```
git init
```

**（2）添加远程仓库**

```
git remote add origin <仓库地址>
```

**（3）添加文件到暂存区**

```
git add .
```

**（4）提交更改**

```
git commit -m "Initial commit"
```

**（5）创建并切换到新分支**

```
git checkout -b <新分支名称>
```

**（6）推送到远程仓库**

```
git push -u origin <新分支名称>
```



## 5.只拉取一个仓库的某个分支

**用 Git 的 `--single-branch` 和 `-b` 选项**

```
git clone -b <分支名称> --single-branch <仓库URL>
```

