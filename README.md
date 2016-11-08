# mynode

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


本demo基于他人demo改进页面效果，添加部分效果（初学，代码比较丑，大神勿喷）
原文地址 https://segmentfault.com/a/1190000005863691
本demo代码已经使用vue.js 2.0，方便学习2.0的童鞋

目录结构

    components/ 文件夹用来存放我们的 Vue 组件

    vuex/ 文件夹存放的是和 Vuex store 相关的东西（state,getters，actions，mutations)

    build/ 文件是 webpack 的打包编译配置文件

    config/ 文件夹存放的是一些配置项，比如我们服务器访问的端口配置等

    dist/ 该文件夹一开始是不存在，在我们的项目经过 build 之后才会产出

    App.vue 根组件，所有的子组件都将在这里被引用

    index.html 整个项目的入口文件，将会引用我们的根组件 App.vue

    main.js 入口文件的 js 逻辑，在 webpack 打包之后将被注入到 index.html 中


功能模块

    新增笔记，新增一篇笔记，编辑区显示空的笔记内容

    删除笔记，删除一篇笔记之后，编辑区域显示当前笔记类别的第一项

    笔记列表切换，分为全部笔记和收藏笔记两种，在切换之后，编辑区域显示当前列表的第一条笔记

    收藏笔记，给当前激活的笔记打上收藏的标签

项目组件划分

    根组件 App.vue
    操作栏组件 Toolbar.vue  
    别表组件 NotesList.vue  
    笔记编辑组件 Editor.vue。  
 
创建 Vuex Store
    我们在 Vuex/ 下面建立一个 store.js 文件	
创建 Vuex Actions
    在 Vuex/ 下面建立一个 action.js，用来给组件使用的函数	
创建 Vuex Getters
    在 vuex/ 下面建立一个 getter.js 文件，用来从 store 获取数据。  
    
路由配置
    在这里我们将使用 vue-router 来做路由
    
首页引用样式    
    引用 bootstrap 样式,css文件放在/src/assets/css下  ,index.html中引用bootstrap.min.css       
    
入口逻辑    
    所有的入口逻辑我们都将在 main.js 中编写,在main.js中国编写路由
    
根组件
    根组件(App.vue)中引用了三个子组件：Toolbar.vue, NotesList.vue, Editor.vue。 
    
    
    
