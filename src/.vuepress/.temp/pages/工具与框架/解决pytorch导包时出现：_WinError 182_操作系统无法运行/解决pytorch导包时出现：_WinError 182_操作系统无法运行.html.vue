<template><div><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0 引言</span></a></h2>
<p>在本地利用anaconda3正确安装了pytorch后，导入<code v-pre>torch</code>时报错，显示找不到<code v-pre>fbgemm.dll</code>这个文件，尝试了重装pytorch和微软C++相关组件，并对电脑重启后依然无法运行，始终报相同的错误。在查阅大量资料和尝试多种方法后，最终通过安装一个包成功解决此问题。本文针对导入<code v-pre>torch</code>后，运行时报操作系统无法运行的问题，并显示[WinError 182]的问题提供解决方案。</p>
<h2 id="_1-问题概要" tabindex="-1"><a class="header-anchor" href="#_1-问题概要"><span>1 问题概要</span></a></h2>
<p>这里报下述错误，主要是缺少一个<strong>fbgemm.dll</strong>文件，显示操作系统的<strong>WinError 182</strong>的问题</p>
<blockquote>
<p>报错内容</p>
</blockquote>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File ".\test.py", line 1, in &#x3C;module></span></span>
<span class="line"><span>    import torch</span></span>
<span class="line"><span>  File "D:\software\anaconda\envs\pytorchEnv\lib\site-packages\torch\__init__.py", line 128, in &#x3C;module></span></span>
<span class="line"><span>    raise err</span></span>
<span class="line"><span>OSError: [WinError 182] 操作系统无法运行 %1。 Error loading "D:\software\anaconda\envs\pytorchEnv\lib\site-packages\torch\lib\fbgemm.dll" or one of its dependencies.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span>2 解决方案</span></a></h2>
<p>进入此时的虚拟环境，并执行下述安装包的命令。安装完后再运行代码即可成功，亲测有效！</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>conda install -c defaults intel-openmp -f</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>运行成功示例</p>
</blockquote>
<figure><img src="@source/工具与框架/解决pytorch导包时出现：[WinError 182]操作系统无法运行/assert/c15adbba46434b8b9c198d23e9cc73dc.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3-问题原因" tabindex="-1"><a class="header-anchor" href="#_3-问题原因"><span>3 问题原因</span></a></h2>
<p>出现此问题的根本原因主要是与intel-openmp有关，如果你安装的是conda-forge版本，那么就会出现这个问题，解决的办法也很简单，执行上述命令即可[1]。</p>
<h2 id="_4-参考" tabindex="-1"><a class="header-anchor" href="#_4-参考"><span>4 参考</span></a></h2>
<p>[1] <a href="https://zhuanlan.zhihu.com/p/93505274" target="_blank" rel="noopener noreferrer">from torch._C import * DLL load failed: 操作系统无法运行%1</a></p>
</div></template>


