# OpenAI API格式详解-Chat Completions

在使用兼容OpenAI的API请求模型来完成对话，首先需要指定大模型服务的 [BASE_URL](https://zhida.zhihu.com/search?content_id=241983112&content_type=Article&match_order=1&q=BASE_URL&zhida_source=entity) 和 [OPENAI_API_KEY](https://zhida.zhihu.com/search?content_id=241983112&content_type=Article&match_order=1&q=OPENAI_API_KEY&zhida_source=entity)，其次是构建request请求体。一个基本的请求/响应的例子：

- request

```text
curl http://localhost:8000/v1/completions  \  
  -H "Content-Type: application/json" \
  -H "api_key: EMPTY" \        
  -d '{
    "model": "/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }'
```

- response

```text
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "gpt-3.5-turbo-0125",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\n\nHello there, how may I assist you today?",
    },
    "logprobs": null,
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

## 1. request body

这里介绍一下[OpenAI API](https://zhida.zhihu.com/search?content_id=241983112&content_type=Article&match_order=1&q=OpenAI+API&zhida_source=entity)请求体中必须包含或者说非常重要的几个 JSON 字段

### 1.1 model

**必需**提供的string类型的模型ID

### 1.2 messages

**必须**提供的array类型的消息列表，包含从头到尾的对话历史

### 1.2.1 System message

一个完整的system message要是一个json对象，包含以下字段：

- **content***：***必须**提供的string类型，表示system的消息内容
- **role：必须**提供的string类型，表示消息作者的角色，对于system message应该是"system"
- name：可选的string类型，表示对话参与者的名称

### 1.2.2 User message

一个完整的User message是一个json对象，包含以下字段：

- **content***：***必须**提供的string或array类型，二选一，表示user的消息内容

- - 为string类型时，表示消息的文本内容

  - 为array类型时，一般用于调用多模态模型，用来包含多个内容部分的数组，一般是一个文本内容的json对象和一个或多个图片内容的json对象。仅当使用 gpt-4-visual-preview 这样的多模态模型时才支持图像输入。具体字段如下：

  - - 文本内容部分，是一个json对象：

    - - type：必须提供的string类型，表示内容部分的类型，一般是“text”
      - text：必须提供的string类型，文字内容

    - 图片内容部分，是一个json对象：

    - - type：必须提供的string类型，表示内容部分的类型，一般是"image_url"

      - image_url：必须提供的json对象类型，字段有：

      - - url：必须提供的string类型，图像的 URL 或 ***Base64 编码\***的图像数据
        - detail：可选的string类型，一般默认是“auto”

- **role：必须**提供的string类型，表示消息作者的角色，对于user message应该是"user"

- name：可选的string类型，表示对话参与者的名称

这里举一个请求多模态时，包含图像信息的消息：

```text
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-4-turbo",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "What'\''s in this image?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
            }
          }
        ]
      }
    ],
    "max_tokens": 300
  }'
