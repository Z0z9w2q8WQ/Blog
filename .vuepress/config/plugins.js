module.exports=[
  // 流程图插件
  ["flowchart"],
  //标题插件
  [
    "dynamic-title",
    {
      showIcon: "/zwq/images/favicon.ico",
      showText: "欢迎！",
      hideIcon: "/zwq/images/failure.ico",
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
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
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
  ['@vuepress-reco/extract-code'],
  ['@vuepress/last-updated', 
  {
    transformer: (timestamp, lang) => {
      return (new Date(timestamp)).toUTCString() 
    }
  }],
  ['@vuepress-reco/vuepress-plugin-pagation', {
    perPage: 16
  }],
]