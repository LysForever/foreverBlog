<template><div><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0 引言</span></a></h2>
<p>今天电脑出现了一个非常奇怪的问题，就是pycharm能识别conda里面的所有虚拟环境，也能加载conda的base环境，<strong>但是除了base环境之外自己创建的虚拟环境是一个都加载不上去</strong>，每次都是进度条到最后右下角的环境就是不变。</p>
<h2 id="_1-问题" tabindex="-1"><a class="header-anchor" href="#_1-问题"><span>1 问题</span></a></h2>
<p>这里能识别所有的虚拟环境，但是就是加载不了自己创建的虚拟环境，像下图所示，我想将自己创建的<strong>pytorchxy</strong>虚拟环境加载到pycharm中，有加载的过程，一切都很正常，但就是右下角显示没有加载成功。</p>
<figure><img src="@source/blogs/1_工具与框架/pycharm加载不了conda虚拟环境/assert/61e476c280a945d5a16f91bcb6629daf.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<figure><img src="@source/blogs/1_工具与框架/pycharm加载不了conda虚拟环境/assert/5745edb1f630448fa75928a59d841d0b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p><img src="@source/blogs/1_工具与框架/pycharm加载不了conda虚拟环境/assert/634bdfc9220a4a91bb001787eb974ad7.png" alt="在这里插入图片描述" loading="lazy"><br>
<strong>最终加载不能成功，还是原来的解释器</strong>，不管尝试多少次，始终都不能成功。</p>
<h2 id="_2-思路" tabindex="-1"><a class="header-anchor" href="#_2-思路"><span>2 思路</span></a></h2>
<p>这里可能出现的问题只有两种可能</p>
<ol>
<li>一种是conda环境出现了问题，导致创建的虚拟环境不能加载</li>
<li>另外一种则可能是pycharm编译器有问题</li>
</ol>
<p>对于第一种问题，我尝试利用vscode去加载这个虚拟环境并成功运行相关代码，并且，我也在cmd命令行中加载虚拟环境也运行成功相关代码，所以conda虚拟环境是没有问题的，对于第二个问题，我将编译器（2023年版本）的pycharm卸载了，重新下载了pycharm（2024年版本），结果还是有问题。</p>
<p>所以，我觉得这应该不是编译器和虚拟环境的问题，可能是因为windows系统和pycharm编译器之间有一些加载环境的问题（猜想，并未实践证明该观点，欢迎有其他想法的小伙伴留言）。</p>
<h2 id="_3-解决" tabindex="-1"><a class="header-anchor" href="#_3-解决"><span>3 解决</span></a></h2>
<p>最后是通过在pycharm中加载<strong>虚拟环境的解释器</strong>才成功加载整个虚拟环境</p>
<p>这里点击右下方解释器，点击<strong>添加新的解释器</strong>，接着进入第一个虚拟环境，而不是第二个conda环境</p>
<figure><img src="@source/blogs/1_工具与框架/pycharm加载不了conda虚拟环境/assert/c9efc112feab456c84a2915e7254c572.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>再点击<strong>现有</strong>，最后选择你需要加载虚拟环境的python.exe文件加载，这个python解释器一般存储在你创建的虚拟环境中，可以借鉴我下方图例来寻找相关解释器。</p>
<figure><img src="@source/blogs/1_工具与框架/pycharm加载不了conda虚拟环境/assert/d2e3073ce9f3456282a4edb7adee0ace.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>可以看到最后显示也是加载成功</p>
<figure><img src="@source/blogs/1_工具与框架/pycharm加载不了conda虚拟环境/assert/211d73d8db5849d5946b50487ed32a9a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


