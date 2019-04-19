import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// 定义路由配置
let routes = []
let concat = (router) => {
  routes = routes.concat(router)
}
// // 导入路由规则
import HomeRouter from '../../modules/home/router'
import RegisterRouter from '../../modules/register/router'
// 合并路由规则
concat(HomeRouter);
concat(RegisterRouter);
export default routes;
