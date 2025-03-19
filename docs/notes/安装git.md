## 一、关于Git

使用git从github下载项目到本地以及本地项目上传github

本文介绍了如何下载并安装Git，通过快速下载链接提高效率。详细步骤包括配置Git用户名和邮箱，创建SSH Key，并在GitHub上添加SSH Key。

此外，还讲解了如何从GitHub克隆项目以及将本地项目上传到GitHub，包括gitclone、gitinit、git、remote、add、origin等关键命令的使用。

## 二、安装git

要使用GitCode，需要先安装git工具。
git工具下载：https://git-scm.com/downloads
安装完成后，在命令行输入git --version可以查看到git的版本。
验证Git安装是否成功的方法：

1. 验证Git安装是否成功的方法是通过在命令提示符或终端中输入以下命令：git --version
2. 若显示版本号（git version 2.48.1.windows.1），说明Git安装成功。
3. 如果没有返回版本信息或出现“命令未找到”的错误消息，则表示Git可能未正确安装或未添加到系统路径中。此时，可以参考安装指南重新检查安装步骤。

安装完成后，右键菜单也会出现Git GUI、Git Bash相应的菜单。



## 三、配置Git用户名和邮箱的命令

1. 全局配置（适用于所有项目）：
   		设置全局用户名：

```
git config --global user.name  "yangshuyin98"
```

​		设置全局邮箱：

```
git config --global user.email "yangshuyin@126.com"
```

这些命令会将配置信息保存到全局配置文件中，适用于所有项目。

2. 项目级配置（仅当前仓库生效）

​		设置局部用户名：

```
git config user.name  "yang_shu_yin"
```

​		设置局部邮箱：

```
git config user.email "yangshuyin@126.com"
```

3. 配置完成后，可以使用git config --list命令查看所有git配置信息，以确认配置是否成功。

## 四、登录GitCode


GitCode地址：https://gitcode.net/

如果你有CSDN账号，直接用CSDN账号登录即可。

我们先在 Github上注册账号并登录。
Github地址：https://github.com/new

## 五、生成SSH密钥

由于我们的本地git仓库和 GitCode仓库之间的传输是通过SSH加密的，所以我们需要配置SSH密钥。
如果你打算将Git仓库托管在GitHub、GitLab等远程代码托管平台上，并希望通过SSH方式进行代码推送和拉取，那么还需要配置SSH密钥。

1. 首先，在命令提示符中输入命令生成SSH密钥对。按照提示完成三次回车，即可生成ssh key。

```
ssh-keygen -t rsa -C "yangshuyin@126.com"
```

​		可以看到，我们生成的公钥文件id_rsa.pub路径：C:\User\Adminstrator/.ssh/id_rsa.pub。
​		这个命令会生成一个私钥（默认存储在~/.ssh/id_rsa）和一个公钥（默认存储在~/.ssh/id_rsa.pub）。

2. 进入该目录用文本编辑器打开。即可看到SSH公钥，下文中将会用到这个SSH公钥。

## 六、配置SSH密钥的步骤

1. 然后，登录到你的远程代码托管平台账户，找到SSH密钥设置部分，将生成的公钥添加到你的账户中。

2. 在GitCode网站点击设置。

3. 点击SSH密钥。

4. 拷贝刚刚的SSH密钥到框中，输入公钥标题，点击添加密钥。		

5. 配置成功。

6. 最后，为了验证SSH配置是否成功，可以在命令提示符中输入ssh -T git@github.com（以GitHub为例）命令进行测试。

7. 如果看到欢迎信息，则说明SSH配置成功。

   ```
   Hi yangshuyin98! You've successfully authenticated, but GitHub does not provide shell access.
   ```

   ​		ssh -T git@gitcode.com（gitcode，（以前叫CODE.CHINA））
