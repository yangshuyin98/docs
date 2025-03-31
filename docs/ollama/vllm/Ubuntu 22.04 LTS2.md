我们介绍了我们的第一代推理模型，DeepSeek-R1-Zero和DeepSeek-R1。DeepSeek-R1-Zero是一种通过大规模强化学习（RL）训练的模型，没有监督微调（SFT）作为初步步骤，在推理方面表现出卓越的性能。有了强化学习，DeepSeek-R1-Zero自然会出现许多强大而有趣的推理行为。然而，DeepSeek-R1-Zero遇到了无休止的重复、可读性差和语言混合等挑战。为了解决这些问题并进一步提高推理性能，我们引入了DeepSeek-R1，它在RL之前合并了冷启动数据。DeepSeek-R1在数学、代码和推理任务上实现了与OpenAI-o  1相当的性能。为了支持研究社区，我们拥有开源的DeepSeek-R1-Zero、DeepSeek-R1以及基于Llama和Qwen的从DeepSeek-R1中提炼出来的六个密集模型。DeepSeek-R1-Distill-Qwen-32 B在各种基准测试中的表现优于OpenAI-o 1-mini，为密集模型实现了新的最先进的结果。

**后训练：基于基础模型的大规模强化学习**

我们直接将强化学习（RL）应用于基础模型，而不依赖于监督微调（SFT）作为初步步骤。该方法允许模型探索解决复杂问题的思路链（CoT），从而开发出DeepSeek-R1-Zero。DeepSeek-R1-Zero展示了自我验证、反射和生成长CoT等功能，标志着研究界的一个重要里程碑。值得注意的是，这是第一个验证LLM的推理能力可以纯粹通过RL来激励，而不需要SFT的开放式研究。这一突破为该领域的未来发展铺平了道路。

我们介绍了我们开发DeepSeek-R1的管道。该流水线包括两个RL阶段，旨在发现改进的推理模式并与人类偏好保持一致，以及两个SFT阶段，用作模型的推理和非推理能力的种子。我们相信，这条管道将通过创造更好的模式而使行业受益。

**蒸馏**Distillation**：更小的模型也可以是强大的**

我们证明了大模型的推理模式可以被提炼成小模型，从而比通过RL在小模型上发现的推理模式具有更好的性能。开源的DeepSeek-R1及其API将使研究社区在未来提取更好的更小的模型。

使用DeepSeek-R1生成的推理数据，我们微调了几个在研究界广泛使用的密集模型。评估结果表明，提取的较小密度模型在基准测试中表现出色。我们向社区开放了基于Qwen2.5和Llama 3系列的1.5B、7 B、8B、14 B、32 B和70 B检查点的源代码。

DeepSeek-R1-Zero DeepSeek-R1基于DeepSeek-V3-Base进行训练。有关模型架构的更多详细信息，请参阅[DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3)存储库。

DeepSeek-R1-Distill模型基于开源模型，使用DeepSeek-R1生成的样本进行了微调。我们稍微更改了它们的配置和标记化器。请使用我们的设置来运行这些模型。

对于我们的所有模型，最大生成长度设置为32，768个令牌。对于需要采样的基准测试，我们使用0.60.60.6的温度，0.950.950.95的top-p值，并为每个查询生成64个响应以估计pass@1。

你可以在DeepSeek的官方网站上与DeepSeek-R1聊天：，并打开按钮“DeepThink”

我们还在DeepSeek平台上提供OpenAI兼容的API



## 6.如何在本地运行

DeepSeek-R1-Distill模型可以以与Qwen或Llama模型相同的方式使用。

例如，您可以使用vLLM轻松启动服务：

```
vllm serve deepseek-ai/DeepSeek-R1-Distill-Qwen-32B 
--tensor-parallel-size 2 
--max-model-len 32768 
--enforce-eager

```

### 使用建议

**我们建议在使用DeepSeek-R1系列模型时遵守以下配置，包括基准测试，以实现预期性能：**

