---
title: 权限指令
date: '2021-02-09'
sidebar: true
subSidebar: "auto"
categories:
 - Vue
 - Vue 指令
tags:
 - Vue 指令
 - Vue
publish: true
sticky: 2
---

<h2>场景介绍</h2>
<p>如果我们项目有一些按钮的权限，我们定义一个权限指令，来控制按钮的显示与隐藏</p>

<h2>场景实现</h2>
<h3>directives>role>index.js</h3>

``` js
import checkRolePermission from "./role";
const install = function(Vue) {
  Vue.directive("checkRolePermission", checkRolePermission);
};
if (window.Vue) {
  window["checkRolePermission"] = checkRolePermission;
  Vue.use(install);
}
checkRolePermission.install = install;
export default checkRolePermission;
```

<h3>directives>role>role.js</h3>

``` js
import store from "store";
function checkRolePermission(el, binding) {
  const { value } = binding;
  const haveRoles = store.getters && store.getters.roles;
  if (value && value instanceof Array) {
    if (value.length > 0) {
      const needRoles = value;
      const hasPermission = haveRoles.some((role) => {
        return needRoles.includes(role);
      });
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error("需要配置角色信息，比如 ['admin'] admin 角色");
  }
}
export default {
  inserted(el, binding) {
    checkRolePermission(el, binding);
  },
  update(el, binding) {
    checkRolePermission(el, binding);
  },
};
```

<h3>main.js</h3>

``` js
import checkRolePermission from "directives/role/";
Vue.use(checkRolePermission);
```

<h3>home.vue</h3>

``` js
<button v-checkRolePermission="['admin']">admin 按钮</button>
<button v-checkRolePermission="['user']">用户按钮</button>
```