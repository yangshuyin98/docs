---
title: 10分钟使用VitePress + 自动部署github pages 建立自己的博客
date: 2024-02-10
tags:
 - 健康
 - 生活方式
categories:
 - 健康生活
sticky: 3
---

# github的action自动部署到github-pages中

难度：★★★☆☆

使用`github`的`action`自动部署到`github-pages`中

创建部署的`deploy.yml`文件，在项目的根目录下面

## 1.修改config.mjs

需要在config.mjs里面配置base，名称为github仓库名称，注意不要忘记改之前的icon

```
base: "/blogs/"
```

修改package.json, 添加` "packageManager": "pnpm@10.6.3"`, 版本号要与后面yaml中的pnpm版本号一致

```
{
  "devDependencies": {
    "@types/node": "^22.13.10",
    "vitepress": "^1.6.3"
  },
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "packageManager": "pnpm@10.6.3",
  "dependencies": {
    "vitepress-plugin-group-icons": "^1.3.7"
  }
}
```

## 2.在 github 中创建一个名称为blogs的仓库

## 3.在项目中初始化 git

```
git init
```

Initialized empty Git repository in C:/Users/user/blogs/.git/

## 4.根目录blogs添加.gitignore 文件

docs目录作为 VitePress 站点的项目根目录。.vitepress目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。

> 由于我们是项目中添加 vitepress 文档，所以还需要在 .gitignore 文件中，将 vitepress 缓存文件过滤一下。

```text
docs/.vitepress/cache
docs/.vitepress/dist
```

```
# Project exclude paths
/coverage
/src/client/shared.ts
/src/node/shared.ts
*.log
*.tgz
.DS_Store
.idea
.temp
.vite_opt_cache
.vscode
dist
/dist
cache
temp
examples-temp
node_modules
pnpm-global
TODOs.md
*.timestamp-*.mjs
```

##### 5.上传代码

```
echo "# blogs" >> README.md
git init
git add README.md
git add .
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yangshuyin98/blogs.git
git push -u origin main
```

git push  origin main

git commit -m "更新文件"	

git commit -m "更新文件"	

git add .

git push  origin main





##### 6.选择github actions

Actions→

Get started with GitHub Actions→

Skip this and set up a workflow yourself →

##### 7.设置工作流

重命名并设置deploy.yml脚本
脚本文件：参考的vitepress官方文档：https://vitepress.dev/guide/deploy#github-pages
**这里发现参考资料里面的node包有问题,换成我们的



```
# 将 peaceiris/actions-gh-pages 替换为官方方案
- name: Deploy
  uses: actions/deploy-pages@v4  # 官方维护
```

```
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3  # 来自 https://github.com/peaceiris/actions-gh-pages

```

- **用途**：将构建产物推送到 `gh-pages` 分支
- **维护方**：社区开发者 peaceiris
- **特点**：非官方方案但流行（有 3k+ stars），存在潜在的权限管理风险

```
# pnpm 安装仍需保留第三方方案
- name: Setup pnpm
  uses: pnpm/action-setup@v3
```



```diff
- uses: actions/download-artifact@v3
+ uses: actions/download-artifact@v4
```