将温度设置在0.5-0.7（推荐0.6）的范围内，以防止无休止的重复或不连贯的输出。

**避免添加系统提示符;所有指令都应包含在用户提示符中。**

对于数学问题，建议在提示中包含一个指令，例如：“请逐步推理，并将您的最终答案放在\box{}中。”

在评估模型性能时，建议进行多次测试并对结果进行平均。



此外，我们观察到DeepSeek-R1系列模型在响应某些查询时倾向于绕过思维模式（即输出“<思考>\n\n</思考>”），这可能会对模型的性能产生不利影响。为了确保模型进行彻底的推理，我们建议强制模型在每个输出的开头使用“<思考>\n”来启动其响应

#### 1.**确认Windows的NVIDIA驱动已安装**

- 在Windows中打开 **NVIDIA控制面板** → 左下角 **系统信息** → 检查驱动版本是否为 **CUDA 12.1+**（需支持WSL GPU）。
- 若未安装，前往[NVIDIA官网](https://www.nvidia.com/Download/index.aspx)下载最新驱动。







####  **配置WSL环境**

- **启用WSL**：在PowerShell（管理员模式）中执行：

```powershell
wsl --install -d Ubuntu-22.04
```

**安装NVIDIA驱动**：确保Windows已安装适配的NVIDIA驱动（如CUDA 12.1+）

```
正在安装: Ubuntu 22.04 LTS
无法从 Microsoft Store 安装 Ubuntu-22.04: 与服务器的连接意外终止
正在尝试 Web 下载...
正在下载: Ubuntu 22.04 LTS
正在安装: Ubuntu 22.04 LTS
已安装 Ubuntu 22.04 LTS。
正在启动 Ubuntu 22.04 LTS...
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
Enter new UNIX username: modern
^[[B^[[B^[[B^[[A^[[A
New password:
Retype new password:
passwd: password updated successfully
123
Installation successful!

To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.167.4-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage


This message is shown once a day. To disable it please create the
/home/modern/.hushlogin file.
```



检查已安装的发行版列表：

```powershell
wsl -l -v  # 列出所有发行版及其状态（需为 "Running" 或 "Stopped"）
```

若列表为空，需重新安装发行版（从 Microsoft Store 下载）。

```
  NAME            STATE           VERSION
* Ubuntu-22.04    Running         2
```

在 WSL 中直接访问 Windows 文件：

```
cd /mnt/c/Users/你的用户名  # 例如进入 C 盘用户目录
```

彻底卸载命令：

```
wsl --unregister Ubuntu-22.04
```



进入WSL

```
WSL
```

**在WSL中安装CUDA Toolkit**

```bash
# 进入WSL的Ubuntu终端，依次执行：
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-wsl-ubuntu.pin
sudo mv cuda-wsl-ubuntu.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/12.1.1/local_installers/cuda-repo-wsl-ubuntu-12-1-local_12.1.1-1_amd64.deb
sudo dpkg -i cuda-repo-wsl-ubuntu-12-1-local_12.1.1-1_amd64.deb
sudo cp /var/cuda-repo-wsl-ubuntu-12-1-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt update
sudo apt install cuda-toolkit-12-1
```

**在 WSL2 中安装CUDA**‌

```bash
# 安装 CUDA（需先安装 Windows 版 NVIDIA 驱动）
wget https://developer.download.nvidia.com/compute/cuda/repos/wsl-ubuntu/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt update
sudo apt install -y cuda-toolkit-12-1
```

## 2.安装Python与依赖**

在WSL中安装Python 3.8+，并配置虚拟环境：

**更新系统包列表** 进入 WSL 终端，执行：

```
sudo apt update && sudo apt upgrade -y      #确保系统的软件包列表是最新的
```

##### **通过系统包管理器安装（推荐 Ubuntu 20.04 用户）**

```bash
sudo apt install -y python3-pip build-essential
```

```
sudo apt install ca-certificates apt-transport-https software-properties-common lsb-release -y
```



**更新软件包列表并安装Python 3.11**：

```bash
sudo apt update
sudo apt install python3.11
```

**验证安装**：

```
python3.11 --version
```

Python 3.11.0rc1



### 安装包管理工具pip

pip是Python的包管理工具，用于安装和管理Python包。可以使用以下命令安装pip：

```
sudo apt install python3.10-venv  # Ubuntu 22.04 默认 Python 版本为 3.10
sudo apt install python3-pip -y
```

sudo apt install python3.8 python3-pip

安装完成后，可以通过以下命令验证pip是否安装成功：

```
pip3 --version
```

pip 22.0.2 from /usr/lib/python3/dist-packages/pip (python 3.10)

#### **三、配置虚拟环境**

**创建虚拟环境**：

```
python3 -m venv venv   # 在项目目录中执行
```

**激活环境**：

```
source venv/bin/activate  # 激活虚拟环境
```

提示符变为 `(.venv) $` 表示激活成功。

`提示符变为(venv) modern@DESKTOP-GQCI0GM:~$`表示激活成功。

**安装依赖**：

```
pip install -r requirements.txt
```

**pip 安装缓慢**

更换国内镜像源：

```
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

**验证 CUDA 支持**：

```
nvidia-smi  # 应显示 GPU 状态
```



### **步骤 3：安装vLLM和模型依赖**

**安装vLLM（需CUDA 12.1）**

```
# Install vLLM from pip:
pip install vllm -i https://pypi.tuna.tsinghua.edu.cn/simple  # 使用清华镜像加速
```

#### **方法3：安装Flash Attention优化**

```
# 在WSL虚拟环境中执行
pip uninstall -y vllm
pip install vllm[flash-attn]  # 安装含Flash Attention的版本
```

**可选：安装Flash Attention优化**

```
pip install flash-attn --no-build-isolation  # 提升推理速度（需GPU支持）
```

### **步骤 4：下载DeepSeek-R1 14B模型**

vLLM支持多种主流的大模型格式，包括但不限于以下这些：

- **Aquila**
- **Baichuan**
- **BLOOM**
- **Falcon**
- **GPT-2**
- **GPT BigCode**
- **GPT-J**
- **GPT-NeoX**
- **InternLM**
- **LLaMA**
- **Mistral**
- **MPT**
- **OPT**
- **Qwen**

完整的支持模型列表可以查看vLLM的官方文档

```
pip install modelscope
export MODEL_DIR=/home/modern/models  # 替换为你的模型存储路径  # 确保此路径存在且可写
modelscope download --model deepseek-ai/DeepSeek-R1-Distill-Qwen-14B --local_dir $MODEL_DIR
modelscope download --model deepseek-ai/DeepSeek-R1-Distill-Qwen-7B --cache_dir $MODEL_DIR
modelscope download --model deepseek-ai/DeepSeek-R1-Distill-Qwen-7B --cache_dir /home/modern/models
modelscope download --model Qwen/Qwen2.5-Coder-7B-Instruct-AWQ --cache_dir /home/modern/models
#模型文件将被下载在'cache_dir/Qwen/Qwen2-7b'
模型文件将被下载在'./local_dir'
```

下载单个文件到指定本地文件夹（以下载README.md到当前路径下“dir”目录为例）

```
modelscope download --model deepseek-ai/DeepSeek-R1-Distill-Qwen-7B README.md --local_dir ./dir
```

无论是使用命令行还是ModelScope SDK，默认模型会下载到`~/.cache/modelscope/hub`目录下。如果需要修改cache目录，可以手动指定环境变量：MODELSCOPE_CACHE，指定后，模型将下载到该环境变量指定的目录中。

若下载慢，可使用Hugging Face镜像（修改`~/.bashrc`）：

```
export HF_ENDPOINT=https://hf-mirror.com
```

在你的用户主目录下创建一个`models`文件夹。在使用vLLM加载模型时，只需要指定模型所在目录的路径即可。例如，如果你的模型存放在`/home/your_username/models/llama-7b`目录下，那么在代码中可以这样指定模型路径

```
clear           #清屏
```



### **步骤 5：启动vLLM推理服务**

**启动服务（根据显存调整参数）**（关键参数说明）

--max-model-len 32768 

- 支持长达32k tokens的上下文（如长文档分析、代码生成）
- 显存消耗警告：32k序列的KV缓存需要约20GB显存（单卡），需双卡并行或使用A100 80GB。
- 必须处理**超过2k的极长文本**，且拥有双A100/A800。
- 显存不足（如单卡16GB）但需要勉强运行，此时需降低`--max-model-len`。

--max-model-len=2048

- 适合对话、摘要等常规任务（上下文≤2k）。
- **显存优化**：显存占用降低至8-10GB，轻松适配消费级显卡。

依赖vLLM默认策略（通常0.9），但在极端长上下文下可能仍需手动调整。

--enforce-eager禁用CUDA Graph加速，可能降低推理速度（10-20%），仅建议在**调试内存错误**时启用。

 --port=8102自定义端口便于多服务隔离，无性能影响。



```
# Load and run the model:
//Qwen2.5-Coder-7B-Instruct-AWQ
vllm serve  /home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ  --tensor-parallel-size 1 --max-model-len 4096  --gpu-memory-utilization 0.9  --quantization awq --port=8102   --trust-remote-code  # 必须添加 


  --trust-remote-code  # 必须添加 



(1) 启用批处理加速
  --enable-batch \
  --max-num-batched-tokens 4096

  --tensor-parallel-size 1 \                # GPU 并行数（根据 GPU 数量调整）
  --max-model-len 4096 \                    # 最大上下文长度
  --gpu-memory-utilization 0.9              # GPU 显存利用率
  --quantization awq \                      # 指定 AWQ 量化
  --trust-remote-code  # 必须添加 
```



```
#tensor-parallel-size 2，这意味着它将模型在两张GPU上进行张量并行处理。
# 假设模型路径为 /home/modern/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
# 提高显存利用率至合理范围（0.7-0.9）
CUDA_VISIBLE_DEVICES=0 vllm serve /home/modern/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B   
--port=8102   
--max-model-len=1024
--max-model-len=2048
#较大的max-model-len可以处理更长的上下文，但也会增加显存的占用。
#需要处理的上下文长度：如果必须处理长达32k tokens的文本，那么第一个命令的max-model-len是必须的，但需要确保显存足够,
#max-model-len是2048，这在大多数情况下可能已经足够，尤其是对于一般的对话或文本生成任务。适合对话、摘要等常规任务（上下文≤2k
--disable-log-stats
--gpu-memory-utilization=0.9 
#--gpu-memory-utilization=0.9，这意味着允许vLLM使用90%的GPU显存。
#gpu-memory-utilization，可以更精细地控制显存使用，避免OOM崩溃。
--trust-remote-code
      
--dtype=half    
--max-num-seqs=4
--max-num-seqs=8 \            # 减少并发序列数（默认64）
--disable-log-stats \          # 关闭统计日志以节省内存
--enforce-eager \            
#--enforce-eager    # 禁用CUDA Graph优化，这会让PyTorch使用eager模式而不是更优化的cuda graph
--block-size=16               # 减小内存块分配粒度

--block-size 16 \  # 提高KV缓存利用率（对长文本有效）
--swap-space 8 \    # 启用CPU卸载，极端情况下扩展上下文 

#CUDA_VISIBLE_DEVICES=0指定只使用第0号GPU，也就是单卡运行
#命令指定了端口8102，而第一个没有指定，可能使用默认端口（通常是8000）。
#比如，7B模型，假设每个参数用2字节（比如半精度），参数量7B，那么模型本身占用的显存大约是7*10^9 * 2 bytes = 14 GB。

  
CUDA_VISIBLE_DEVICES=0 vllm serve \
  --model $MODEL_DIR/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B \
  --port 8102 \
  --max-model-len 4096 \
  --gpu-memory-utilization 0.9  # 显存利用率（0.9表示90%）
  

  
```

 **参数调整建议**

- **显存不足**：添加 `--quantization awq`（需模型支持AWQ量化）
- **长文本生成**：增大 `--max-model-len`（但可能需更多显存）
- **多GPU支持**：设置 `CUDA_VISIBLE_DEVICES=0,1`（多卡并行）

```
python3 -m vllm.entrypoints.openai.api_server --model /input0/Qwen-1_8B-Chat/ --host 0.0.0.0 --port 8080 --dtype auto --max-num-seqs 32 --max-model-len 4096 --tensor-parallel-size 1 --trust-remote-code
```







```
# 转换模型为GGUF格式
python3 convert.py /home/modern/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
./quantize /home/modern/models/deepseek-aigguf/gguf-model Q4_K_M

# 启动推理
./main -m //home/modern/models/deepseek-aigguf/gguf-model-q4_k_m.gguf -n 256 --gpu-layers 40
```





### **1. 环境清理与准备**

```
# 创建纯净虚拟环境（避免旧依赖干扰）
python -m venv vllm_env
```

**1. 确认虚拟环境激活**

你正在使用名为 `vllm_env` 的虚拟环境。请先确保已激活该环境：

```
source vllm_env/bin/activate  # Linux/Mac激活虚拟环境
```

### ‌**2. 安装指定版本的核心依赖**

```
# 安装基础兼容版本（关键冲突解决）
pip install numpy==1.26.4 
pip install  numba==0.58.1 
pip install  fsspec==2024.12.0 
pip install  transformers==4.47.1 
pip install  torch==2.1.2  # 确保CUDA兼容性‌:ml-citation{ref="1,6" data="citationList"}

```

### ‌**3. 安装vLLM及关联库**

```
# 安装vLLM 0.8.2（需与numpy<2.0兼容）
pip install vllm==0.8.2

# 如果使用 AWQ 量化模型，需额外安装 autoawq（非必须，但 Qwen2.5-Coder-7B-Instruct-AWQ 需要）
# 修复AutoAWQ冲突
pip install autoawq==0.2.8


# 安装datasets 3.4.1（需匹配fsspec）
pip install datasets==3.4.1

```

### **4. 验证安装结果**

```
# 检查关键库版本
pip show numpy numba transformers fsspec autoawq vllm
pip show datasets
pip show vllm
```

预期输出

```
numpy==1.26.4
numba==0.58.1
transformers==4.47.1
fsspec==2024.12.0
autoawq==0.2.8
vllm==0.8.2
```

### ‌**5. 加速安装技巧**

```
# 使用阿里云镜像加速
pip install -i https://mirrors.aliyun.com/pypi/simple/ [包名]
#清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

```

### **关键依赖关系表**‌

| 库名称       | 要求版本  | 冲突原因                   | 解决方案       |
| ------------ | --------- | -------------------------- | -------------- |
| numpy        | 1.26.4    | vllm/numba不兼容numpy≥2.0‌1 | 强制降级       |
| numba        | 0.58.1    | 兼容numpy 1.26.x‌16         | 固定版本       |
| transformers | 4.47.1    | autoawq版本限制‌12          | 降级至兼容范围 |
| fsspec       | 2024.12.0 | datasets版本限制‌13         | 安装旧版       |

### **2. 安装 vLLM**‌

```
pip list | grep vllm
# 输出应包含类似：vllm 0.4.0
#vllm                              0.8.2
```



### **3. 检查 CUDA 和 PyTorch 兼容性**‌

vLLM 需要 CUDA 和 PyTorch 支持。确保以下依赖已安装：

```
#验证命令
nvcc --version
# 检查 PyTorch 版本
python -c "import torch; print(torch.__version__)"
# 检查 python 版本
python --version
# 检查 PyTorch 是否支持 CUDA
python -c "import torch; print(torch.cuda.is_available())"
# 输出应为：True

# 检查 CUDA 版本（需要 >= 11.8）
nvidia-smi | grep "CUDA Version"
#| NVIDIA-SMI 530.30.02              Driver Version: 531.14       CUDA Version: 12.1     |


```









### **步骤 6：测试API调用**

#### 通过Python代码调用

检查本地目录是否包含以下关键文件：

```
your_project_folder/
├── models/
│   └── Qwen/
│       └── Qwen2.5-Coder-7B-Instruct-AWQ/  # 重命名目录
│           ├── config.json
│           ├── tokenizer_config.json
│           ├── model.safetensors          # 合并后的单文件
│           └── tokenizer.json
├── scripts/                              # 新建脚本目录
│   └── qwen_inference.py
└── vllm_env/                            # 仅存放虚拟环境


```



然后，您可以利用 [create chat interface](https://platform.openai.com/docs/api-reference/chat/completions/create) 来与Qwen进行对话：

```
from openai import OpenAI
# Set OpenAI's API key and API base to use vLLM's API server.
openai_api_key = "EMPTY"
openai_api_base = "http://localhost:8000/v1"

client = OpenAI(
    api_key=openai_api_key,
    base_url=openai_api_base,
)

chat_response = client.chat.completions.create(
    model="Qwen/Qwen2.5-7B-Instruct",
    messages=[
        {"role": "system", "content": "You are Qwen, created by Alibaba Cloud. You are a helpful assistant."},
        {"role": "user", "content": "Tell me something about large language models."},
    ],
    temperature=0.7,
    top_p=0.8,
    max_tokens=512,
    extra_body={
        "repetition_penalty": 1.05,
    },
)
print("Chat response:", chat_response)
```





## 上下文支持扩展

Qwen2.5 模型的上下文长度默认设置为 3 2768 个token。为了处理超出 3 2768 个token的大量输入，我们使用了 [YaRN](https://arxiv.org/abs/2309.00071)，这是一种增强模型长度外推的技术，确保在处理长文本时的最优性能。

vLLM 支持 YaRN，并且可以通过在模型的 `config.json` 文件中添加一个 `rope_scaling` 字段来启用它。例如，

```
{
  ...,
  "rope_scaling": {
    "factor": 4.0,
    "original_max_position_embeddings": 32768,
    "type": "yarn"
  }
}
```













**激活虚拟环境**：

```
source vllm_env/bin/activate
```

**运行脚本**：

```
cd scripts
python qwen_inference.py
python chat.py
```







问题1:

prompts = ["Write a Python function to calculate factorial:"]
outputs = llm.generate(prompts, sampling_params)

````
```python
def factorial(n):
    # Base case: factorial of 0 is 1
    if n == 0:
        return 1
    # Initialize result to 1
    result = 1
    # Loop through numbers from 1 to n
    for i in range(1, n + 1):
        result *= i  # Multiply result by current number i
    return result

# Test the function
print(factorial(5))  # Output: 120
print(factorial(0))  # Output: 1
print(factorial(3))  # Output: 6
```
````



在WSL或Windows中创建 `test_api.py`：

```
prompt="如何学习人工智能？",

```

```python
from openai import OpenAI

# 初始化客户端（注意端口与启动服务时一致）
client = OpenAI(
    base_url="http://localhost:8102/v1",  # 本地服务地址
    api_key="EMPTY"  # vLLM无需认证
)

# 生成文本
response = client.completions.create(
    model="deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
    prompt="如何高效学习深度学习？",
    max_tokens=200,    # 生成的最大token数
    temperature=0.7,   # 控制随机性（0-1，越大越随机）
    top_p=0.9,         # 核采样阈值（通常与temperature配合）
    stop=["\n"]        # 停止生成的条件（如遇到换行符则停止）
)

print(response.choices[0].text)
```

**运行测试**

```
pip install openai  # 确保已安装
python test_api.py
```

#### 2.2 通过curl命令测试

```bash
curl http://localhost:8000/v1/completions  -H "Content-Type: application/json"   -d '{  "model":"/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",    "prompt": "中国的首都是哪里？",    "max_tokens": 50  }'
  
# Call the server using curl:
curl -X POST "http://localhost:8000/v1/chat/completions" \
	-H "Content-Type: application/json" \
	--data '{
		"model":"/home/modern/models/Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
		"messages": [
			{
				"role": "user",
				"content": "What is the capital of France?"
			}
		],
		"stream": true,
		"temperature": 0.1
		
	}'
