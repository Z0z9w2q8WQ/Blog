module.exports=[
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
    link: "/Timeline/",
    icon: "reco-date",
  },
  {
    text: "Me",
    icon: "reco-message",
    items: [
      {
        text: "GitHub",
        link: "https://github.com/Z0z9w2q8WQ",
        icon: "reco-github",
      },
    ],
  },
]

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
