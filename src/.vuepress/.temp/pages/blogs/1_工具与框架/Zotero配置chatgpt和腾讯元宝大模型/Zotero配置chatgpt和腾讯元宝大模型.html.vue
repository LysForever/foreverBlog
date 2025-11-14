<template><div><h2 id="_0-引言" tabindex="-1"><a class="header-anchor" href="#_0-引言"><span>0 引言</span></a></h2>
<p>今天为大家介绍如何在zotero中配置大模型，其中包括系统中存在的一些大模型，如chatgpt、deepseek等，但还有一些大模型并不在系统的配置内，如腾讯元宝等。因为作为”白嫖客“，我们总是需要切换各类大模型来保证日常的使用，但是有一些大模型并不存在于系统内部，所以在这里以chatgpt（已内置）和腾讯元宝（未内置）的连接示例，为大家提供不同形式的连接方式。</p>
<h2 id="_1-插件下载" tabindex="-1"><a class="header-anchor" href="#_1-插件下载"><span>1 插件下载</span></a></h2>
<p>首先需要下载<code v-pre>Awesome GPT</code>，这里我是先将其下载到本地，再导入软件。</p>
<p>下载链接：<a href="https://zotero-chinese.com/plugins/" target="_blank" rel="noopener noreferrer">https://zotero-chinese.com/plugins/</a></p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/8203508aaf424f759794af603f1ee70b.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_2-文件导入" tabindex="-1"><a class="header-anchor" href="#_2-文件导入"><span>2 文件导入</span></a></h2>
<p>导入步骤：<strong>工具</strong>---&gt;<strong>插件</strong>---&gt;<strong>设置</strong>---&gt;<strong>install piugin from file</strong></p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/b4e2e4cf3c8946099603b90965e5bc43.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>导入后会出现<code v-pre>Awesome GPT</code>的标志</p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/ec6a9bb51e0b4b748e686947289ec8c8.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_3-大模型配置" tabindex="-1"><a class="header-anchor" href="#_3-大模型配置"><span>3 大模型配置</span></a></h2>
<blockquote>
<p>配置路径：<strong>编辑</strong>---&gt;<strong>设置</strong>---&gt;<strong>GPT</strong></p>
<p>后续配置主要包含两大类<strong>内置</strong>和<strong>未内置</strong>，一类是系统就已经存在的一些大模型，如chatgpt、deepseek、Gemini等，还一部分是系统中没有，但是用户想要使用的大模型，如腾讯元宝等。</p>
<p>后续大家想安装其他类的大模型，都可以仿照我的步骤进行！</p>
</blockquote>
<h3 id="_3-1-chatgpt-内置" tabindex="-1"><a class="header-anchor" href="#_3-1-chatgpt-内置"><span>3.1 chatgpt（内置）</span></a></h3>
<p>首先官网申请API-Key，并同时获取这个Secret Key</p>
<p>chatgpt申请链接：<a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">https://platform.openai.com/api-keys</a></p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/7f6edd58519b417fbcb5944ddb1690f4.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>再到Zotero中进行配置，配置路径：<strong>编辑</strong>---&gt;<strong>设置</strong>---&gt;<strong>GPT</strong></p>
<p>输入API-Key之后，可以选择需要的模型，这里默认GPT-3.5-turbo，如果你申请的API-Key更强，也可以选择其他模型</p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/3edce4a5e1eb409690082d0c23aa0559.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>接着测试配置是否成功，在首页按<code v-pre>ctrl+/</code>或者直接点击上方GPT的图像，会弹出一个聊天框，在这里输入<code v-pre>/report</code>可以查看当前的配置，也可以直接输入文字，测试是否配置成功</p>
<p>我这里显示余额不足，需要充值才能继续使用，但这也说明我已经配置成功，后续要继续使用，只需要在openai官网中，充值获取token即可</p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/fbbe796ecd4d4ba78fc2471e9723a857.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h3 id="_3-2-腾讯元宝-未内置" tabindex="-1"><a class="header-anchor" href="#_3-2-腾讯元宝-未内置"><span>3.2 腾讯元宝（未内置）</span></a></h3>
<p>面对上述<strong>余额不足</strong>的情况，最好的方式就是换一个大模型，但是知名的大模型免费的额度都很少，这时我们可以使用那些虽不知名或者用的人较少，但是免费额度较高的大模型进行配置使用。</p>
<p>对于所有大模型的配置原理都一样：<strong>找到api官网---&gt;申请api-key---&gt;再到系统上配置</strong></p>
<p>腾讯元宝api官网：<a href="https://console.cloud.tencent.com/hunyuan/api-key" target="_blank" rel="noopener noreferrer">API KEY管理 - 腾讯混元大模型 - 控制台</a></p>
<p>创建并获取api-key</p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/67a4772b48574e90ab05a1f82cbece26.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>需要配置以下四个部分：</p>
<ol>
<li>base_url修改未full_url</li>
<li>腾讯元宝大模型访问地址：<a href="https://api.hunyuan.cloud.tencent.com/v1/chat/completions" target="_blank" rel="noopener noreferrer">https://api.hunyuan.cloud.tencent.com/v1/chat/completions</a></li>
<li>输入自己的API-Key</li>
<li>选择腾讯元宝大模型的模型名称：<code v-pre>hunyuan-turbos-latest</code>（也可以选择其他模型）</li>
</ol>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/d5bfc6d4ae044a7496b64b0bd56bf4b9.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<p>接着继续在首页进行测试，可以看到输入&quot;hello&quot;后，能正常回复，表示配置成功</p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/c55fdc35569e45438d9b35649ab19ea6.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<h2 id="_4-gpt常见使用技巧" tabindex="-1"><a class="header-anchor" href="#_4-gpt常见使用技巧"><span>4 GPT常见使用技巧</span></a></h2>
<p>一般在Zotero中使用GPT，无非就是让其帮助我们分析当前论文，辅助我们快速、细致的了解论文的内容。</p>
<p>进入阅读文章，输入要问的问题，例如：“这篇论文的内容是什么，创新点有哪些”，接着选中下方<strong>AskPDF Full Text</strong>和<strong>AskPDF</strong>，大模型就会根据当前的论文进行回复了</p>
<p>例如：“这篇论文的内容是什么，创新点有哪些”，接着选中下方<strong>AskPDF Full Text</strong>和<strong>AskPDF</strong>，大模型就会根据当前的论文进行回复了</p>
<figure><img src="@source/blogs/1_工具与框架/Zotero配置chatgpt和腾讯元宝大模型/assert/29b281bc59c441b4817786dddaee9a13.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
</div></template>


