---
title: 节流指令
date: 2021-02-09 16:36:00
sidebar: auto
sidebarDepth: 4
categories:
 - Vue
 - Vue 指令
tags:
 - Vue 指令
 - Vue
publish: true
sticky: 2
---

## 场景介绍

以指令的方式实现节流

## 场景实现

### directive->throttle->index.js
``` js
import throttle from "./throttle";
const install = function(Vue) {
  Vue.directive("throttle", throttle);
};
if (window.Vue) {
  window["throttle"] = throttle;
  Vue.use(install);
}
throttle.install = install;
export default throttle;
```

### directive->throttle->throttle.js
``` js
function throttle(fn, wait) {
  let old = 0;
  return function() {
    /**
     * @description:获取执行函数的 this 指向
     */
    let self = this;
    /**
     * @description:获取执行函数的 参数
     */
    let args = arguments;
    /**
     * @description:获取现在的时间戳
     */
    let now = new Date().valueOf();
    if (now - old > wait) {
      fn.apply(self, args);
      old = now;
    }
  };
}
export default {
  bind(el, binding) {
    /**
     * @description:指令传参数 和 指令不传参数 的情况
     */
    if (binding.value instanceof Array) {
      const [func, time = 500] = binding.value;
      el.execFun = throttle(func, time);
    } else {
      el.execFun = throttle(binding.value, 500);
    }
    el.addEventListener("click", el.execFun);
  },
  unbind() {
    el.removeEventListener("click", el.execFun);
  },
};
```

### main.js
``` js
import throttle from "@/directive/throttle";
Vue.use(throttle);
```

### home.vue
``` vue
  <template>
    <div>
     <button v-throttle="[() => handleClick('张文强'), 3000]">节流</button>
    </div>
  <template>
  <script></script>
  <style></style>
```