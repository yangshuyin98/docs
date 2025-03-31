import{_ as n,c as a,o as t,ag as o}from"./chunks/framework.oP1PDRBo.js";const h=JSON.parse('{"title":"OpenAI API格式详解-Chat Completions","description":"","frontmatter":{},"headers":[],"relativePath":"ollama/vllm/OpenAI API格式详解.md","filePath":"ollama/vllm/OpenAI API格式详解.md","lastUpdated":1743405079000}'),p={name:"ollama/vllm/OpenAI API格式详解.md"};function e(l,s,i,u,c,q){return t(),a("div",null,s[0]||(s[0]=[o(`<h1 id="openai-api格式详解-chat-completions" tabindex="-1">OpenAI API格式详解-Chat Completions <a class="header-anchor" href="#openai-api格式详解-chat-completions" aria-label="Permalink to &quot;OpenAI API格式详解-Chat Completions&quot;">​</a></h1><p>在使用兼容OpenAI的API请求模型来完成对话，首先需要指定大模型服务的 <a href="https://zhida.zhihu.com/search?content_id=241983112&amp;content_type=Article&amp;match_order=1&amp;q=BASE_URL&amp;zhida_source=entity" target="_blank" rel="noreferrer">BASE_URL</a> 和 <a href="https://zhida.zhihu.com/search?content_id=241983112&amp;content_type=Article&amp;match_order=1&amp;q=OPENAI_API_KEY&amp;zhida_source=entity" target="_blank" rel="noreferrer">OPENAI_API_KEY</a>，其次是构建request请求体。一个基本的请求/响应的例子：</p><ul><li>request</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl http://localhost:8000/v1/completions  \\  </span></span>
<span class="line"><span>  -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>  -H &quot;api_key: EMPTY&quot; \\        </span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ&quot;,</span></span>
<span class="line"><span>    &quot;messages&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;system&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: &quot;You are a helpful assistant.&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: &quot;Hello!&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><ul><li>response</li></ul><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;chatcmpl-123&quot;,</span></span>
<span class="line"><span>  &quot;object&quot;: &quot;chat.completion&quot;,</span></span>
<span class="line"><span>  &quot;created&quot;: 1677652288,</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;gpt-3.5-turbo-0125&quot;,</span></span>
<span class="line"><span>  &quot;system_fingerprint&quot;: &quot;fp_44709d6fcb&quot;,</span></span>
<span class="line"><span>  &quot;choices&quot;: [{</span></span>
<span class="line"><span>    &quot;index&quot;: 0,</span></span>
<span class="line"><span>    &quot;message&quot;: {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;assistant&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;\\n\\nHello there, how may I assist you today?&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;logprobs&quot;: null,</span></span>
<span class="line"><span>    &quot;finish_reason&quot;: &quot;stop&quot;</span></span>
<span class="line"><span>  }],</span></span>
<span class="line"><span>  &quot;usage&quot;: {</span></span>
<span class="line"><span>    &quot;prompt_tokens&quot;: 9,</span></span>
<span class="line"><span>    &quot;completion_tokens&quot;: 12,</span></span>
<span class="line"><span>    &quot;total_tokens&quot;: 21</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_1-request-body" tabindex="-1">1. request body <a class="header-anchor" href="#_1-request-body" aria-label="Permalink to &quot;1. request body&quot;">​</a></h2><p>这里介绍一下<a href="https://zhida.zhihu.com/search?content_id=241983112&amp;content_type=Article&amp;match_order=1&amp;q=OpenAI+API&amp;zhida_source=entity" target="_blank" rel="noreferrer">OpenAI API</a>请求体中必须包含或者说非常重要的几个 JSON 字段</p><h3 id="_1-1-model" tabindex="-1">1.1 model <a class="header-anchor" href="#_1-1-model" aria-label="Permalink to &quot;1.1 model&quot;">​</a></h3><p><strong>必需</strong>提供的string类型的模型ID</p><h3 id="_1-2-messages" tabindex="-1">1.2 messages <a class="header-anchor" href="#_1-2-messages" aria-label="Permalink to &quot;1.2 messages&quot;">​</a></h3><p><strong>必须</strong>提供的array类型的消息列表，包含从头到尾的对话历史</p><h3 id="_1-2-1-system-message" tabindex="-1">1.2.1 System message <a class="header-anchor" href="#_1-2-1-system-message" aria-label="Permalink to &quot;1.2.1 System message&quot;">​</a></h3><p>一个完整的system message要是一个json对象，包含以下字段：</p><ul><li><strong>content</strong>*：*<strong>必须</strong>提供的string类型，表示system的消息内容</li><li><strong>role：必须</strong>提供的string类型，表示消息作者的角色，对于system message应该是&quot;system&quot;</li><li>name：可选的string类型，表示对话参与者的名称</li></ul><h3 id="_1-2-2-user-message" tabindex="-1">1.2.2 User message <a class="header-anchor" href="#_1-2-2-user-message" aria-label="Permalink to &quot;1.2.2 User message&quot;">​</a></h3><p>一个完整的User message是一个json对象，包含以下字段：</p><ul><li><p><strong>content</strong>*：*<strong>必须</strong>提供的string或array类型，二选一，表示user的消息内容</p></li><li><ul><li><p>为string类型时，表示消息的文本内容</p></li><li><p>为array类型时，一般用于调用多模态模型，用来包含多个内容部分的数组，一般是一个文本内容的json对象和一个或多个图片内容的json对象。仅当使用 gpt-4-visual-preview 这样的多模态模型时才支持图像输入。具体字段如下：</p></li><li><ul><li><p>文本内容部分，是一个json对象：</p></li><li><ul><li>type：必须提供的string类型，表示内容部分的类型，一般是“text”</li><li>text：必须提供的string类型，文字内容</li></ul></li><li><p>图片内容部分，是一个json对象：</p></li><li><ul><li><p>type：必须提供的string类型，表示内容部分的类型，一般是&quot;image_url&quot;</p></li><li><p>image_url：必须提供的json对象类型，字段有：</p></li><li><ul><li>url：必须提供的string类型，图像的 URL 或 ***Base64 编码***的图像数据</li><li>detail：可选的string类型，一般默认是“auto”</li></ul></li></ul></li></ul></li></ul></li><li><p><strong>role：必须</strong>提供的string类型，表示消息作者的角色，对于user message应该是&quot;user&quot;</p></li><li><p>name：可选的string类型，表示对话参与者的名称</p></li></ul><p>这里举一个请求多模态时，包含图像信息的消息：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl https://api.openai.com/v1/chat/completions \\</span></span>
<span class="line"><span>  -H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>  -H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\</span></span>
<span class="line"><span>  -d &#39;{</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;gpt-4-turbo&quot;,</span></span>
<span class="line"><span>    &quot;messages&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span>            &quot;text&quot;: &quot;What&#39;\\&#39;&#39;s in this image?&quot;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;image_url&quot;,</span></span>
<span class="line"><span>            &quot;image_url&quot;: {</span></span>
<span class="line"><span>              &quot;url&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;max_tokens&quot;: 300</span></span>
<span class="line"><span>  }&#39;</span></span></code></pre></div><h3 id="_1-2-3-assistant-message" tabindex="-1">1.2.3 Assistant message <a class="header-anchor" href="#_1-2-3-assistant-message" aria-label="Permalink to &quot;1.2.3 Assistant message&quot;">​</a></h3><p>一个完整的Assistant message是一个json对象，包含以下字段：</p><ul><li><p><strong>content</strong>：必须提供(指定 <em><a href="https://zhida.zhihu.com/search?content_id=241983112&amp;content_type=Article&amp;match_order=1&amp;q=tool_calls&amp;zhida_source=entity" target="_blank" rel="noreferrer">tool_calls</a></em> 或 <em>function_call</em>时除外)的string类型，表示助手消息的内容</p></li><li><p><strong>role：必须</strong>提供的string类型，表示消息作者的角色，对于assistant message应该是&quot;assistant&quot;</p></li><li><p>name：可选的string类型，表示对话参与者的名称</p></li><li><p>tool_calls：可选的array类型，大模型生成的工具调用，例如函数调用。tool_calls数组的每个元素是一个json对象，代表一个函数调用，包含的字段有：</p></li><li><ul><li><p>id：必须提供的string类型，表示函数调用的id</p></li><li><p>type：必须提供的string类型，表示工具调用的类型。目前仅支持“function”类型</p></li><li><p>function：必须提供的string类型，表示模型针对工具调用为用户生成的函数说明，即模型在特定任务和场景下下，在用户提供的函数中，会推断出应该使用哪一个函数，以及函数的参数应该是什么。所以包括的字段有：</p></li><li><ul><li>name：必须提供的string类型，要调用的函数的名称</li><li>arguments：必须提供的string类型，表示调用函数所用的参数，由模型以 JSON 格式生成(如：&quot;{\\n&quot;location&quot;: &quot;Boston, MA&quot;\\n}&quot;)。但是请注意，模型并不总是生成有效的参数，并且可能会产生未由函数定义的参数。在调用函数之前最好验证参数的准确性。</li></ul></li></ul></li><li><p>function_call，已弃用并由上面的 <strong>tool_calls</strong> 取代</p></li></ul><h3 id="_1-2-5-tool-message" tabindex="-1">1.2.5 Tool message <a class="header-anchor" href="#_1-2-5-tool-message" aria-label="Permalink to &quot;1.2.5 Tool message&quot;">​</a></h3><p>一个完整的Tool message是一个json对象。他的用处是：在用户根据assistant的tool_calls内容调用了某个函数后，用户可能还需要再把函数调用结果反馈给大模型，让大模型根据函数调用结果给出最终的总结性的答复。tool message消息字段有：</p><ul><li><strong>content</strong>：必须提供的string类型，表示工具消息的内容，一般是把函数调用的结果描述在这里</li><li><strong>role：必须</strong>提供的string类型，表示消息作者的角色，对于tool message应该是&quot;tool&quot;</li><li><strong>tool_call_id</strong>：<strong>必须</strong>提供的string类型，表示本次消息是对哪个函数调用的结果反馈，应该与 assistant message-&gt;tool_calls-&gt;id 对应</li></ul><h3 id="_1-2-6-function-message" tabindex="-1">1.2.6 Function message <a class="header-anchor" href="#_1-2-6-function-message" aria-label="Permalink to &quot;1.2.6 Function message&quot;">​</a></h3><p>已弃用并由上面的 tool message取代</p><h3 id="_1-3-tools" tabindex="-1">1.3 tools <a class="header-anchor" href="#_1-3-tools" aria-label="Permalink to &quot;1.3 tools&quot;">​</a></h3><p>用户可选的一个字段，时array类型，表示可供模型选择的一个工具列表。目前，仅支持函数function作为工具。列表中最多支持 128 个tool。列表中每个tool包含的字段有：</p><ul><li><p>type：必须提供的string类型，工具的类型。目前仅支持函数“function”</p></li><li><p>function：必须提供的json对象类型，表示函数的一些描述信息，包括：</p></li><li><ul><li>description：可选的string类型，是函数功能的描述，模型使用它来选择何时以及如何调用该函数</li><li>name：<strong>必须</strong>提供的string类型，是函数的名称。必须是 a-z、A-Z、0-9，或包含下划线和破折号，最大长度为 64</li><li>parameters：可选的json对象类型，表示函数接受的参数，描述为 JSON Schema 对象。不包含parameters字段是，代表定义了一个带有空参数列表的函数</li></ul></li></ul><h3 id="_1-4-tool-choice" tabindex="-1">1.4 tool_choice <a class="header-anchor" href="#_1-4-tool-choice" aria-label="Permalink to &quot;1.4 tool_choice&quot;">​</a></h3><p>可选的string或json对象类型，可以控制模型调用哪个函数（如果有）。</p><ul><li>&quot;none&quot; 表示模型不会调用函数而是生成消息。 &quot;auto&quot; 意味着模型可以在生成消息或调用函数之间进行选择。当不存在任何函数时，“none” 是默认值。如果存在函数，则 “auto” 是默认值。</li><li>通过设置tool_choice的值为 {&quot;type&quot;: &quot;function&quot;, &quot;function&quot;: {&quot;name&quot;: &quot;my_function&quot;}} 指定特定函数来强制模型调用该函数。</li></ul><p>工具调用，在构建agent-like这类智能体时，非常的有用，他可以打破模型本身的知识边界。这里举一个大模型使用工具的例子，场景为：用户问某个地方的天气怎么样</p><p>===&gt;用户请求：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl https://api.openai.com/v1/chat/completions \\</span></span>
<span class="line"><span>-H &quot;Content-Type: application/json&quot; \\</span></span>
<span class="line"><span>-H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \\</span></span>
<span class="line"><span>-d &#39;{</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;gpt-4-turbo&quot;,</span></span>
<span class="line"><span>  &quot;messages&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;What&#39;\\&#39;&#39;s the weather like in Boston today?&quot;     &lt;==用户的问题</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;tools&quot;: [                   &lt;===用户提供工具集让模型来选择使用哪个可以解决用户的问题</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;function&quot;,</span></span>
<span class="line"><span>      &quot;function&quot;: {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;get_current_weather&quot;,</span></span>
<span class="line"><span>        &quot;description&quot;: &quot;Get the current weather in a given location&quot;,</span></span>
<span class="line"><span>        &quot;parameters&quot;: {</span></span>
<span class="line"><span>          &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>          &quot;properties&quot;: {</span></span>
<span class="line"><span>            &quot;location&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>              &quot;description&quot;: &quot;The city and state, e.g. San Francisco, CA&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;unit&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>              &quot;enum&quot;: [&quot;celsius&quot;, &quot;fahrenheit&quot;]</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          &quot;required&quot;: [&quot;location&quot;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;tool_choice&quot;: &quot;auto&quot;</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>===&gt;大模型回答：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;chatcmpl-abc123&quot;,</span></span>
<span class="line"><span>  &quot;object&quot;: &quot;chat.completion&quot;,</span></span>
<span class="line"><span>  &quot;created&quot;: 1699896916,</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;gpt-3.5-turbo-0125&quot;,</span></span>
<span class="line"><span>  &quot;choices&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;index&quot;: 0,</span></span>
<span class="line"><span>      &quot;message&quot;: {</span></span>
<span class="line"><span>        &quot;role&quot;: &quot;assistant&quot;,</span></span>
<span class="line"><span>        &quot;content&quot;: null,</span></span>
<span class="line"><span>        &quot;tool_calls&quot;: [                       ===&gt;大模型根据用户的问题和用户提供的工具集返回了可能有用的函数</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            &quot;id&quot;: &quot;call_abc123&quot;,</span></span>
<span class="line"><span>            &quot;type&quot;: &quot;function&quot;,</span></span>
<span class="line"><span>            &quot;function&quot;: {</span></span>
<span class="line"><span>              &quot;name&quot;: &quot;get_current_weather&quot;,  ===&gt;用户可以在调用了该函数后在下一轮对话把该函数调用结果反馈给大模型，然后就可以得到一个最终的答复</span></span>
<span class="line"><span>              &quot;arguments&quot;: &quot;{\\n\\&quot;location\\&quot;: \\&quot;Boston, MA\\&quot;\\n}&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;logprobs&quot;: null,</span></span>
<span class="line"><span>      &quot;finish_reason&quot;: &quot;tool_calls&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;usage&quot;: {</span></span>
<span class="line"><span>    &quot;prompt_tokens&quot;: 82,</span></span>
<span class="line"><span>    &quot;completion_tokens&quot;: 17,</span></span>
<span class="line"><span>    &quot;total_tokens&quot;: 99</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_1-5-stream" tabindex="-1">1.5 stream <a class="header-anchor" href="#_1-5-stream" aria-label="Permalink to &quot;1.5 stream&quot;">​</a></h3><p>可选的bool值，如果设置了true，将会流式的返回消息，就像在 ChatGPT 中一样。token将在可用时作为data-only的SSE(<a href="https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events%23Event_stream_format" target="_blank" rel="noreferrer">server-sent events</a>)事件发送给用户，http的chunk流由 data: [DONE] 消息终止。这一点常用于实现实时聊天agent，以快速响应用户。</p><h2 id="_2-response-body" tabindex="-1">2. response body <a class="header-anchor" href="#_2-response-body" aria-label="Permalink to &quot;2. response body&quot;">​</a></h2><p>这里介绍一下调用OpenAI API接口后，API返回的response中必须包含或者说非常重要的几个 JSON 字段。</p><h3 id="_2-1-chat-completion-object" tabindex="-1">2.1 chat completion object <a class="header-anchor" href="#_2-1-chat-completion-object" aria-label="Permalink to &quot;2.1 chat completion object&quot;">​</a></h3><p>首先是，非流式响应下的完成消息格式</p><h3 id="_2-1-1-id" tabindex="-1">2.1.1 id <a class="header-anchor" href="#_2-1-1-id" aria-label="Permalink to &quot;2.1.1 id&quot;">​</a></h3><p>聊天的唯一标识符</p><h3 id="_2-1-2-choices" tabindex="-1">2.1.2 choices <a class="header-anchor" href="#_2-1-2-choices" aria-label="Permalink to &quot;2.1.2 choices&quot;">​</a></h3><p>是一个包含一个或多个聊天响应的列表。如果请求的参数 n 大于 1时(请求模型生成多个答复)，列表的元素将是多个。一般情况下 choices 只包含一个元素，每个元素是一个 JSON 对象，包含的字段有：</p><ul><li><p>index，整数类型，表示该元素在choices中的索引，一般是0</p></li><li><p>finish_reason，字符串类型，表示模型停止生成token的原因。“<strong>stop</strong>” 代表模型达到自然停止点或提供的停止符号、“length” 代表已达到请求中指定的最大token数、“content_filter” 代表内容被过滤了、“<strong>tool_calls</strong>” 代表模型要调用工具</p></li><li><p>message，json对象类型，表示模型生成的聊天消息，包含的字段有：</p></li><li><ul><li><p>content，字符串类型，消息的内容</p></li><li><p>role，字符串类型，此消息的作者角色，如assistant</p></li><li><p>tool_calls，array类型，表示模型生成的工具调用，例如函数调用。tool_calls数组的每个元素是一个json对象，代表一个函数调用，包含的字段有：</p></li><li><ul><li><p>id：必须提供的string类型，表示函数调用的id</p></li><li><p>type：必须提供的string类型，表示工具调用的类型。目前仅支持“function”类型</p></li><li><p>function：必须提供的string类型，表示模型针对工具调用为用户生成的函数说明，即模型在特定任务和场景下下，在用户提供的函数中，会推断出应该使用哪一个函数，以及函数的参数应该是什么。所以包括的字段有：</p></li><li><ul><li>name：必须提供的string类型，要调用的函数的名称</li><li>arguments：必须提供的string类型，表示调用函数所用的参数，由模型以 JSON 格式生成(如：&quot;{\\n&quot;location&quot;: &quot;Boston, MA&quot;\\n}&quot;)。但是请注意，模型并不总是生成有效的参数，并且可能会产生未由函数定义的参数。在调用函数之前最好验证参数的准确性。</li></ul></li></ul></li></ul></li></ul><h3 id="_2-1-3-created" tabindex="-1">2.1.3 created <a class="header-anchor" href="#_2-1-3-created" aria-label="Permalink to &quot;2.1.3 created&quot;">​</a></h3><p>创建聊天完成消息时的 Unix 时间戳（以秒为单位）</p><h3 id="_2-1-4-model" tabindex="-1">2.1.4 model <a class="header-anchor" href="#_2-1-4-model" aria-label="Permalink to &quot;2.1.4 model&quot;">​</a></h3><p>用于聊天完成的模型</p><h3 id="_2-1-5-system-fingerprint" tabindex="-1">2.1.5 system_fingerprint <a class="header-anchor" href="#_2-1-5-system-fingerprint" aria-label="Permalink to &quot;2.1.5 system_fingerprint&quot;">​</a></h3><h3 id="_2-1-6-object" tabindex="-1">2.1.6 object <a class="header-anchor" href="#_2-1-6-object" aria-label="Permalink to &quot;2.1.6 object&quot;">​</a></h3><h3 id="_2-1-7-usage" tabindex="-1">2.1.7 usage <a class="header-anchor" href="#_2-1-7-usage" aria-label="Permalink to &quot;2.1.7 usage&quot;">​</a></h3><p>完成请求的使用统计信息。是一个json对象，字段有：</p><ul><li>completion_tokens，模型生成的新token数</li><li>prompt_tokens，用户输入的prompt的token数</li><li>total_tokens，对话的总token数，prompt_tokens + completion_tokens</li></ul><p>一个 chat completion object 的例子：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;chatcmpl-123&quot;,</span></span>
<span class="line"><span>  &quot;object&quot;: &quot;chat.completion&quot;,</span></span>
<span class="line"><span>  &quot;created&quot;: 1677652288,</span></span>
<span class="line"><span>  &quot;model&quot;: &quot;gpt-3.5-turbo-0125&quot;,</span></span>
<span class="line"><span>  &quot;system_fingerprint&quot;: &quot;fp_44709d6fcb&quot;,</span></span>
<span class="line"><span>  &quot;choices&quot;: [{</span></span>
<span class="line"><span>    &quot;index&quot;: 0,</span></span>
<span class="line"><span>    &quot;message&quot;: {</span></span>
<span class="line"><span>      &quot;role&quot;: &quot;assistant&quot;,</span></span>
<span class="line"><span>      &quot;content&quot;: &quot;\\n\\nHello there, how may I assist you today?&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;logprobs&quot;: null,</span></span>
<span class="line"><span>    &quot;finish_reason&quot;: &quot;stop&quot;</span></span>
<span class="line"><span>  }],</span></span>
<span class="line"><span>  &quot;usage&quot;: {</span></span>
<span class="line"><span>    &quot;prompt_tokens&quot;: 9,</span></span>
<span class="line"><span>    &quot;completion_tokens&quot;: 12,</span></span>
<span class="line"><span>    &quot;total_tokens&quot;: 21</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-2-chat-completion-chunk-object" tabindex="-1">2.2 chat completion chunk object <a class="header-anchor" href="#_2-2-chat-completion-chunk-object" aria-label="Permalink to &quot;2.2 chat completion chunk object&quot;">​</a></h3><p>表示模型根据提供的输入返回的聊天响应的chunk流。与 chat completion object 唯一的不同是choices字段包含内容：</p><ul><li><p>delta：模型流式响应生成的聊天增量消息，比如第一个chunk流的消息内容是“Hel”，第二个chunk流的消息内容是“Hello ”，第三个chunk流的消息内容是“Hello wo”，第四个chunk流的消息内容是“Hello world!”。delta中的字段有：</p></li><li><ul><li>content，消息内容</li><li>tool_calls，同上</li><li>role，同上</li></ul></li></ul><p>一个 chat completion chunk object 的例子：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{&quot;id&quot;:&quot;chatcmpl-123&quot;,&quot;object&quot;:&quot;chat.completion.chunk&quot;,&quot;created&quot;:1694268190,&quot;model&quot;:&quot;gpt-3.5-turbo-0125&quot;, &quot;system_fingerprint&quot;: &quot;fp_44709d6fcb&quot;, &quot;choices&quot;:[{&quot;index&quot;:0,&quot;delta&quot;:{&quot;role&quot;:&quot;assistant&quot;,&quot;content&quot;:&quot;&quot;},&quot;logprobs&quot;:null,&quot;finish_reason&quot;:null}]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{&quot;id&quot;:&quot;chatcmpl-123&quot;,&quot;object&quot;:&quot;chat.completion.chunk&quot;,&quot;created&quot;:1694268190,&quot;model&quot;:&quot;gpt-3.5-turbo-0125&quot;, &quot;system_fingerprint&quot;: &quot;fp_44709d6fcb&quot;, &quot;choices&quot;:[{&quot;index&quot;:0,&quot;delta&quot;:{&quot;content&quot;:&quot;Hello&quot;},&quot;logprobs&quot;:null,&quot;finish_reason&quot;:null}]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>....</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{&quot;id&quot;:&quot;chatcmpl-123&quot;,&quot;object&quot;:&quot;chat.completion.chunk&quot;,&quot;created&quot;:1694268190,&quot;model&quot;:&quot;gpt-3.5-turbo-0125&quot;, &quot;system_fingerprint&quot;: &quot;fp_44709d6fcb&quot;, &quot;choices&quot;:[{&quot;index&quot;:0,&quot;delta&quot;:{},&quot;logprobs&quot;:null,&quot;finish_reason&quot;:&quot;stop&quot;}]}</span></span></code></pre></div>`,66)]))}const d=n(p,[["render",e]]);export{h as __pageData,d as default};
