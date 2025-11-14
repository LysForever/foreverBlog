<template><div><p>两步解决右键添加“md”文件</p>
<h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步"><span>第一步</span></a></h2>
<p>桌面新建一个txt文件，并粘贴下列代码</p>
<p><strong>注意</strong>：需要将icon后面的路径改成自己的typora安装的位置</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Windows Registry Editor Version 5.00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\.md]</span></span>
<span class="line"><span>@="typora.md"</span></span>
<span class="line"><span>"icon"="你的typora安装目录下的typora.exe文件"</span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\.md\OpenWithProgids]</span></span>
<span class="line"><span>"Typora.md"=""</span></span>
<span class="line"><span>"VSCode.md"=""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\.md\ShellNew]</span></span>
<span class="line"><span>"NullFile"=""</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例如</strong>（我的配置）</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>Windows Registry Editor Version 5.00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\.md]</span></span>
<span class="line"><span>@="typora.md"</span></span>
<span class="line"><span>"icon"="E:\Software\Typora\Typora\Typora.exe"</span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\.md\OpenWithProgids]</span></span>
<span class="line"><span>"Typora.md"=""</span></span>
<span class="line"><span>"VSCode.md"=""</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[HKEY_CLASSES_ROOT\.md\ShellNew]</span></span>
<span class="line"><span>"NullFile"=""</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步"><span>第二步</span></a></h2>
<p>将此文件保存后退出，再将文件后缀名修改成<code v-pre>reg</code>，再双击运行即可。</p>
<p>此代码会将typora快速写入注册表中，达到一键解决！再右键即可看到markdown文件</p>
<figure><img src="@source/工具与框架/win11右键新建加入md文件/assert/d206ed01447c4c9f8caa5eedb84c94e5.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


