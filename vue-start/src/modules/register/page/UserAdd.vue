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
        <el-input v-model="params.email" auto-complete="off" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item prop="validCode">
        验证码:
        <el-input v-model="params.validCode" auto-complete="off" style="width: 40%"></el-input>
        <el-button type="primary" @click="getCode" size="middle" :disabled="code.codeDisabled" style="width: 12%">
          {{code.codeMsg}}
        </el-button>
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
        code: {
          codeDisabled: false,
          codeDown: 60,
          codeMsg: "获取验证码",
          timer: null
        },
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
      getCode: function () {
        debugger;
        if (this.params.phone !== null && this.params.phone !== "") {
          registerApi.sendCheckCode(this.params.phone).then((res) => {
            console.log();
            alert("验证码发送成功" + res.data.sixRandom);
          });
          let me = this.code;
          me.codeDisabled = true;
          me.timer = window.setInterval(function () {
            if (me.codeDown > 0 && me.codeDown <= 60) {
              me.codeDown--;
              if (me.codeDown !== 0) {
                me.codeMsg = "重新发送(" + me.codeDown + ")";
              } else {
                clearInterval(me.timer);
                me.codeDown = 60;
                me.codeMsg = "获取验证码";
                me.timer = null;
                me.codeDisabled = false;
              }
            }
          }, 1000)
        } else {
          alert("电话号码不能为空!")
        }
      },
    }
  }

</script>

<style scoped>

</style>
