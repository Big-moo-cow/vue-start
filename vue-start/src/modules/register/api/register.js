let sysConfig = require('../../../../config/sysConfig')
let apiUrl = sysConfig.xcApiUrlPre;
import axios from 'axios';
//根据条件获取用户列表
export const UserList = (page, size, params) => {
  //错误方式
  // $.ajax({
  //   type: 'GET',
  //   url: apiUrl+'/register/user',
  //   async: false,//同步
  //   data: {
  //     'page': page,
  //     'size': size,
  //     'param': param
  //   },
  //   dataType:'json',
  //   success:function () {
  //     alert("success")
  //   },
  //   error:function () {
  //     alert("failed")
  //   }
  //
  // })

  return axios.get(apiUrl + '/register/list/' + page + '/' + size, {
    params: {
      name: params.name,
      id: params.id,
      phone: params.phone
    }
  })
};

// 发送验证码
export const sendCheckCode = (phone) => {
  return axios.post(apiUrl + '/checkCode/send/' + phone);
};

//校验验证码
export const checkCode = () => {

};
