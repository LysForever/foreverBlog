<template><div><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0 引言</span></a></h2>
<p>当需要操作服务器时，传统方式需通过平台界面反复登录并执行命令，流程较为繁琐。若能在本地环境中直接运行命令并连接服务器，操作将更加便捷高效。本文将以腾讯云服务器为例，详细说明如何通过Cursor工具实现本地与服务器的连接。</p>
<h2 id="_1-插件下载" tabindex="-1"><a class="header-anchor" href="#_1-插件下载"><span>1 插件下载</span></a></h2>
<p>这里我们需要下载<code v-pre>remote-ssh</code>这个插件</p>
<figure><img src="@source/blogs/1_工具与框架/cusor连接远程服务器/assets/f4c9c2959f304e79bbae2198f7604dc5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2-配置基础信息" tabindex="-1"><a class="header-anchor" href="#_2-配置基础信息"><span>2 配置基础信息</span></a></h2>
<p>下载完成后输入命令<code v-pre>curl+shift+p</code></p>
<p>找到<code v-pre>REMOTE-SSH:Open SSH Configuration File</code></p>
<figure><img src="@source/blogs/1_工具与框架/cusor连接远程服务器/assets/c66499e255b64b43af0ccfdead292873.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>打开config文件后，输入下方</p>
<ul>
<li>服务器公网IP</li>
<li>用户名：没有特殊设置即为<code v-pre>root</code></li>
<li>Port：22</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 云服务器示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cloud-server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    HostName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 公网IP</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    User</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    Port</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 22</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-连接服务器" tabindex="-1"><a class="header-anchor" href="#_3-连接服务器"><span>3 连接服务器</span></a></h2>
<p>输入<code v-pre>curl+shift+p</code>，找到<code v-pre>Remote-SSH:Connect to Host</code></p>
<figure><img src="@source/blogs/1_工具与框架/cusor连接远程服务器/assets/dccec2d648f145ca90ca3644ee819de6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>接着输入服务器的<strong>登录密码</strong>即可</p>
<figure><img src="@source/blogs/1_工具与框架/cusor连接远程服务器/assets/13817068157c42819dcc05ed14874612.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


