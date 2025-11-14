---
title: 科研人如何使用ubantu服务器
date:  2025-11-09 15:18:32
categories:
  - 工具与框架
tags:
  - 服务器
  - ubantu
sticky: 0
---

## 0 引言

对于现在科研人员进行深度学习时，不可避免使用服务器进行模型训练，并且现在的服务器大都是Ubantu系统，则此文章将基于Ubantu系统，为科研人员或者新手小白如何使用服务器进行模型训练

## 1 连接服务器

Ubuntu 服务器通常通过 SSH 远程连接。假设服务器地址为 `server_address`，用户名为 `username`，可以在本地终端使用以下命令连接：

```bash
ssh username@server_address # 示例 ：ssh root@111.111.111.11
```

如果是第一次连接，系统会提示你确认服务器的指纹信息，输入 `yes` 即可。之后会要求输入用户密码，输入完成后就可以登录服务器了。

## 2. 基本操作

在服务器上，你主要需要操作以下内容：

```bash
# 查看当前目录
ls -lh
# 创建文件夹
mkdir project
# 上传文件到服务器
scp local_file.txt username@server_ip:/home/username/project/
# 下载文件到本地
scp username@server_ip:/home/username/project/result.txt ./

```

### 2.1 软件安装

Ubuntu 使用 `apt` 包管理器：

```python
sudo apt update
sudo apt install python3 python3-pip git -y
```

如果使用 Python 虚拟环境：

```
python3 -m venv venv
source venv/bin/activate
pip install numpy pandas torch
```

> 这一部分内容，主要取决于你需要什么，然后再去寻找具体的使用方法为好！

## 3 GPU 使用（科研常见）

在科研服务器中，GPU 是进行深度学习和大规模计算的重要资源。科研人员常用的基础操作包括查看 GPU 状态、显存使用情况，以及当前 GPU 被哪些进程占用。

### 3.1 查看 GPU 信息

使用 `nvidia-smi` 可以查看 GPU 的基本信息：

```bash
nvidia-smi
```

输出示例：

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 530.30.02    Driver Version: 530.30.02    CUDA Version: 12.1   |
|-------------------------------+----------------------+------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute |
|===============================+======================+==================|
| 0   Tesla V100-SXM2      On   | 00000000:65:00.0 Off |                  |
| 30%   45C    P0   70W / 300W |    1024MiB / 16160MiB |  5%      Default |
+-------------------------------+----------------------+------------------+
```

**Memory-Usage**：显示当前显存占用，例如 `1024MiB / 16160MiB` 表示已用 1024MiB，总显存 16GB。

**GPU-Util**：显示 GPU 当前的使用率百分比。

### 3.2 查看当前 GPU 剩余显存

如果只想查看显存剩余，可以使用：

```bash
nvidia-smi --query-gpu=memory.free --format=csv
```

输出示例：

```
memory.free [MiB]
15136 MiB
```

表示该 GPU 还剩 15GB 可用显存。

### 3.3 查看 GPU 正在被谁使用

要查看当前占用 GPU 的进程及用户，可以使用：

在 `Processes` 区域可以看到类似：

```
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   PID   Type   Process name                  GPU Memory Usage          |
|=============================================================================|
|  0   12345  C     python train_model.py           800MiB                   |
|  0   23456  C     python test_inference.py       224MiB                   |
+-----------------------------------------------------------------------------+
```

- **PID**：进程 ID，可用 `ps -p PID -u` 查看具体用户和命令。
- **GPU Memory Usage**：显示每个进程占用显存。

例如查看 PID 12345 的进程用户和命令：

```
ps -p 12345 -u
```

### 3.4 实时监控 GPU

可以使用 `nvidia-smi` 的循环模式，每隔几秒刷新状态：

```bash
nvidia-smi -l 5
```

`-l 5` 表示每 5 秒刷新一次。

可以实时观察显存变化和 GPU 使用率，便于科研任务管理。

通过这些基础操作，科研人员可以快速了解 GPU 状态、显存剩余情况以及占用情况，从而合理分配任务和资源。

## 4 会话保持（科研必备）

在科研和深度学习实验中，长时间运行的任务（如模型训练、数据处理）可能会因为网络断开或终端关闭而中断。为了保证实验的连续性，我们通常使用 **会话保持工具**。常用的工具有 `tmux` 和 `screen`。

### 4.1 tmux使用方法

`tmux` 是一个终端复用工具，可以在一个终端窗口中创建多个会话、窗口和面板，即使关闭终端或掉线，任务仍然在后台运行。

**安装**

```bash
sudo apt update
sudo apt install tmux
```

1. **启动 tmux 会话**

```
tmux
```

或者创建带名字的会话：

```
tmux new -s session_name
```

1. **分离会话**（保持后台运行）

```
Ctrl + b, d
```

此时会话会在后台运行，可以安全退出 SSH。

1. **重新连接会话**

```
tmux attach -t session_name
```

1. **查看所有会话**

```
tmux ls
```

1. **窗口和面板管理**

- 创建新窗口：

```
Ctrl + b, c
```

- 切换窗口：

```
Ctrl + b, n  # 下一个窗口
Ctrl + b, p  # 上一个窗口
```

- 水平/垂直拆分面板：

```
Ctrl + b, "   # 水平拆分
Ctrl + b, %   # 垂直拆分
```

- 切换面板：

```
Ctrl + b, 方向键
```

###  4.2 screen 使用指南

`screen` 是另一个经典的终端多路复用工具，功能类似 `tmux`，适合快速保持会话。

安装

```
sudo apt update
sudo apt install screen
```

基础操作

1. **启动 screen 会话**

```
screen
```

或者创建带名字的会话：

```
screen -S session_name
```

1. **分离会话**

```
Ctrl + a, d
```

1. **重新连接会话**

```
screen -r session_name
```

1. **查看所有会话**

```
screen -ls
```

1. **窗口管理**

- 创建新窗口：

```
Ctrl + a, c
```

- 切换窗口：

```
Ctrl + a, n  # 下一个窗口
Ctrl + a, p  # 上一个窗口
```

------

### 4.3 总结

- **tmux**：功能强大，支持分屏、窗口管理，更适合长期复杂实验。
- **screen**：轻量易用，兼容性好，适合快速保持任务。
- 对科研工作者来说，掌握会话保持工具，可以大幅提升远程实验效率，避免训练中断，节省时间和精力。