```yaml
# 定义工作流名称为“部署 VitePress 站点到 Pages”
name: Deploy VitePress site to Pages
# 触发工作流的事件
on:
 # 当代码推送到 master 分支时触发
  push:
    branches: [main]
    # 允许用户在 GitHub UI 手动触发工作流
  workflow_dispatch:
# 设置tokenn访问权限

# 设置工作流运行时的权限
permissions:
  contents: read   # 只读取仓库内容的权限
  pages: write         # 写入 GitHub Pages 的权限
  id-token: write     # 写入身份验证令牌的权限，用于工作流之间的通信

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
# 设置并发控制，确保同一时间只有一个部署任务在运行
concurrency:
  group: pages     # 使用名为“pages”的并发组
  cancel-in-progress: false # 不取消正在进行的运行，允许生产部署完成
  
  
 # 构建工作
jobs: 
   # 定义构建任务
  build:
  # 在最新的 Ubuntu 系统上运行
    runs-on: ubuntu-latest
    steps:
    # 检出代码仓库
      - name: Checkout
        uses: actions/checkout@v3   # 使用 GitHub 官方的检出动作
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
           # 获取完整的历史记录，用于生成正确的 lastUpdated 时间（如果需要）
           # 设置 pnpm 环境
      - name: Setup pnpm
        uses: pnpm/action-setup@v2  # 使用 pnpm 官方的动作来设置 pnpm
        with:
          version: 10.6.3 # 指定要安装的 pnpm 版本
          
          # 设置 Node.js 环境
      - name: Setup Node
        uses: actions/setup-node@v3  # 使用 GitHub 官方的 Node.js 设置动作
        with:
          node-version: 22.14.0   # 使用 Node.js 18 版本
          cache: pnpm       # 启用 pnpm 缓存以加速依赖安装
           # 配置 GitHub Pages 环境
      - name: Setup Pages
        uses: actions/configure-pages@v5  # 使用 GitHub 官方的动作来自动配置 Pages
      # 安装项目依赖
     - name: Install dependencies
        run: pnpm install        # 执行 pnpm install 命令安装依赖
       
        # 使用 VitePress 构建项目
      - name: Build with VitePress
        run: |
          pnpm run docs:build            # 执行构建命令，生成静态文件到指定目录
          touch .nojekyll           # 创建 .nojekyll 文件，避免 GitHub Pages 使用 Jekyll 处理站点
           # 上传构建后的文件作为工作流 artifact（中间产物）
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3   # 使用 GitHub 官方的动作上传文件
        with:
          path: docs/.vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

# 定义部署任务
  deploy:
   # 设置部署环境
    environment:
      name: github-pages      # 环境名称为 github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 部署完成后获取页面的 URL
       # 指定此任务依赖于 build 任务，必须在 build 完成后运行
    needs: build    # 在build后面完成
     # 在最新的 Ubuntu 系统上运行
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
    # 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id# 为这个步骤设置一个 ID，方便后续引用
        uses: actions/deploy-pages@v4 # 将之前的构建产物部署到github pages中
        # 使用 GitHub 官方的动作部署到 Pages

```

从代码的结构和逻辑来看，这段 GitHub Actions 工作流配置是合理且完整的，能够实现将 VitePress 站点部署到 GitHub Pages 的功能。以下是对代码合理性的具体分析：

### 1. **触发条件 (`on`)**：
- **`push`**：当代码推送到 `master` 分支时触发工作流，这是常见的持续集成/持续部署 (CI/CD) 触发方式。
- **`workflow_dispatch`**：允许手动触发工作流，增加了灵活性，便于在需要时手动部署。

### 2. **权限设置 (`permissions`)**：
- **`contents: read`**：只读取仓库内容，确保工作流能够访问代码但不会意外修改。
- **`pages: write`**：允许写入 GitHub Pages，这是部署站点所必需的。
- **`id-token: write`**：允许写入身份验证令牌，用于工作流之间的通信和并发控制。

### 3. **并发控制 (`concurrency`)**：
- **`group: pages`**：将所有与 Pages 相关的任务归为一组，确保同一时间只有一个部署任务在运行，避免冲突。
- **`cancel-in-progress: false`**：不取消正在进行的运行，确保生产部署能够完成，避免中断。

### 4. **构建任务 (`build`)**：
- **`runs-on: ubuntu-latest`**：在最新的 Ubuntu 系统上运行，这是 GitHub Actions 的标准环境，适合大多数 JavaScript 项目。
- **步骤分析**：
  - **`Checkout`**：检出代码仓库，`fetch-depth: 0` 确保获取完整的历史记录，这对于生成正确的 `lastUpdated` 时间（如果需要）是必要的。
  - **`Setup pnpm`**：安装指定版本的 pnpm，确保依赖管理工具的一致性。
  - **`Setup Node`**：设置 Node.js 环境，使用 Node.js 18 版本，并启用 pnpm 缓存以加速依赖安装。
  - **`Setup Pages`**：自动配置 GitHub Pages 环境，简化部署流程。
  - **`Install dependencies`**：安装项目依赖，确保所有必要的包都已准备好。
  - **`Build with VitePress`**：运行构建命令，生成静态文件，并创建 `.nojekyll` 文件以避免 GitHub Pages 使用 Jekyll 处理站点。
  - **`Upload artifact`**：将构建后的文件上传为工作流的中间产物，供后续的部署任务使用。

