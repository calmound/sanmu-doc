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
      type: 'category',
      label: 'Vue入门系列',
      items: [
        'vue/01 环境搭建',
        'vue/02 模版语法',
        'vue/03 条件渲染和列表渲染',
        'vue/04 事件处理和表单绑定',
        'vue/05 组件',
        'vue/vue-router4基础知识梳理',
        'vue/10分钟带你入门pinia',
      ],
    },
    {
      type: 'category',
      label: 'Vue原理系列',
      items: ['vue-advance/如何调试vue源码'],
    },
    {
      type: 'category',
      label: 'React入门系列',
      items: ['record-extractor', 'templates', 'manage-your-crawls'],
    },
    {
      type: 'category',
      label: 'Requirements, tips, FAQ',
      items: [
        {
          type: 'category',
          label: 'FAQ',
          items: ['crawler', 'DocSearch-program'],
        },
        {
          type: 'doc',
          id: 'tips',
        },
        {
          type: 'doc',
          id: 'integrations',
        },
      ],
    },
    {
      type: 'category',
      label: 'Under the hood',
      items: ['how-does-it-work', 'required-configuration'],
    },
  ],
};
