const sidebar=require('./config/sidebar');
const nav=require('./config/nav');
const plugins=require('./config/plugins');
const head=require('./config/head');
module.exports = {
  title: "文问问·笔记",
  description: "Web 技术栈",
  base:'/zwq/',
  dest: "build",
  head: head,
  plugins: plugins,
  theme: "reco",
  themeConfig: {
    logo: "/images/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    author: "张文强",
    authorAvatar: "/images/avatar.png",
    record: "晋ICP备20001106号-2",
    startYear: "2021",
    smoothScroll: true,
    nav: nav,
    sidebar: sidebar,
    type: "blog",
    sidebarDepth: 6,
    subSidebar: "auto",
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
        title: "张文强",
        desc: "越努力，越幸运",
        email: "1156743527@qq.com",
        link: "https://github.com/Z0z9w2q8WQ",
      },
      {
        title: "王金玉",
        desc: "越幸运，越努力",
        link: "https://github.com/xiaoxiao-lady",
      },
    ],
    valineConfig: {
      appId: '1CfklkaW1giRXAN2jywwOhBo-gzGzoHsz',// your appId
      appKey: 'BzbRaMAAGhWNKSQAkjnKzq5a', // your appKey
    }
  },
  markdown: {
    lineNumbers: true,
  },
};
