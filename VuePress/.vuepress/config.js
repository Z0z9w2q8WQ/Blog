module.exports = {
  title: "文问问·笔记",
  description: "Web 技术栈",
  // base:'./',
  base:'/',
  dest: "build",
  head: getHead(),
  plugins: getPlugins(),
  theme: "reco",
  themeConfig: {
    logo: "/images/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "张文强",
    authorAvatar: "/images/avatar.png",
    record: "晋ICP备20001106号-2",
    startYear: "2021",
    smoothScroll: true,
    nav: getNav(),
    sidebar: getSidebar(),
    type: "blog",
    blogConfig: {
      category: {
        location: 3,
        text: "分类",
      },
      tag: {
        location: 4,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
/**
 * @description: 配置头部
 */
function getHead(){
  return [
    // 网页标签栏图标
    [
      "link",
      {
        rel: "icon",
        href: "/images/favicon.ico",
      },
    ],
    // 移动栏优化
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    //引入 jquery
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
      },
    ],
    // 引入鼠标点击脚本
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ]
}
/**
 * @description: 配置插件
 */
function getPlugins(){
  return [
    // 流程图插件
    ["flowchart"],
    //标题插件
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "欢迎！",
        hideIcon: "/failure.ico",
        hideText: "拜拜！",
        recoverTime: 2000,
      },
    ],
    //标签插件
    ["vuepress-plugin-boxx"],
    //复制插件
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
    //更新刷新插件
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    //卡通人物
    [
      "vuepress-plugin-helper-live2d",
      {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          /**
           * @description: 模型网址
           * 网址：https://zhousiwei.gitee.io/live2d-widget.js/examples/index.html
           */
          model: "wanko",
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 270, // 模型的长度(default: 135)
            height: 400, // 模型的高度(default: 300)
            hOffset: -30, //  水平偏移(default: 65)
            vOffset: -100, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    // 阅读进度条
    ['reading-progress'],
  ]
}
/**
 * @description: 配置导航
 */
function getNav(){
  return [
    {
      text: "主页",
      link: "/",
      icon: "reco-home",
    },
    {
      text: "笔记",
      icon: "reco-message",
      items: getDocsNav()
    },
    {
      text: "时间线",
      link: "/timeline/",
      icon: "reco-date",
    },
    {
      text: "Me",
      icon: "reco-message",
      items: [
        {
          text: "GitHub",
          link: "https://github.com/recoluan",
          icon: "reco-github",
        },
      ],
    },
  ]
}
function getSidebar(){
  return {
    "/docs/Template/":getTemplate(),
    "/docs/Home/": getHomeSidebar(),
    "/docs/Vue/":getVueSidebar(),
  }
}
function getDocsNav(){
  return [
    {
      text:'入门',
      collapsable: false,
      link:'/docs/Template/',
    },
    {
      text: "技术",
      collapsable: false,
      link: "/docs/Home/",
    },
  ]
}
function getTemplate(){
  return [
    ''
  ]
}
function getHomeSidebar(){
  return [
    {
      title:'技术栈',
      collapsable: false,
    },
    {
      title:'Vue',
      collapsable: false,
      path:'/docs/Vue/',
    },
    {
      title:'React',
      collapsable: false,
      path:'',
    }
  ]
}
function getVueSidebar() {
  return [
    {
      title: '分组一',
      collapsable: false,
      children: [
        {
          title:'测试一',
          path:'/docs/Vue/test1'
        },
        {
          title:'测试二',
          path:'/docs/Vue/test2'
        }
      ],
    },
    {
      title: '分组二',
      collapsable: false,
      children: [
        {
          title:'测试三',
          path:'/docs/Vue/test3'
        },
        {
          title:'测试四',
          path:'/docs/Vue/test4'
        }
      ],
    },
    {
      title: "分组三",
      collapsable: false,
      children: [
        {
          title:'测试五',
          path:'/docs/Vue/test5'
        },
      ],
    },
  ];
}