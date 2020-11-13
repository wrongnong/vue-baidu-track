# vue-baidu-track

> Vuejs 百度埋点插件

## 项目地址

https://github.com/wrongnong/vue-baidu-track

## 1. 安装

```
npm install vue-baidu-track --save

```
直接在页面中引用
```
<script src="./node_modules/vue-uweb/dist/index.js"><script>
```

或者通过es6模块加载

```
import bt from 'vue-baidu-track'

```
#### options

<table><tr><td>参数</td><td>必须</td><td>默认</td><td>说明</td><td>备注</td></tr><tr><td>siteId</td><td>是</td><td></td><td>绑定要接受API请求的统计代码</td><td></td></tr><tr><td> debug </td><td>否</td><td>false</td><td>调试模式下将在控制台中输出调用window._hmt时传递的参数</td><td>请不要在生产环境中使用，避免造成安全隐患</td></tr><tr><td> src </td><td>否</td><td>https://hm.baidu.com/hm.js?SITEID</td><td>指定统计脚本标签的 src 属性</td><td></td></tr></table>

## 2. bt API

### 2.1 trackEvent

用于发送页面上按钮等交互元素被触发时的事件统计请求。

#### 用法

```
this.$bt.trackEvent(category,action,opt_label,opt_value)
```

#### 参数

<table><tr><td>参数</td><td>必须</td><td>类型</td><td>说明</td></tr><tr><td> category </td><td>是</td><td> string </td><td>表示事件发生在谁身上</td></tr>
<tr><td> action </td><td>是</td><td> string </td><td>表示访客跟元素交互的行为动作</td></tr><tr><td> opt_label </td><td>否</td><td> string </td><td>用于更详细的描述事件</td></tr><tr><td> opt_value </td><td>否</td><td> int </td><td>用于填写打分型事件的分值，加载时间型事件的时长，如果填写为其他形式，系统将按0处理。若填写为浮点小数，系统会自动取整，去掉小数点。</td></tr></table>

### 2.2 trackPageview

用于发送某个URL的PV统计请求，适用于统计AJAX、异步加载页面，友情链接，下载链接的流量

#### 用法

```
this.$bt.trackPageview(pageURL)

```

#### 参数

<table><tr><td>参数</td><td>必须</td><td>类型</td><td>说明</td></tr><tr><td>pageURL </td><td>是</td><td> string </td><td>自定义虚拟PV页面的URL地址，填写以斜杠‘/’开头的相对路径，系统会自动补全域名</td></tr></table>

## 3. track 指令

vue-baidu-track 提供 track-event，track-pageview 两个指令，开发者可以直接在 html 模版中使用来统计网站数据

### 3.1 track-event

使用指令 v-track-event 监听事件， 通过 modifiers 指定事件类型，将自动为绑定元素添加事件监听，当事件触发调用统计代码。 如不指定事件，默认监听 click 事件。

可通过逗号分隔的字符串或对象字面量传递参数，以字符串传递时请注意参数顺序，可参考trackEvent API。

跟踪自定义事件使用 v-track-event.someEvent:custom

#### 用法

```

<button v-track-event="'category, action'"></button> // 跟踪click事件

```

### 3.2 track-pageview

使用指令 track-pageview 统计虚拟 PV ，一般可以配合 v-show 或 v-if 来统计局部动态视图的 PV。

可通过逗号分隔的字符串或对象字面量传递参数，以字符串传递时请注意参数顺序，可参考trackPageview API
用法

```
<div v-show="show" v-track-pageview="'/bar'">bar</div> //  跟踪 v-show 绑定元素的虚拟pv

<div v-if="show" v-track-pageview="'/foo'">foo</div> // 跟踪 v-if 绑定元素的虚拟pv

<div v-track-pageview="'/tar'"></div> // 以字符串指定受访页面和来源

<div v-track-pageview="{pageURL:'/zoo''}"></div> // 以对象字面量指定受访页面和来源
```
