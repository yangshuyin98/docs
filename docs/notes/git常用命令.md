## 新建一个项目

点击右上角的 +号，新建项目。
		填写mytest项目信息，最后点击创建即可。
		新建项目成功。

## 克隆项目到本地

​		点击克隆，然后点击SSH Clone项目的复制链接按钮，复制git链接。		
​		接着，在本地目录空白处D:/Chinacode中右键菜单，点击Git Bash Here。
​		克隆远程仓库
​		输入git clone 刚刚的git链接，如下

```
git clone https://gitcode.com/yang_shu_yin/test.git
```

```
git clone git@github.com:yangshuyin98/docs.git
```

​		成功后，本地目录即可看到克隆下来的文件。

## 创建本地Git仓库、添加文件

​	在本地添加文件，如下，添加一个HelloWorld.txt文件。

1.初始化仓库
mkdir my-project   # 创建项目目录
cd my-project      # 进入目录
git init           # 初始化Git仓库（生成隐藏的.git文件夹）
使用 git init 命令初始化一个新的Git仓库。这会在当前目录下生成一个 .git 的隐藏文件夹，用于存储Git的版本控制信息。表示仓库已经初始化完成。
验证初始化：ls -a（查看是否存在.git目录）。
在D盘上成功创建了一个Git仓库。您可以使用其他Git命令来管理和操作您的仓库，如创建分支、合并更改等。

## 关联本地工程到远程仓库

有时候，我们可能是先在本地有了工程文件，然后再在gitee上创建仓库的。

1. **添加远程仓库**：
2. （可在本地库上使用命令 git remote add把它和 gitee 的远程库关联），如下：

```
git remote add origin https://gitcode.com/yang_shu_yin/word.git    # 添加远程仓库别名
```

```
git push -u origin main         # 首次推送并建立追踪关系
```

​		同步代码
​		推送本地提交：git push origin main
​		拉取远程更新：git pull origin main（自动合并）。

:::注意事项：如果在使用命令 git remote add时报错：
error: remote origin already exists.
说明本地库已经关联了一个名叫 origin的远程库，此时，可以先用git remote -v查看远程库信息：

```
git remote -v
origin git@gitee.com:linxinfa/mytest.git (fetch)
origin git@gitee.com:linxinfa/mytest.git (push)
```

我们可以删除已有的远程库
git remote rm origin
再关联远程库
git remote add  git@github.com:yangshuyin98/docs.git

:::

## 执行git命令，提交文件

打开git，执行git的add、commit、push命令，即可将本地文件上传到远程仓库。
	注：常用的git命令见文章最后面。
	

### 将文件加入暂存区

1. cd mytest/                    #进入mytest目录

2. **复制文件**：将你想要上传的文件复制到这个已经初始化的Git仓库文件夹中。

3. 添加文件：将要包含在仓库中的文件添加到仓库中。您可以使用以下命令将一个或多个文件添加到暂存区：
   git add  <file>命令  将一个或多个文件添加到Git仓库中。（请将 <file>替换为要添加的具体文件名。)	  

```
git add file.txt        # 添加单个文件 git add <文件名> 命令
```

想要添加所有文件，可以使用`git add .`命令

```
git add .               # 添加所有修改和新文件（不包含已删除文件）git add . 将所有文件添加到暂存区。
```

```
git add -A              # #添加全部文件添加所有变更（包括删除的文件）
```

### 提交更改：   

使用 git commit -m "信息" 命令正式将文件提交到本地仓库，并添加注释信息：	

```
git commit -m "首次提交"                           #提交修改描述  
```



```
git commit -m "Initial commit: add project files"
git commit -m "HelloWorld"
```

 查看提交状态：git status -sb。或 git status 命令检查当前仓库的状态。

5. 实时状态监控

```
git status      # 显示工作区和暂存区状态
git diff        # 查看未暂存的修改内容
```

6. 提交历史追溯

```
git log                 # 显示完整提交历史（含作者、日期、哈希值）
git log --oneline       # 简洁模式（仅显示提交信息与哈希）
git log --graph         # 图形化显示分支合并历史。
```

7. 创建与切换分支

```
git branch dev          # 创建新分支
git checkout dev        # 切换到dev分支
git checkout -b dev     # 创建并切换分支（合并上述两步）
```

8. 合并与解决冲突

```
git merge dev         # 将dev分支合并到当前分支
```


当同一文件被不同分支修改时，Git会标记冲突内容（<<<<<< HEAD至>>>>>> dev），手动修改后重新提交。

### **推送本地提交**：