### 5. **部署任务 (`deploy`)**：
- **`environment`**：定义部署环境为 `github-pages`，并从部署步骤的输出中获取页面的 URL。
- **`needs: build`**：明确依赖于 `build` 任务，确保部署基于最新的构建产物。
- **`runs-on: ubuntu-latest`**：同样在最新的 Ubuntu 系统上运行。
- **步骤分析**：
  - **`Deploy to GitHub Pages`**：使用官方动作将构建后的文件部署到 GitHub Pages，简单高效。

### 6. **代码的可读性和注释**：
- 每个步骤都有清晰的名称和注释，说明了其目的和作用，便于理解和维护。
- 使用了 GitHub Actions 的标准语法和官方动作，确保了代码的可靠性和可移植性。

```

name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]
  workflow_dispatch:
# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 10.6.3 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v5  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v4 # 将之前的构建产物部署到github pages中
```



### 总结：

这段代码逻辑清晰，配置合理，符合 GitHub Actions 的最佳实践。它能够正确地构建 VitePress 站点并部署到 GitHub Pages，同时通过并发控制和权限设置确保了部署的安全性和稳定性。如果项目需求没有特殊变化，这段代码可以直接使用。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/29287e1d427840aba685302b147fec05.png)



8.点击确定，耐心等待15秒左右，就可以了，接下来查看我们的域名：

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/c7436a384b364d3cb1cd97fc6410a13f.png)





***最后，就部署完毕了***

在GitHub Actions的生态中，我们经常会遇到需要在不同工作流之间传递和使用文件的情况。然而，官方的actions/download-artifact并不能满足这种跨工作流下载工件的需求。为此，一个名为dawidd6/action-download-artifact@v3的开源项目应运而生，它能帮助你轻松地从指定的工作流和提交信息中获取并提取上传的工件。
————————————————





第三方 action

需要 token 权限问题

**权限问题**：

```
# 将 peaceiris/actions-gh-pages 替换为官方方案
- name: Deploy
  uses: actions/deploy-pages@v4  # 官方维护

```



`peaceiris/actions-gh-pages` 需要 `contents: write` 权限，

而官方方案只需 `pages: write`

```

name: Deploy VitePress site to Pages
on:
  push:
    branches:
      - main
  workflow_dispatch:
permissions:
  contents: write 
  pages: write        
  id-token: write    

concurrency:
  group: gh-pages   
  cancel-in-progress: false 

jobs:

  setup:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3  
        with:
          fetch-depth: 0 

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 10.6.3 # 指定要安装的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3  # 使用 GitHub 官方的 Node.js 设置动作
        with:
            node-version: 22.14.0   # 使用 Node.js 18 版本
            cache: pnpm       # 启用 pnpm 缓存以加速依赖安装
      - name: Setup Pages
        uses: actions/configure-pages@v5  # 使用 GitHub 官方的动作来自动配置 Pages
      - name: Install dependencies
        run: pnpm install        # 执行 pnpm install 命令安装依赖

        # 使用 VitePress 构建项目
      - name: Build with VitePress
        run: |
          pnpm run docs:build         
          touch .nojekyll  
           # 上传构建后的文件作为工作流 artifact（中间产物）
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3   # 使用 GitHub 官方的动作上传文件
        with:
             path: docs/.vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3 

    - name: Install pnpm
      uses: pnpm/action-setup@v3

    - name: Set node version to ${{ matrix.node_version }}
      uses: actions/setup-node@v4
      with:
         node-version: ${{ matrix.node_version }}  

    - name: Install deps
      run: pnpm install
      env:
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: 1    


    - name: Install dependencies
      run: pnpm install
    - name: Build
      run: pnpm run docs:build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        

        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs/.vitepress/dist
        publish_branch: gh-pages
```

