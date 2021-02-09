---
#标题
title: 模板
#文章创建日期
date: '2021-02-05 08:00:00'
#是否开启侧边栏
sidebar: 'auto'
#是否开启子侧边栏
subSidebar: false
#所属分类
categories:
 - 模板
 - 博客
#所属标签
tags:
 - 模板
 - 博客
#  文章加密
#  如果你的密码是 123456，需要将密码字符串设置为32位的 md5 加密密文，也就是 e10adc3949ba59abbe56e057f20f883e
keys:
 - 'e10adc3949ba59abbe56e057f20f883e'
#  是否发布
publish: true
# 文章置顶
sticky: 1
---
<!-- 滚动 -->
<marquee>
张文强
</marquee>
<!-- 标题开始 -->
<!-- 名人名言 -->
<Boxx  />
<!-- tip 样式 -->
<Boxx type='tip' title='tip 标题' content='tip 内容'/>
<!-- warning 样式 -->
<Boxx type='warning' title='warning 标题' content='warning 内容'/>
<!-- danger 样式 -->
<Boxx type='danger' title='danger 标题' content='danger 内容'/>
<!-- 标题结束 -->
<Boxx type='tip' title='测试自动化部署'/>
<Boxx type='tip' title='测试自动化部署'/>
<Boxx type='tip' title='测试自动化部署'/>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
<RecoDemo :collapse="true">
 <template slot="code-template">
      <div></div>
  </template>
  <template slot="code-js">
    <pre>
      console.log(`I'm reco_luan.`)
    </pre>
  </template>
  <template slot="code-style">
    <pre>
      console.log(`I'm reco_luan.`)
    </pre>
  </template>
  测试选择代码
</RecoDemo>

``` vue
  <template>
    <div></div>
  <template>
  <script></script>
  <style></style>
```

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

:tada: :100:

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend