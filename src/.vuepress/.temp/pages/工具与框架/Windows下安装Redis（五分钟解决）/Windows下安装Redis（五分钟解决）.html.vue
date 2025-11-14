<template><div><h2 id="_0-redis下载地址" tabindex="-1"><a class="header-anchor" href="#_0-redis下载地址"><span>0 Redis下载地址</span></a></h2>
<p><a href="https://github.com/tporadowski/redis/releases%EF%BC%88%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80%E4%B8%80%EF%BC%9Agithub%E6%87%82%E7%9A%84%E9%83%BD%E6%87%82%EF%BC%89" target="_blank" rel="noopener noreferrer">https://github.com/tporadowski/redis/releases（下载地址一：github懂的都懂）</a><br>
<a href="https://pan.baidu.com/s/1R8OZeC7fgshJOLxmz1w9IQ?pwd=6666" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1R8OZeC7fgshJOLxmz1w9IQ?pwd=6666</a> （下载地址二：百度网盘：提取码: 6666）</p>
<h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1 安装</span></a></h2>
<p>解压至固定位置（不要有中文），解压完后如图所示。<br>
<img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assets/image-20251101194424645.png" alt="image-20251101194424645" loading="lazy"></p>
<p>然后cmd进入该文件夹，输入以下命令进行连接</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>redis-server.exe</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认端口为6379，出现图上的图标说明redis服务启动成功。<br>
<img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assets/image-20251101194440586.png" alt="image-20251101194440586" loading="lazy"></p>
<p>这里建议将路径放在系统变量中，这样下次启动就无需再进入该页面<br>
<img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assets/image-20251101194449795.png" alt="image-20251101194449795" loading="lazy"></p>
<h2 id="_2-客户端连接" tabindex="-1"><a class="header-anchor" href="#_2-客户端连接"><span>2 客户端连接</span></a></h2>
<p>打开另外一个cmd窗口（上一个窗口<strong>不能关闭</strong>，因为上一个窗口就是用来连接服务器的，否则会连接不成功）</p>
<p>在新开的cmd中写入以下命令，显示下图所示即连接成功</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>redis-cli.exe</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assets/image-20251101194458940.png" alt="image-20251101194458940" tabindex="0" loading="lazy"><figcaption>image-20251101194458940</figcaption></figure>
<p>检测连接命令，可以在cmd中输入ping检测，如出现PONG即为连接成功<br>
<img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assets/image-20251101194506167.png" alt="image-20251101194506167" loading="lazy"></p>
<h2 id="_3-基础操作" tabindex="-1"><a class="header-anchor" href="#_3-基础操作"><span>3 基础操作</span></a></h2>
<p>Redis默认拥有16个数据库，初始默认使用0号库，在命令行中通过<code v-pre>select</code>命令将数据库切换到8号数据库：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>select 10</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assert/4d09516a4e03478db3c40376d3c950b6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>在命令中通过<code v-pre>set</code>命令设置键值，通过<code v-pre>get</code>命令取出键值：<br>
<img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assert/3f8c29b860f34987b643a1cfe1d07233.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>在命令中通过<code v-pre>shutdown</code>命令来关闭redis服务，在连接窗口会出现下图所示退出图：</p>
<p><img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assert/1c61696413414e21a4a6d2abf6b78b86.png" alt="在这里插入图片描述" loading="lazy"><br>
<img src="@source/工具与框架/Windows下安装Redis（五分钟解决）/assert/7187a46caa664c949940fa05b32df407.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><strong>Redis常用的服务指令</strong></p>
<p>卸载服务：<code v-pre>redis-server --service-uninstall</code></p>
<p>开启服务：<code v-pre>redis-server --service-start</code></p>
<p>停止服务：<code v-pre>redis-server --service-stop</code></p>
</div></template>


