<template><div><h2 id="_0-概要" tabindex="-1"><a class="header-anchor" href="#_0-概要"><span>0 概要</span></a></h2>
<p>本次主要介绍在 Windows 环境下运行 CUDA 代码的具体方法，并结合个人实践中遇到的问题进行讲解，希望能帮助大家顺利完成配置，避免常见错误。</p>
<h2 id="_1-环境配置" tabindex="-1"><a class="header-anchor" href="#_1-环境配置"><span>1 环境配置</span></a></h2>
<h3 id="_1-1-cuda安装" tabindex="-1"><a class="header-anchor" href="#_1-1-cuda安装"><span>1.1 cuda安装</span></a></h3>
<p>要想运行cuda，首先必须安装cuda，在这里有一个坑，就是后续运行代码的编辑器visual studio与cuda之间必须要兼容，否则会出很多问题，后续会讲到二者之间的配置兼容。</p>
<p><strong>确定cuda安装版本</strong>：命令行输入下述指令，右上角会出现CUDA Version，代表你可以下载的最大版本不得超过这个指标，比如我的是12.5，也即cuda安装版本不能超过这个版本</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>nvidia-smi</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/工具与框架/Windows CUDA教程：编写与运行CUDA代码/assert/b327aa862797487aa4109586a7ddecb4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>cuda下载链接：<a href="https://developer.nvidia.com/cuda-toolkit-archive" target="_blank" rel="noopener noreferrer">CUDA Toolkit Archive | NVIDIA Developer</a></p>
<p>条件允许的话，大家可以跟我一样下载cuda 12.4.0的版本，避免后续因为版本不兼容而导致配置出错</p>
<blockquote>
<p><strong>安装注意！</strong>：在自定义安装选项时，全部打勾即可，有些教程会说部分组件下载影响环境使用，亲测各版本，暂时没有影响</p>
</blockquote>
<p>安装是否成功鉴定，有下述输出即为成功</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>nvcc -V</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><figure><img src="@source/工具与框架/Windows CUDA教程：编写与运行CUDA代码/assert/3bb88085c20446b3911a7bdfa0a2399b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_1-2-visual-studio安装" tabindex="-1"><a class="header-anchor" href="#_1-2-visual-studio安装"><span>1.2 visual studio安装</span></a></h3>
<blockquote>
<p>疑问：这里有人会说直接用命令行运行cu文件是否可以，或者用dev、codeblock编辑器运行代码？</p>
<p>解答：在windows不行，即使安装好nvcc编译代码，但是这里还是需要cl工具，而这个工具只在visual studio中存在，本人测试过不用cl工具的情况下运行cu代码，一直无法运行。</p>
<p>（如有大神在无需安装vs的情况下运行cu文件，可在评论区告知我这个小白0.0）</p>
</blockquote>
<p>vs安装链接：<a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">适用于 Windows、Mac 和 Linux 的 Visual Studio 和 VS Code 下载</a></p>
<p>如果前面下载cuda12.4或以上版本，这里可下载vs的2022的版本，但是如果下载的是小于cuda12.4版本的，建议这里vs下载更小的版本，否则后续会出现版本不兼容，导致重新下载。</p>
<p>这里给大家一个作者的错误示例：作者cuda12.1的版本，无法适配vs2022，版本号 17.14.17</p>
<h2 id="_2-运行cuda" tabindex="-1"><a class="header-anchor" href="#_2-运行cuda"><span>2 运行cuda</span></a></h2>
<h3 id="_2-1-vs新建项目" tabindex="-1"><a class="header-anchor" href="#_2-1-vs新建项目"><span>2.1 vs新建项目</span></a></h3>
<p>新建项目---&gt;选择cuda12.4</p>
<blockquote>
<p>**未出现cuda：**如果这一步没有出现cuda的选项，说明你的cuda安装没有成功，主要原因是自己在前面安装cuda的自定义选项时，是否全部打勾（主要是visual studio这个工具必须要打勾），如没有，则需要卸载重装即可！</p>
</blockquote>
<figure><img src="@source/工具与框架/Windows CUDA教程：编写与运行CUDA代码/assert/6ad86e71fd9646b7a5f6851cbaf82a33.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_2-2-运行代码" tabindex="-1"><a class="header-anchor" href="#_2-2-运行代码"><span>2.2 运行代码</span></a></h3>
<p>创建好之后，会出现如下图所示的示例代码，这里是创建cuda生成的demo示例</p>
<figure><img src="@source/工具与框架/Windows CUDA教程：编写与运行CUDA代码/assert/618d121410344fbaadcf2cb547c33dea.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>然后点击上面运行的按钮即可，出现运行结果就证明环境安装成功！</p>
<figure><img src="@source/工具与框架/Windows CUDA教程：编写与运行CUDA代码/assert/ca17e5d71eb84b2785fa69ab9d671be4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>ps：如果第一次配置就成功的话，那就恭喜你了，因为作者配置了一下午，踩了很多坑才配置成功，希望对你有帮助！</p>
</div></template>