#### 第一次推送使用

```
git push -u origin main         # 首次推送并建立追踪关系
```

注意：这里的`-u`选项是为了设置本地分支与远程分支的跟踪关系，而`origin`代表远程仓库，`main`代表本地主分支。

```
git push -u origin master	#将在本地仓库中的提交推送到GitCode上的远程仓库。
```

注意：这里的`-u`选项是为了本地分支与远程分支建立跟踪关系，完成这一步，而`origin`代表远程仓库，`master`代表本地主分支。
刷新GitCode页面，即可看到本地文件已经上传到GitCode上了

#### 第二次及之后的推送操作

修改文件后提交到本地仓库

```
git add Hello word
git commit -a -m "Add File, Hello word"           #提交修改描述   提交文件
git add .
```


git commit -m "更新文件说明"		# 将 `commit message` 为对你所做更改的描述，这有助于以后的代码审查和维护。

直接推送（已建立追踪关系）

```
git push
```

若未建立追踪关系，需完整命令

```
git push origin main
```


​		

####  合并远程更新（推荐）

远程仓库存在你本地没有的更新
远程分支已更新：其他协作者或你在其他设备上推送了新的提交到远程仓库（如 GitHub）。
本地分支落后于远程：你未先拉取（pull）远程的最新代码，导致本地提交历史与远程冲突，无法直接推送
通过 git pull 拉取远程代码并合并到本地，解决冲突后重新推送：

```
git pull origin main             #拉取远程代码（自动合并）
git add .
git commit -m "合并远程更新"		# 标记冲突已解决并提交
git push origin main          #重新推送
```

## 附加建议

### 检查追踪关系：

​	git branch -vv  # 确认本地分支已关联远程分支（显示 [origin/main]）
​	若未关联，需先执行：
​	git push -u origin main  # 首次推送时建立追踪关系[2](@ref)

### 避免重复冲突：	

推送前养成先 pull 的习惯。
使用 git fetch + git diff 预检查远程更新。
主分支（main/master）用于生产环境，开发在dev分支，功能开发使用特性分支（feature/*）。
通过git fetch获取远程更新，避免长期未同步导致合并冲突
通过以上步骤，你就可以成功创建并初始化一个本地Git仓库。
	

### 账号密码验证不通过，密码或者权限不对，导致 Git 操作失败。

​	解决方法一 (最有效)
​	输入：git config --system --unset credential.helper
​	再次进行 Git 操作，输入正确的用户名，密码即可。
​	
​	解决方法二
​	输入：git config –global http.emptyAuth true
​	再次进行 Git 操作，输入正确的用户名，密码即可。
​	
​	解决方法三
​	进入控制面板》用户账号》凭据管理器？windows凭据》普通凭据，在里面找到git，点开编辑密码，更新为最新密码之后就可以正常操作了。

## 小技巧

### 1、如何在README.md中显示图片

格式

​	![](https://xxxxxxxxxxxxxxxxxxx)
先把图片上传到GitCode工程中，然后点击下载，即可得到图片的https链接
接着编辑README.md文件
以![()(https://xxxxxxxxxxxxxxxxxxx)]的格式，将https://xxxxxxxxxxxxxxxxxxx替换为刚刚复制的图片链接
提交即可显示图片

### 2、README.md如何换行

行末尾敲两个空格再回车

## 删除项目

点击项目设置

点开高级的展开按钮
拉到最下面，即可看到删除项目按钮

## 常用的git命令

```
git init 					#把当前目录变成git可以管理的仓库
git clone git地址 			#克隆项目
git add readme.txt 			#添加一个文件，也可以添加文件夹
git add -A 					#添加全部文件
	git rm test.txt 			#删除一个文件，也可以删除文件夹
git commit -a -m “some commit” #提交修改
	git status 					#查看是否还有未提交
	git log 					#查看最近日志
	git reset --hard HEAD^ 		#版本回退一个版本
	git reset --hard HEAD^^ 	#版本回退两个版本
	git reset --hard HEAD~100 	#版本回退多个版本
git remote add origin +地址 #远程仓库的提交（第一次链接）
	git push -u origin master	#仓库关联
git push 					#远程仓库的提交（第二次及之后）
	git fetch 					#从远程获取代码库
	git tag xxx 				#打tag
	git tag 					#显示所有tag
	git push --tag 				#提交tag
	git branch -a 				#显示所有分支
	git checkout 分支名 		#切换分支
	git merge git分支 			#合并分支
	更多的git命令，可以输入git --help查看，或者访问git命令手册：https://git-scm.com/docs
```

