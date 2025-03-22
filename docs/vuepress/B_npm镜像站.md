---
title: npm镜像站
date: 2025-03-14
tags:
 - npm
 - 镜像站
categories:
 - npm命令
sticky: 3
---

#  npm mirror

## 镜像源

国内镜像源

**腾讯云 NPM 镜像**：`https://mirrors.cloud.tencent.com/npm/`

**华为云 NPM 镜像**：`https://repo.huaweicloud.com/repository/npm/`

**淘宝 NPM 镜像：**`https://registry.npmmirror.com/`

一旦你找到了最新的镜像源，你可以使用以下命令来切换到新的镜像源：

```
npm config set registry https://registry.npmmirror.com/
```

查看所有配置的镜像，可以使用：

```
npm config get registry   查看镜像源地址
npm config get registry -l
```

安装完成后，可以直接使用cnpm安装所需的包，例如：

```
cnpm install [package_name]
```

### node 的包管理器

NPM是node package manager的简称

### 💡 cnpm使用说明

你可以使用我们定制的[cnpm](https://npmmirror.com/package/cnpm)命令行工具代替默认的 npm。
cnpm 支持除了写相关操作外的所有命令，例如 install、info、view 等。

```
npm install -g cnpm --registry=https://registry.npmmirror.com
```

当然，你也可以使用任意你心仪的命令行工具，只要配置 registry 即可

```
npm config set registry https://registry.npmmirror.com
```

### 🎯安装模块

```
$ cnpm install [name]
```

### 同步模块

```
$ cnpm sync cnpmcore
```

当然, 你可以直接通过 web 方式来同步, 界面打开时会自动比对版本信息

```
$ open https://npmmirror.com/sync/cnpmcore
```

### npm升级到最新

```
npm install -g npm@latest



npm install -g vuepress 
```













## npm命令大全

#### 1.下载包

本地下载

1. 开发依赖

```shell
npm install 包名 --D
```

简写

```
npm i 包名 -D
```

2.线上依赖

```shell
npm install 包名 --save
```

简写

```shell
npm i 包名 -S
```

全局下载 在任意地方都需要使用的命令

```shell
webpack gulp  vue  create-react-app ....
npm install/i 包名 -g 
```

下载指定版本的包

```shell
npm i 包名@版本号 -D/-S
```

#### 2.卸载包

本地卸载

1. 开发依赖

```shell
npm uninstall 包名 -D 
```

2.线上依赖

```shell
npm uninstall 包名 --save/-S
```

全局卸载

```shell
npm uninstall 包名 -g
```

#### 3.更新包

```
npm update 包名 -D/-S/-g
```

#### 4.使用包

```plaintext
require(模块标识)   ：默认查找的是module.exports 抛出的模块

exports 抛出模块 是module.exports 的一个别名   exports 是不能直接赋值的，需要以属性的
形式去抛出方法或属性


模块标识：包名和路径  路径：绝对路径和相对路径

绝对路径：相对盘,域名    /

相对路径： ./  ../ ../../
```

#### 5.查看全局包路径

```shell
npm root -g
```

#### package.json  包描述文件

生成一个package.json文件  

```shell
npm init 
npm init -y 快速生成
```

```
{
	"name": "npm-demo",   //包名
	"version": "1.0.0",   //版本号
	"description": "",    //描述
	"main": "index.js",   //入口文件
	"scripts": {          //命令
		"test": "echo "Error: no test specified" && exit 1"
	},
	"author": "",         //作者
	"license": "ISC",
	"dependencies": {
		"swiper": "^6.6.1"   //是一个范围   swiper 升级到7.0.0
	}
}
```

**package-lock.json** ：锁定版本号和下载的镜像源

#### 包的查找规则

1. node_modules 文件

先在当前文件夹下查找  --->  往上一级找 ---->....  --->磁盘根目录--->全局里 NODE_PATH 指定的路径里查找

1. 在node_modules文件夹

查找对应包名的文件 ---> package.json文件  ---> main主入口文件 报 can not find  modules xxx

#### 发布包

1. 新建一个文件夹，生成一个package.json文件
2. 确保当前是在国外镜像源
3. 编写包的逻辑，抛出外界的需要的接口
4. 登录npm官网，发布

```
npm login  ：输入用户名和密码邮箱

npm publish  :发包
```

**注**：包名不能和现有的包名冲突

```
npm unpublish 包名 --force  强制从npm的官网上删除包
```



## 📅 建网站 搭应用 首选服务器

### 0.73元/日起