```

### 1.2.3 Assistant message

一个完整的Assistant message是一个json对象，包含以下字段：

- **content**：必须提供(指定 *[tool_calls](https://zhida.zhihu.com/search?content_id=241983112&content_type=Article&match_order=1&q=tool_calls&zhida_source=entity)* 或 *function_call*时除外)的string类型，表示助手消息的内容

- **role：必须**提供的string类型，表示消息作者的角色，对于assistant message应该是"assistant"

- name：可选的string类型，表示对话参与者的名称

- tool_calls：可选的array类型，大模型生成的工具调用，例如函数调用。tool_calls数组的每个元素是一个json对象，代表一个函数调用，包含的字段有：

- - id：必须提供的string类型，表示函数调用的id

  - type：必须提供的string类型，表示工具调用的类型。目前仅支持“function”类型

  - function：必须提供的string类型，表示模型针对工具调用为用户生成的函数说明，即模型在特定任务和场景下下，在用户提供的函数中，会推断出应该使用哪一个函数，以及函数的参数应该是什么。所以包括的字段有：

  - - name：必须提供的string类型，要调用的函数的名称
    - arguments：必须提供的string类型，表示调用函数所用的参数，由模型以 JSON 格式生成(如："{\n\"location\": \"Boston, MA\"\n}")。但是请注意，模型并不总是生成有效的参数，并且可能会产生未由函数定义的参数。在调用函数之前最好验证参数的准确性。

- function_call，已弃用并由上面的 **tool_calls** 取代

### 1.2.5 Tool message

一个完整的Tool message是一个json对象。他的用处是：在用户根据assistant的tool_calls内容调用了某个函数后，用户可能还需要再把函数调用结果反馈给大模型，让大模型根据函数调用结果给出最终的总结性的答复。tool message消息字段有：

- **content**：必须提供的string类型，表示工具消息的内容，一般是把函数调用的结果描述在这里
- **role：必须**提供的string类型，表示消息作者的角色，对于tool message应该是"tool"
- **tool_call_id**：**必须**提供的string类型，表示本次消息是对哪个函数调用的结果反馈，应该与 assistant message->tool_calls->id 对应

### 1.2.6 Function message

已弃用并由上面的 tool message取代

### 1.3 tools

用户可选的一个字段，时array类型，表示可供模型选择的一个工具列表。目前，仅支持函数function作为工具。列表中最多支持 128 个tool。列表中每个tool包含的字段有：

- type：必须提供的string类型，工具的类型。目前仅支持函数“function”

- function：必须提供的json对象类型，表示函数的一些描述信息，包括：

- - description：可选的string类型，是函数功能的描述，模型使用它来选择何时以及如何调用该函数
  - name：**必须**提供的string类型，是函数的名称。必须是 a-z、A-Z、0-9，或包含下划线和破折号，最大长度为 64
  - parameters：可选的json对象类型，表示函数接受的参数，描述为 JSON Schema 对象。不包含parameters字段是，代表定义了一个带有空参数列表的函数

### 1.4 tool_choice

可选的string或json对象类型，可以控制模型调用哪个函数（如果有）。

- "none" 表示模型不会调用函数而是生成消息。 "auto" 意味着模型可以在生成消息或调用函数之间进行选择。当不存在任何函数时，“none” 是默认值。如果存在函数，则 “auto” 是默认值。
- 通过设置tool_choice的值为 {"type": "function", "function": {"name": "my_function"}} 指定特定函数来强制模型调用该函数。

工具调用，在构建agent-like这类智能体时，非常的有用，他可以打破模型本身的知识边界。这里举一个大模型使用工具的例子，场景为：用户问某个地方的天气怎么样

===>用户请求：

```text
curl https://api.openai.com/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $OPENAI_API_KEY" \
-d '{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "What'\''s the weather like in Boston today?"     <==用户的问题
    }
  ],
  "tools": [                   <===用户提供工具集让模型来选择使用哪个可以解决用户的问题
    {
      "type": "function",
      "function": {
        "name": "get_current_weather",
        "description": "Get the current weather in a given location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The city and state, e.g. San Francisco, CA"
            },
            "unit": {
              "type": "string",
              "enum": ["celsius", "fahrenheit"]
            }
          },
          "required": ["location"]
        }
      }
    }
  ],
  "tool_choice": "auto"
}'
```

===>大模型回答：

```text
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1699896916,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [                       ===>大模型根据用户的问题和用户提供的工具集返回了可能有用的函数
          {
            "id": "call_abc123",
            "type": "function",
            "function": {
              "name": "get_current_weather",  ===>用户可以在调用了该函数后在下一轮对话把该函数调用结果反馈给大模型，然后就可以得到一个最终的答复
              "arguments": "{\n\"location\": \"Boston, MA\"\n}"
            }
          }
        ]
      },
      "logprobs": null,
      "finish_reason": "tool_calls"
    }
  ],
  "usage": {
    "prompt_tokens": 82,
    "completion_tokens": 17,
    "total_tokens": 99
  }
}
```

### 1.5 stream

可选的bool值，如果设置了true，将会流式的返回消息，就像在 ChatGPT 中一样。token将在可用时作为data-only的SSE([server-sent events](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events%23Event_stream_format))事件发送给用户，http的chunk流由 data: [DONE] 消息终止。这一点常用于实现实时聊天agent，以快速响应用户。

## 2. response body

这里介绍一下调用OpenAI API接口后，API返回的response中必须包含或者说非常重要的几个 JSON 字段。

### 2.1 chat completion object

首先是，非流式响应下的完成消息格式

### 2.1.1 id

聊天的唯一标识符

### 2.1.2 choices

是一个包含一个或多个聊天响应的列表。如果请求的参数 n 大于 1时(请求模型生成多个答复)，列表的元素将是多个。一般情况下 choices 只包含一个元素，每个元素是一个 JSON 对象，包含的字段有：

- index，整数类型，表示该元素在choices中的索引，一般是0

- finish_reason，字符串类型，表示模型停止生成token的原因。“**stop**” 代表模型达到自然停止点或提供的停止符号、“length” 代表已达到请求中指定的最大token数、“content_filter” 代表内容被过滤了、“**tool_calls**” 代表模型要调用工具

- message，json对象类型，表示模型生成的聊天消息，包含的字段有：

- - content，字符串类型，消息的内容

  - role，字符串类型，此消息的作者角色，如assistant

  - tool_calls，array类型，表示模型生成的工具调用，例如函数调用。tool_calls数组的每个元素是一个json对象，代表一个函数调用，包含的字段有：

  - - id：必须提供的string类型，表示函数调用的id

    - type：必须提供的string类型，表示工具调用的类型。目前仅支持“function”类型

    - function：必须提供的string类型，表示模型针对工具调用为用户生成的函数说明，即模型在特定任务和场景下下，在用户提供的函数中，会推断出应该使用哪一个函数，以及函数的参数应该是什么。所以包括的字段有：

    - - name：必须提供的string类型，要调用的函数的名称
      - arguments：必须提供的string类型，表示调用函数所用的参数，由模型以 JSON 格式生成(如："{\n\"location\": \"Boston, MA\"\n}")。但是请注意，模型并不总是生成有效的参数，并且可能会产生未由函数定义的参数。在调用函数之前最好验证参数的准确性。

### 2.1.3 created

创建聊天完成消息时的 Unix 时间戳（以秒为单位）

### 2.1.4 model

用于聊天完成的模型

### 2.1.5 system_fingerprint

### 2.1.6 object

### 2.1.7 usage

完成请求的使用统计信息。是一个json对象，字段有：

- completion_tokens，模型生成的新token数
- prompt_tokens，用户输入的prompt的token数
- total_tokens，对话的总token数，prompt_tokens + completion_tokens

一个 chat completion object 的例子：

```text
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "gpt-3.5-turbo-0125",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\n\nHello there, how may I assist you today?",
    },
    "logprobs": null,
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

### 2.2 chat completion chunk object

表示模型根据提供的输入返回的聊天响应的chunk流。与 chat completion object 唯一的不同是choices字段包含内容：

- delta：模型流式响应生成的聊天增量消息，比如第一个chunk流的消息内容是“Hel”，第二个chunk流的消息内容是“Hello ”，第三个chunk流的消息内容是“Hello wo”，第四个chunk流的消息内容是“Hello world!”。delta中的字段有：

- - content，消息内容
  - tool_calls，同上
  - role，同上

一个 chat completion chunk object 的例子：

```text
{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"role":"assistant","content":""},"logprobs":null,"finish_reason":null}]}

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"Hello"},"logprobs":null,"finish_reason":null}]}

....

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{},"logprobs":null,"finish_reason":"stop"}]}
```

