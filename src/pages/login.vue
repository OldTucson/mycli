<template>
  <div id="login">
      <el-form ref="loginForm" :model="form" label-width="80px" :rules="rules">
          <el-form-item prop="phone" label="手机号">
              <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
              <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form>
  </div>
</template>

<script>
import {LOGIN} from '@/utils/api'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 这一句 还是没有 qs.stringify
// import {md5} from '@/utils/md5'
import {validatePhone} from '@/utils/validates'
export default {
  name: 'login',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [{
          required: true,
          message: '请输入手机号'
        }, {
          validator: validatePhone,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // eslint-disable-next-line standard/object-curly-even-spacing
          let {phone, password } = this.form
          // eslint-disable-next-line no-undef
          // password = md5(password)
          let obj = {
            phone,
            password
          }
          LOGIN(obj).then(res => {
            console.log(res)
          })
        }
      })
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
