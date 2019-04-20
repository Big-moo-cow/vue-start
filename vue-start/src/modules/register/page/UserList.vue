<template> 
  <div>
    <!--    相当于编写html的内容-->
         
    <el-button type="primary" v-on:click="query" size="small">查询</el-button>

    <el-table :data="list" stripe style="width:100%">
            
      <el-table-column prop="id" label="用户id" width="250"/>
            
      <el-table-column prop="name" label="姓名" width="100"/>
            
      <el-table-column prop="sex" label="性别" width="100"/>
            
      <el-table-column prop="age" label="年龄" width="100"/>
            
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
        total: 10,
        params: {
          page: 1,
          size: 10
        }
      }
    },
    methods: {
      changePage: function () {
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
