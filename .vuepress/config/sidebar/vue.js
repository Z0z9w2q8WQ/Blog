module.exports=[
  getVueSidebarDirective(),
  getVueSidebarCommunication(),
];
function getVueSidebarDirective(){
  return {
    title: '指令',
      collapsable: true,
      children: [
        {
          title:'权限指令',
          path:'/docs/Vue/Directive/permission.md'
        },
        {
          title:'防抖指令',
          path:'/docs/Vue/Directive/debounce.md'
        },
        {
          title:'节流指令',
          path:'/docs/Vue/Directive/throttle.md'
        },
        {
          title:'隐藏指令',
          path:'/docs/Vue/Directive/hidden.md'
        }
      ],
  }
}
function getVueSidebarCommunication(){
  return {
    title: '通信',
      collapsable: true,
      children: [
        {
          title:'props 通信',
          path:'/docs/Vue/Communication/props.md'
        },
        {
          title:'$emit 通信',
          path:'/docs/Vue/Communication/emit.md'
        },
        {
          title:'$parent 通信',
          path:'/docs/Vue/Communication/parent.md'
        },
        {
          title:'$children 通信',
          path:'/docs/Vue/Communication/children.md'
        },
        {
          title:'$attrs 通信',
          path:'/docs/Vue/Communication/attrs.md'
        },
        {
          title:'$listeners 通信',
          path:'/docs/Vue/Communication/listeners.md'
        },
        {
          title:'$refs 通信',
          path:'/docs/Vue/Communication/ref.md'
        },
        {
          title:'provide/inject 通信',
          path:'/docs/Vue/Communication/provide_inject.md'
        },
        {
          title:'EventBus 通信',
          path:'/docs/Vue/Communication/eventBus.md'
        },
        {
          title:'Vuex 通信',
          path:'/docs/Vue/Communication/vuex.md'
        }
      ],
  }
}