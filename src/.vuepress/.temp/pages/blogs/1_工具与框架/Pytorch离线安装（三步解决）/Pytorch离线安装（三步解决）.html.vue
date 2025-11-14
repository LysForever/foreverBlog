<template><div><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0 引言</span></a></h2>
<p>pytorch作为模型训练所需要的框架，随着人工智能的发展，模型的训练被越来越多的人熟知并使用，而pytorch作为当下最流行的训练框架，自然而然被用的更多。然而此包的大小有2G多，正常的命令行安装由于是国外的服务器，一般是很难安装成功的。有时使用清华镜像也无法安装成功，而此时就能用最后一招“<strong>离线安装</strong>”几乎能保证百分百安装成功。</p>
<h2 id="_1-匹配版本" tabindex="-1"><a class="header-anchor" href="#_1-匹配版本"><span>1 匹配版本</span></a></h2>
<p>离线安装最麻烦的一点就是需要事先匹配好版本，pytorch库的下载需要匹配三个<strong>torch</strong>、<strong>torchaudio</strong>和<strong>torchvision</strong>的版本，当时，这里默认大家已经安装好<strong>cuda</strong>、<strong>cudann</strong>和<strong>python解释器</strong>，确定了这三个的版本就可以确定pytorch三个包的版本。</p>
<blockquote>
<p>这里为大家提供相应包和解释器的对应关系</p>
</blockquote>
<figure><img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/66e98e38cca146049ddb0e9ba4395bf7.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>在下方pytoch的官网可以直接查到对应的版本号，比如说我的python为3.7，cuda下载的是11.3的版本，那么就可以在这里CTRL+F查到这三个包对应的版本号</p>
<p>版本匹配网站：<a href="https://pytorch.org/get-started/previous-versions/" target="_blank" rel="noopener noreferrer">https://pytorch.org/get-started/previous-versions/</a></p>
<figure><img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/d90a047800b4442dae0af59b3b3e152a.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2-离线安装" tabindex="-1"><a class="header-anchor" href="#_2-离线安装"><span>2 离线安装</span></a></h2>
<p>下载网址：<a href="https://download.pytorch.org/whl/torch/" target="_blank" rel="noopener noreferrer">https://download.pytorch.org/whl/torch/</a></p>
<p>选择对应torch版本，必须是cu版本的，只有带<strong>cu</strong>才是cuda版本能进行gpu加速的，否则是cpu版本。<br>
<img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/e0de73ee84ac419b87779529c7fa5b6a.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>ps：这里可以要开外网才能快速下载，我关闭科学上网时发现下载速度很慢，如果开启，下载则很快，大概不到2min就能下载完成</p>
<p>下载完成之后就是一个whl文件</p>
<figure><img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/a1f3e60405b34347a804082f4703cd80.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>之后打开命令行进去该文件的文件夹，执行pip install &quot;文件名&quot;，注意，文件名需要加双引号，即可安装完成，</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>pip install "torch-1.12.1+cu113-cp37-cp37m-win_amd64.whl"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>我已经安装成功了，这是我再一次安装的结果</p>
<figure><img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/3c7e3fb7f0854c7fb67917aac3f70207.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3-验证安装" tabindex="-1"><a class="header-anchor" href="#_3-验证安装"><span>3 验证安装</span></a></h2>
<p>安装好之后还需要查看是否安装成功，先conda list查看包是否已存在，如果没有用conda，就用pip list查看。</p>
<p>这里可以看到，我的pytorch包已经存在，但是包在环境里面不代表就安装好，还需要再运行相关代码，才能完全确定包已经安装完成，并且相关环境都已适配。</p>
<figure><img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/a41de4b841c04aabbf079851e4ddef5d.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>接着再到python运行下述代码，这里查看cuda是否可用，以及是否能用gpu进行加速，如果能打印出相关配置，即为安装成功。</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-python"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> torch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 检查CUDA是否可用</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> torch.cuda.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">is_available</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">():</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"CUDA is available"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 输出CUDA版本</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(torch.version.cuda)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 输出GPU数量</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(torch.cuda.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">device_count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">())</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 输出当前GPU名称</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(torch.cuda.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get_device_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"CUDA is not available"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p>
<figure><img src="@source/blogs/1_工具与框架/Pytorch离线安装（三步解决）/assert/064aa7bcd0774690ba3867e4fcaf3645.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


