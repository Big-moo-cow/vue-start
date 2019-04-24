<template>
  <div>
    <el-form :model="params" label-width="80px">

      <el-form-item prop="userName">
        用户名字:
        <el-input v-model="params.name" auto-complete="off" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item prop="userCode">
        用户密码:
        <el-input placeholder="请输入密码" v-model="params.code" show-password style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item prop="userSex">
        用户性别:
        <el-select v-model="params.sex" placeholder="请选择" style="width: 50%">
          <el-option value="男">
            男
          </el-option>
          <el-option value="女">
            女
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="userAge">
        用户年龄:
        <el-input v-model="params.age" auto-complete="off" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item prop="userPhone">
        用户电话:
        <el-input v-model="params.phone" auto-complete="off" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item prop="userEmail">
        用户email:
        <el-input v-model="params.phone" auto-complete="off" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item prop="validCode">
        验证码:
        <el-input v-model="params.validCode" auto-complete="off" style="width: 40%"></el-input>
        <el-button type="primary" v-on:click="offButton" size="small" :disabled="unDisabled">发送验证码</el-button>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="addSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
  import * as registerApi from '../api/register'

  export default {
    name: "UserAdd",
      data() {

      return {
        unDisabled:false,

        params: {
          name: "",
          age: "",
          phone: "",
          sex: "",
          email: "",
          code: "",
          validCode: ""
        }
      }
    },
    methods: {
      addSubmit: function () {
      },
      offButton: function () {
        var num = 60;
        var int = setInterval(()=>{
          num>0?num--:clearInterval(int)
        }, 1000);

      },
    }
  }

</script>

<style scoped>

</style>