```

### **步骤 3：验证服务状态**

#### 3.1 检查服务日志

- 服务启动后，终端会持续输出日志，观察是否有以下关键信息：

```
Uvicorn running on http://0.0.0.0:8102 (Press CTRL+C to quit)
NVIDIA CUDA initialized successfully  # 确认CUDA可用
Model loaded in 23.5s                  # 模型加载完成
```

#### 3.2 查看显存占用

在另一个WSL终端中运行：

```bash
watch -n 1 nvidia-smi  # 每秒刷新显存占用情况
```

正常情况：显存占用应接近 `--gpu-memory-utilization` 设置的比例（如90%）。

### **步骤 4：高级用法**

#### 4.1 流式输出（Streaming）

```
response = client.completions.create(
    model="deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
    prompt="请写一首关于春天的诗：",
    stream=True  # 启用流式输出
)

for chunk in response:
    print(chunk.choices[0].text, end="", flush=True)
```

#### 4.2 批量推理

```
batch_prompts = [
    "深度学习的三大基础概念是：",
    "如何预防感冒？",
    "Python的GIL是什么？"
]

for prompt in batch_prompts:
    response = client.completions.create(
        model="deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
        prompt=prompt,
        max_tokens=100
    )
    print(f"问题：{prompt}\n回答：{response.choices[0].text}\n")
