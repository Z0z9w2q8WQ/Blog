---
title: 防抖指令
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

以指令的方式实现防抖

## 场景实现

### directive>debounce>index.js
``` js
import debounce from "./debounce";
const install = function(Vue) {
  Vue.directive("debounce", debounce);
};
if (window.Vue) {
  window["debounce"] = debounce;
  Vue.use(install);
}
debounce.install = install;
export default debounce;
```

### directive>debounce>debounce.js
``` js
function debounce(fn, wait) {
  let timer;
  return function() {
    /**
     * @description: 获取执行函数 this 指向
     */

    let self = this;
    /**
     * @description: 获取执行函数 参数
     */
    let args = arguments;
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(() => {
      fn.apply(self, args);
    }, wait);
  };
}
export default {
  bind(el, binding) {
    /**
     * @description:指令传参数 和 指令不传参数 的情况
     */
    if (binding.value instanceof Array) {
      const [func, time = 500] = binding.value;
      el.execFun = debounce(func, time);
    } else {
      el.execFun = debounce(binding.value, 500);
    }
    el.addEventListener("click", el.execFun);
  },
  unbind() {
    el.removeEventListener("click", el.execFun);
    delete el.menuFun;
  },
};
```

### main.js
``` js
import debounce from "@/directive/debounce";
Vue.use(debounce);
```

### home.vue
``` vue
  <template>
    <div>
     <button v-debounce="[() => handleClick('张文强'), 3000]">防抖</button>
    </div>
  <template>
  <script></script>
  <style></style>
```