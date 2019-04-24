<template> 
  <div>
    <!--    相当于编写html的内容-->
         
    <!--   查询表单-->
    <el-form :model="params">
      用户id：
      <el-input v-model="params.id" style="width: 100px"></el-input>
      用户姓名：
      <el-input v-model="params.name" style="width: 100px"></el-input>
      用户电话:
      <el-input v-model="params.phone" style="width: 100px"></el-input>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
      <router-link class="mui-tab-item" :to="{path:'/register/page/useradd'}">
        <el-button type="primary" size="small">新增页面</el-button>
      </router-link>
    </el-form>

    <el-table :data="list" stripe style="width:100%">
           
      <el-table-column prop="name" label="姓名" width="200"/>
            
      <el-table-column prop="sex" label="性别" width="200"/>
            
      <el-table-column prop="age" label="年龄" width="200"/>
            
      <el-table-column prop="phone" label="电话" width="180"/>

      <el-table-column prop="email" label="email" width="180"/>
          
    </el-table>
    <el-pagination layout="prev, pager, next" :page-size="this.params.size" v-on:current-change="changePage"
                   :total="total" :current-page="this.params.page"  style="float:right;">
          
    </el-pagination>
  </div>
</template>
<script>
  import * as registerApi from '../api/register'

  //填写js代码，实现VM的功能，创建vue实例
  export default {
    name: "UserList",
    data() {
      return {
        list: [],
        total: 0,
        params: {
          page: 1,
          size: 10,
          name: '',
          phone: '',
          id: ''
        }
      }
    },
    methods: {
      changePage: function (page) {
        this.params.page = page;
        this.query()
      },
      query: function () {
        registerApi.UserList(this.params.page, this.params.size, this.params).then((res) => {
          console.log();
          debugger;
          this.total = res.data.total;
          this.list = res.data.list;
        })
      }
    },
    mounted() {
      this.query()
    }
  }
</script>
<style>

</style>
