import Home from '@/modules/home/page/home.vue';
import UserList from '../page/UserList.vue';

export default [{
  path: '/',
  component: Home,
  name: 'CMS',
  hidden: false,
  children:[
    {path:'/register/page/userList',name:'用户列表',component:UserList,hidden:false}
  ]
}
]
