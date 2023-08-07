/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: "category",
      label: "Vue系列",
      items: [
        "vue/01 环境搭建",
        "vue/02 模版语法",
        "vue/03 条件渲染和列表渲染",
        "vue/04 事件处理和表单绑定",
        "vue/05 组件",
        "vue/vue-router4基础知识梳理",
        "vue/10分钟带你入门pinia",
        "vue-advance/如何调试vue源码",
        "vue/vue挑战",
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Vue原理系列',
    //   items: [],
    // },
    {
      type: "category",
      label: "React系列",
      items: ["react/Fiber", "react/React Hooks"],
    },
    {
      type: "category",
      label: "HTML/CSS",
      items: [
        "html/前端说的自适应是什么",
        "html/CSS Flex案例",
        "html/JavaScript的DOM汇总",
      ],
    },
    {
      type: "category",
      label: "工程化",
      items: [
        "engine/Monorepo是什么，从0到1带你配置",
        "engine/如何在前后端联调时查错和解决问题",
        "engine/执行了npm run xxx到底做了什么事情",
        "engine/docker启动数据库",
      ],
    },
    {
      type: "category",
      label: "Sequelize",
      items: [
        "sequelize/模型的基础操作",
        "sequelize/数据库表的列定义",
        "sequelize/数据查询",
        "sequelize/一个完整的Sequelize案例",
      ],
    },
    {
      type: "category",
      label: "计算机网络",
      items: ["network/HTTPS介绍", "network/TLS过程"],
    },
    {
      type: "category",
      label: "Docker",
      items: ["docker/introduce", "docker/install", "docker/basic"],
    },
    {
      type: "category",
      label: "nocobase学习",
      items: [
        "nocobase/入口文件分析",
        "nocobase/路由",
        "nocobase/首页组件分析",
        "nocobase/布局分析",
        "nocobase/组件如何渲染到页面中",
        "nocobase/如何启动后端服务",
        // 'nocobase/目录结构分析',
        "nocobase/插件模块",
        // 'nocobase/前后端请求url设计',
      ],
    },

    // {
    //   type: 'category',
    //   label: 'nocobase学习',
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'FAQ',
    //       items: ['crawler', 'DocSearch-program'],
    //     },
    //     {
    //       type: 'doc',
    //       id: 'tips',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'integrations',
    //     },
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Under the hood',
    //   items: ['how-does-it-work', 'required-configuration'],
    // },
  ],
};
