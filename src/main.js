import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import store from './vuex/stores';
import VueResource from 'vue-resource';

//路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
		{
			path:'/index',
			component:App
		},
		{
			path:'*',
			redirect:'/index'
		}
	
]

const router = new VueRouter({
	routes
})

var app = new Vue({
  el:'#app',	
  template: '<App/>',
  components: { App },
  router,
  store
})
