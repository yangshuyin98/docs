# 超级详细，如何把B站缓存m4s文件转换成mp4格式

## 1. 视频缓存下来，找到m4s文件

1. 首先我们将视频缓存下来，然后找到需要的m4s文件（已经找到m4s文件的可以跳过此步）

在B站主界面点击我的，然后点击离线缓存，再点击右上角的设置，进入如下界面

2. 然后点击自定义目录，设置成你能找到的地方。然后点开想要转换的视频，右上角点击三点符号，出现如下界面，点击缓存，
3. 点击缓存全部，然后查看缓存，等缓存完成。接下来将手机连接电脑，在电脑上的手机助手上打开文件管理，然后点击内部存储。这里以我的手机助手为例。
4. 此电脑\Redmi K60 Pro\内部存储设备\Android\data\tv.danmaku.bili\download就是我刚才设置的b站缓存目录，
5. 你可以找到你自己设置的目录点击打开，\Android\data进入二级目录
6. 此处的tv. danmaku. bili文件即为B站缓存文件夹，
7. 点击download，进入下一级目录
8. 根据右边的修改时间，找到你刚才缓存的视频文件夹，点击，然后按照如下顺序依次点击，数字可能不同，但只要依次点击文件夹即可。
9. 最后进入m4s文件存放界面
10. audio. m4s即音频文件，video. m4s即视频文件，将这两个文件拖到桌面备用

## 2. 下载ffmpeg工具

1. FFmpeg 是一款免费开源的转换音频视频格式的程序工具，下载地址：

https://flist.jjaw.cn/%E8%BD%AF%E4%BB%B6/

复制后在浏览器打开，按照提示下载即可，下载的文件名字：ffmpeg-7.0.2-essentials_build.zip

下载解压后，依次点击，解压后的文件夹中应包含以下目录：

```
bin：FFmpeg 可执行文件所在的文件夹，运行 FFmpeg 的所有命令都需通过此目录下的文件。
doc：文档资料。
presets：预设的格式和编码方案。
进入 bin 目录，可以看到 FFmpeg 的三个核心可执行文件：ffmpeg.exe、ffplay.exe、ffprobe.exe。
```

2. 点击bin，进入bin。把刚才桌面上的audio. m4s文件和video文件拖到此界面，如图

3. 找到“系统变量”中的 Path 条目并点击“编辑”。在“编辑环境变量”窗口中，点击“新建”，输入 FFmpeg 的 bin 文件夹路径。依次点击“确定”以保存设置（三个“确定”缺一不可）。

4. 按 Win + R 键，输入 cmd 打开命令行窗口。

```
ffmpeg -version
```

如果正确显示 FFmpeg 版本号和相关信息，说明安装成功。

## 3. 使用ffmpeg工具

安装成功后，您可以使用命令行来执行 FFmpeg 的各种操作。常用的FFmpeg 命令行格式：

```
ffmpeg [global_options] {[input_file_options] -i input_url} ... {[output_file_options] output_url}
```

示例：将 MP4视频 文件转换为 TS 格式，命令如下：

```
ffmpeg -i "C:\Users\moon.huang\Desktop\video.mp4" -f mpegts -codec:v mpeg1video -b:v 2000k -r 30 -bf 0 -codec:a mp2 -ar 44100 -ac 1 -b:a 128k "C:\Users\moon.huang\Desktop\video.ts"
```



1. 开始无损合并 将手机缓存的video.m4s与audio.m4s文件拷贝到电脑 ，放在同一目录。 .
2. 然后按住键盘 Shift 键，在该目录空白处点击鼠标右键，打开命令窗口（黑的蓝的都行）： 输入命令并回车：

```
ffmpeg -i video.m4s -i audio.m4s -codec copy output.mp4
```

3. 注意：网上其他合并命令虽然也能用，但合并的东西可能是压制过的。如果你的合并速度比复制速度还慢，那说明肯定压制了视频或音频信息，不是无损压制的。
4. 使用`ffplay`播放视频

```
ffplay Output.mp4
```



| 参数     | 含义                              |
| -------- | --------------------------------- |
| -i       | 输入文件路径（被转换的 MP4 文件） |
| -f       | 输出文件格式设置为 mpegts         |
| -codec:v | 指定视频编码器为 mpeg1video       |
| -b:v     | 设置输出视频比特率为 2000k        |
| -r       | 设置帧速率为 30                   |
| -bf      | 设置 B 帧数量为 0                 |
| -codec:a | 指定音频编码器为 mp2              |
| -ar      | 设置音频采样频率为 44100          |
| -ac      | 设置音频通道数为 1                |
| -b:a     | 设置音频比特率为 128k             |

## 简单方式：

在空白处按住shift键，然后单击鼠标右键，选择在此处打开powershell窗口

```
.\ffmpeg.exe -i video.m4s -i audio.m4s -codec copy Output.mp4
```

这串代码，然后在这个蓝色界面内单击右键，将这款代码粘贴进去，然后按回车键，出现如下代码即表示转换成功

此时我们切换到刚才的bin文件夹，发现生成了一个output文件，此文件就是刚才的audio. m4s，video. m4s合成的mp4文件

我们可以发现output文件的大小近似等于两个m4s文件的大小之和。说明用这种方法可以无损合成，这个output文件与你原先缓存的视频完全相同。