```



### **常见问题解决**

1. **CUDA不可用**

   - 检查NVIDIA驱动版本：`nvidia-smi`（在WSL中应能识别GPU）
   - 确保CUDA路径正确：`echo $PATH | grep cuda`

2. **模型加载失败**

   - 检查模型路径权限：`chmod -R 755 $MODEL_DIR`
   - 确认模型文件完整（下载中断时重新运行`modelscope download`）
   - 检查模型路径是否正确（区分大小写）
   - 确保模型文件完整（对比Hugging Face仓库的文件列表）

3. **显存不足**

   - 降低`--max-model-len`（如2048）
   - 关闭其他占用GPU的程序（如Windows游戏、录屏软件）

   **API调用超时**

   - 增加 `--max-num-seqs 32`（服务启动参数，提高并发处理能力）
   - 减少 `max_tokens` 值

   **生成内容质量差**

   - 调整 `temperature`（降低值使输出更确定性）
   - 设置 `top_k=50` 或 `top_p=0.9` 限制采样范围

### **性能优化建议**

1. **启用连续批处理**
   添加 `--enforce-eager` 到启动参数（减少显存碎片）

2. **持久化服务**
   使用 `tmux` 或 `systemd` 保持服务后台运行：

   ```
   tmux new -s vllm
   # 启动服务后按 Ctrl+B, 再按 D 退出会话
   # 重新连接：tmux attach -t vllm
   ```

3. **模型量化**
   如果使用AWQ量化版模型（需重新下载）：

   ```
   vllm serve --model path/to/model --quantization awq
   ```

### **优化建议**

- 将模型存储在WSL的ext4分区（默认路径如`/home/`），避免挂载Windows NTFS目录（I/O性能差）。
- 使用`tmux`或`screen`保持服务后台运行：

```
sudo apt install tmux
tmux new -s vllm
# 启动服务后按Ctrl+B, 再按D退出会话，需恢复时运行 tmux attach -t vllm
```

完成上述步骤后，你的 DeepSeek-R1 14B 模型即可通过 API 提供服务。建议先从简单问题测试，逐步调整参数以适应实际需求。











