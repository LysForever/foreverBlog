<template><div><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0 引言</span></a></h2>
<p>对于现在科研人员进行深度学习时，不可避免使用服务器进行模型训练，并且现在的服务器大都是Ubantu系统，则此文章将基于Ubantu系统，为科研人员或者新手小白如何使用服务器进行模型训练</p>
<h2 id="_1-连接服务器" tabindex="-1"><a class="header-anchor" href="#_1-连接服务器"><span>1 连接服务器</span></a></h2>
<p>Ubuntu 服务器通常通过 SSH 远程连接。假设服务器地址为 <code v-pre>server_address</code>，用户名为 <code v-pre>username</code>，可以在本地终端使用以下命令连接：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ssh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> username@server_address</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 示例 ：ssh root@111.111.111.11</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果是第一次连接，系统会提示你确认服务器的指纹信息，输入 <code v-pre>yes</code> 即可。之后会要求输入用户密码，输入完成后就可以登录服务器了。</p>
<h2 id="_2-基本操作" tabindex="-1"><a class="header-anchor" href="#_2-基本操作"><span>2. 基本操作</span></a></h2>
<p>在服务器上，你主要需要操作以下内容：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看当前目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -lh</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建文件夹</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> project</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 上传文件到服务器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> local_file.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> username@server_ip:/home/username/project/</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 下载文件到本地</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> username@server_ip:/home/username/project/result.txt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-软件安装" tabindex="-1"><a class="header-anchor" href="#_2-1-软件安装"><span>2.1 软件安装</span></a></h3>
<p>Ubuntu 使用 <code v-pre>apt</code> 包管理器：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sudo apt update</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sudo apt install python3 python3</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">pip git </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 Python 虚拟环境：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>python3 -m venv venv</span></span>
<span class="line"><span>source venv/bin/activate</span></span>
<span class="line"><span>pip install numpy pandas torch</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>这一部分内容，主要取决于你需要什么，然后再去寻找具体的使用方法为好！</p>
</blockquote>
<h2 id="_3-gpu-使用-科研常见" tabindex="-1"><a class="header-anchor" href="#_3-gpu-使用-科研常见"><span>3 GPU 使用（科研常见）</span></a></h2>
<p>在科研服务器中，GPU 是进行深度学习和大规模计算的重要资源。科研人员常用的基础操作包括查看 GPU 状态、显存使用情况，以及当前 GPU 被哪些进程占用。</p>
<h3 id="_3-1-查看-gpu-信息" tabindex="-1"><a class="header-anchor" href="#_3-1-查看-gpu-信息"><span>3.1 查看 GPU 信息</span></a></h3>
<p>使用 <code v-pre>nvidia-smi</code> 可以查看 GPU 的基本信息：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nvidia-smi</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出示例：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>+-----------------------------------------------------------------------------+</span></span>
<span class="line"><span>| NVIDIA-SMI 530.30.02    Driver Version: 530.30.02    CUDA Version: 12.1   |</span></span>
<span class="line"><span>|-------------------------------+----------------------+------------------+</span></span>
<span class="line"><span>| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. |</span></span>
<span class="line"><span>| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute |</span></span>
<span class="line"><span>|===============================+======================+==================|</span></span>
<span class="line"><span>| 0   Tesla V100-SXM2      On   | 00000000:65:00.0 Off |                  |</span></span>
<span class="line"><span>| 30%   45C    P0   70W / 300W |    1024MiB / 16160MiB |  5%      Default |</span></span>
<span class="line"><span>+-------------------------------+----------------------+------------------+</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Memory-Usage</strong>：显示当前显存占用，例如 <code v-pre>1024MiB / 16160MiB</code> 表示已用 1024MiB，总显存 16GB。</p>
<p><strong>GPU-Util</strong>：显示 GPU 当前的使用率百分比。</p>
<h3 id="_3-2-查看当前-gpu-剩余显存" tabindex="-1"><a class="header-anchor" href="#_3-2-查看当前-gpu-剩余显存"><span>3.2 查看当前 GPU 剩余显存</span></a></h3>
<p>如果只想查看显存剩余，可以使用：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --query-gpu=memory.free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --format=csv</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出示例：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>memory.free [MiB]</span></span>
<span class="line"><span>15136 MiB</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示该 GPU 还剩 15GB 可用显存。</p>
<h3 id="_3-3-查看-gpu-正在被谁使用" tabindex="-1"><a class="header-anchor" href="#_3-3-查看-gpu-正在被谁使用"><span>3.3 查看 GPU 正在被谁使用</span></a></h3>
<p>要查看当前占用 GPU 的进程及用户，可以使用：</p>
<p>在 <code v-pre>Processes</code> 区域可以看到类似：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>+-----------------------------------------------------------------------------+</span></span>
<span class="line"><span>| Processes:                                                                  |</span></span>
<span class="line"><span>|  GPU   PID   Type   Process name                  GPU Memory Usage          |</span></span>
<span class="line"><span>|=============================================================================|</span></span>
<span class="line"><span>|  0   12345  C     python train_model.py           800MiB                   |</span></span>
<span class="line"><span>|  0   23456  C     python test_inference.py       224MiB                   |</span></span>
<span class="line"><span>+-----------------------------------------------------------------------------+</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>PID</strong>：进程 ID，可用 <code v-pre>ps -p PID -u</code> 查看具体用户和命令。</li>
<li><strong>GPU Memory Usage</strong>：显示每个进程占用显存。</li>
</ul>
<p>例如查看 PID 12345 的进程用户和命令：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>ps -p 12345 -u</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-4-实时监控-gpu" tabindex="-1"><a class="header-anchor" href="#_3-4-实时监控-gpu"><span>3.4 实时监控 GPU</span></a></h3>
<p>可以使用 <code v-pre>nvidia-smi</code> 的循环模式，每隔几秒刷新状态：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nvidia-smi</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>-l 5</code> 表示每 5 秒刷新一次。</p>
<p>可以实时观察显存变化和 GPU 使用率，便于科研任务管理。</p>
<p>通过这些基础操作，科研人员可以快速了解 GPU 状态、显存剩余情况以及占用情况，从而合理分配任务和资源。</p>
<h2 id="_4-会话保持-科研必备" tabindex="-1"><a class="header-anchor" href="#_4-会话保持-科研必备"><span>4 会话保持（科研必备）</span></a></h2>
<p>在科研和深度学习实验中，长时间运行的任务（如模型训练、数据处理）可能会因为网络断开或终端关闭而中断。为了保证实验的连续性，我们通常使用 <strong>会话保持工具</strong>。常用的工具有 <code v-pre>tmux</code> 和 <code v-pre>screen</code>。</p>
<h3 id="_4-1-tmux使用方法" tabindex="-1"><a class="header-anchor" href="#_4-1-tmux使用方法"><span>4.1 tmux使用方法</span></a></h3>
<p><code v-pre>tmux</code> 是一个终端复用工具，可以在一个终端窗口中创建多个会话、窗口和面板，即使关闭终端或掉线，任务仍然在后台运行。</p>
<p><strong>安装</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tmux</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>启动 tmux 会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>tmux</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者创建带名字的会话：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>tmux new -s session_name</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>分离会话</strong>（保持后台运行）</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + b, d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此时会话会在后台运行，可以安全退出 SSH。</p>
<ol>
<li><strong>重新连接会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>tmux attach -t session_name</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>查看所有会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>tmux ls</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>窗口和面板管理</strong></li>
</ol>
<ul>
<li>创建新窗口：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + b, c</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>切换窗口：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + b, n  # 下一个窗口</span></span>
<span class="line"><span>Ctrl + b, p  # 上一个窗口</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>水平/垂直拆分面板：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + b, "   # 水平拆分</span></span>
<span class="line"><span>Ctrl + b, %   # 垂直拆分</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>切换面板：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + b, 方向键</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-2-screen-使用指南" tabindex="-1"><a class="header-anchor" href="#_4-2-screen-使用指南"><span>4.2 screen 使用指南</span></a></h3>
<p><code v-pre>screen</code> 是另一个经典的终端多路复用工具，功能类似 <code v-pre>tmux</code>，适合快速保持会话。</p>
<p>安装</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt install screen</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>基础操作</p>
<ol>
<li><strong>启动 screen 会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>screen</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者创建带名字的会话：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>screen -S session_name</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>分离会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + a, d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>重新连接会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>screen -r session_name</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>查看所有会话</strong></li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>screen -ls</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li><strong>窗口管理</strong></li>
</ol>
<ul>
<li>创建新窗口：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + a, c</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>切换窗口：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Ctrl + a, n  # 下一个窗口</span></span>
<span class="line"><span>Ctrl + a, p  # 上一个窗口</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-3-总结" tabindex="-1"><a class="header-anchor" href="#_4-3-总结"><span>4.3 总结</span></a></h3>
<ul>
<li><strong>tmux</strong>：功能强大，支持分屏、窗口管理，更适合长期复杂实验。</li>
<li><strong>screen</strong>：轻量易用，兼容性好，适合快速保持任务。</li>
<li>对科研工作者来说，掌握会话保持工具，可以大幅提升远程实验效率，避免训练中断，节省时间和精力。</li>
</ul>
</div></template>


