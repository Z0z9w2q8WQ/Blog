export function getVueSidebar() {
  return [
    {
      title: '分组一',
      collapsable: false,
      children: [
        "",
        "test1",
      ],
    },
    {
      title: '分组二',
      collapsable: false,
      children: [
        "test2",
        "test3",
      ],
    },
    {
      title: "完整代码",
      collapsable: false,
      children: ["test4", "test5"],
    },
  ];
}