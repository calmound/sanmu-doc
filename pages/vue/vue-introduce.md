————
title: vue 环境搭建
—————

# vue 环境搭建

# 一、环境搭建

## 1、安装 nodejs

安装地址：[https://nodejs.org/en](https://nodejs.org/en)

安装完成后，打开终端，输入 node -v，若看到以下命令，则表明安装完成。

![](https://assets-1256443293.cos.ap-beijing.myqcloud.com/article/202401031250490.png)

理论上，无需任何特殊操作，只需从官网下载 Node 的安装包，然后安装即可。如果不知道如何安装 Node，请参考以下文章：

windows：[https://www.cnblogs.com/matanzhang/p/11441693.html](https://www.cnblogs.com/matanzhang/p/11441693.html)

mac: [https://yvesyu.com/installing-node-js-on-mac-os-in-one-go/](https://yvesyu.com/installing-node-js-on-mac-os-in-one-go/)

## 2、安装 vue 项目

在安装完`vue`之后，在终端输入以下命令，即可安装`vue`的脚手架和项目：

```bash
npm init vue@latest
```

`Windows` 终端推荐使用 `PowerShell`（[https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3)）。

`Mac` 终端默认使用 `zsh`（[https://ohmyz.sh/](https://ohmyz.sh/)），也很好用。

如果你是新手，不需要太纠结于终端工具的选择，先完成自己主要的学习任务即可。而且，在学习 `Vue` 时，用到的终端命令也不多。

运行上述命令后，你会看到以下指令。通过空格，你可以在代码中选择是否安装一些默认的模板代码或依赖包。如果是初学项目，可以全部选择“否”选项。然后在学习哪个知识点时再把它加进去。。

```bash
✔ Project name: … <your-project-name> # 项目名称
✔ Add TypeScript? … No / Yes # 是否使用TypeScript
✔ Add JSX Support? … No / Yes # 是否支持JSX
✔ Add Vue Router for Single Page Application development? … No / Yes # 是否使用但也应用
✔ Add Pinia for state management? … No / Yes # 是否使用Pinia
✔ Add Vitest for Unit testing? … No / Yes # 是否使用单元测试
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes # 是否需要自动化测试
✔ Add ESLint for code quality? … No / Yes # 是否使用代码校验
✔ Add Prettier for code formatting? … No / Yes # 是否自动化格式代码

Scaffolding project in ./<your-project-name>...
Done
```

创建项目成功后，通过以下命令进入项目并启动：

```bash
cd <your-project-name>
npm install
npm run dev
```

通过上述命令，在终端中将会看到如下内容。其中，`http://localhost:5173/`是我们可以在浏览器中访问页面的 URL。

![](https://assets-1256443293.cos.ap-beijing.myqcloud.com/article/202401031250487.png)

# 二、认识项目

![](https://assets-1256443293.cos.ap-beijing.myqcloud.com/article/202401031250488.png)

安装完成后，我们重点关注 `component` 文件夹和 `App.vue` 两个文件，其他文件不要改动。初学阶段也可以先不用了解，重点放在 Vue 语法学习上。

请打开 App.vue 并删除不需要的代码，最终结果如下所示：

```html
<script>
  import Basic from './components/Basic.vue';
  export default {
    name: 'App',
    components: {
      Basic,
    },
  };
</script>
<template>
  <Basic />
</template>

<style scoped></style>
```

在`components` 下创建`Basic.vue`

```html
<script></script>

<template></template>

<style scoped></style>暗处
```

删除`main.js`中的`import './assets/main.css’`这段代码。

此时我们的页面就是白板了。

`<script>` 标签用于写 `JavaScript` 的逻辑。

`<template>` 标签在初期可以先理解为用于写 `HTML`然后拼接上一些`Js`变量。

`<style>` 标签用于写 `CSS`。

# 三、插件安装

我们正在学习的`vue3`项目中，可以安装`volar`插件，它可以让我们更加友好地编写 Vue 代码。

![](https://assets-1256443293.cos.ap-beijing.myqcloud.com/article/202401031250489.png)

PS：如果未来开发`vue2`的项目安装`vetur`
