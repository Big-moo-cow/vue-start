import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/modules/register/components/HelloWorld'
import Hello from '@/components/Hello'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
  ]
})
