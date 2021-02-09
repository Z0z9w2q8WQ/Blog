---
title: 隐藏指令
date: '2021-02-09 16:36:00'
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

点击元素，元素显示；点击元素之外的部分，元素隐藏

## 场景实现

### directive>hidden>index.js
``` js
import hidden from "./hidden";
const install = function(Vue) {
  Vue.directive("hidden", hidden);
};
if (window.Vue) {
  window["hidden"] = hidden;
  Vue.use(install);
}
hidden.install = install;
export default hidden;  
```

### directive>hidden>hidden.js
``` js
export default {
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.menuFun = documentHandler;
    document.addEventListener("click", el.menuFun);
  },
  unbind(el) {
    document.removeEventListener("click", el.menuFun);
    delete el.menuFun;
  },
};
```

### main.js
``` js
import hidden from "@/directive/hidden";
Vue.use(hidden);
```

### home.vue
``` js
<div
  class="box"
  style="width:200px;height:200px;background-color:red"
  v-hidden="
    () => {
      show = false;
    }
  "
>
  <button @click="show = !show">切换</button>
  <div
    class="content"
    style="width:100px;height:100px;background-color:yellow"
    v-show="show"
  ></div>
</div>
```