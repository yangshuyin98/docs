<p>从你给出的代码片段来看，这些文件属于FFmpeg项目里`fftools`目录下的一部分。`fftools`包含了像`ffmpeg`、`ffplay`、`ffprobe`这类常用工具的代码。下面为你介绍使用这些工具的一般步骤：</p>


### 1. 编译项目

要使用这些工具，首先得编译整个FFmpeg项目。编译过程一般如下：

#### 克隆FFmpeg仓库
```bash
clone https://git.ffmpeg.org/ffmpeg.git ffmpeg</code>
cd ffmpeg
```

#### 配置编译选项

你可以依据自身需求对编译选项进行配置，例如：

```bash
./configure --enable-shared --enable-gpl --enable-libx264</code>
```

这里的选项解释如下：
		- `--enable-shared`：编译动态链接库。
		- `--enable-gpl`：启用GPL许可证。
		- `--enable-libx264`：启用x264编码库。

你可以通过`./configure --help`查看所有可用的配置选项。

#### 编译并安装
```bash
make
sudo make install
```
`make`命令会编译整个项目，而`sudo make install`会把编译好的工具安装到系统中。

### 2. 使用编译好的工具

编译并安装完成之后，你就能够使用像`ffmpeg`、`ffplay`、`ffprobe`这类工具了。以下是一些常见的使用示例：

#### 使用`ffmpeg`进行视频转码
```bash
ffmpeg -i input.mp4 output.avi
```
此命令会把`input.mp4`文件转码成`output.avi`文件。

#### 使用`ffplay`播放视频
```bash
ffplay input.mp4
```
该命令会使用`ffplay`工具播放`input.mp4`文件。

#### 使用`ffprobe`查看文件信息
```bash
ffprobe input.mp4
```
此命令会输出`input.mp4`文件的详细信息，例如视频分辨率、帧率、编码格式等。

### 3. 开发自定义工具
如果你想基于这些代码开发自定义工具，可以按照以下步骤操作：

#### 编写代码
在`fftools`目录下创建新的C文件，然后编写代码。你可以参考`fftools`目录下现有的文件，例如`ffmpeg.c`、`ffplay.c`、`ffprobe.c`。

#### 修改Makefile
在`fftools/Makefile`里添加新的目标，让其能够编译你的代码。例如，如果你创建了一个名为`mytool.c`的文件，可以在`Makefile`里添加如下内容：
```makefile
AVPROGS += mytool
mytool$(EXESUF): mytool.o cmdutils.o opt_common.o $(FF_DEP_LIBS)
$(LD) $(LDFLAGS) $^ $(FF_EXTRALIBS) -o $@
```

#### 编译自定义工具
```bash
make mytool
```
这个命令会编译你的自定义工具。

### 总结

要使用这些工具，你需要先编译整个FFmpeg项目，然后使用编译好的工具进行视频处理、播放或者查看信息。如果你想开发自定义工具，需要编写代码并修改`Makefile`来编译你的代码。
