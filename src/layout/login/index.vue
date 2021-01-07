<template>
  <div class="login">
    <div class="login-area">
      <p class="tip">请登陆</p>
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <button @click="login">Sign In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === '' || this.username === '') {
        this.$message({ type: 'error', message: '用户名不能为空！', duration: 2000 })
        return
      }
      localStorage.setItem('token', this.username)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    flex: 1;
    background-color: #1F1F1F;
    display: flex;
  }
  .login-area{
    width: 480px;
    height: 450px;
    background-color: #292929;
    border-radius: 4px;
    margin: 0 auto;
    align-self: center;
    text-align: center;

    .tip{
      margin: 100px 0 30px;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 3px;
    }

    input{
      display: inline-block;
      height: 38px;
      width: 370px;
      border-radius: 4px;
      outline: none;
      margin-bottom: 30px;
      border: 1px solid #464646;
      background-color: #292929;
      font-size: 16px;
      padding-left: 10px;
      color: #FFFFFF;
      box-sizing: border-box;
    }

    button{
      width: 370px;
      height: 50px;
      border-radius: 4px;
      background-color: #27D967;
      color: #FFFFFF;
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 16px;

      &:hover{
        opacity: .8;
      }

      &:active{
        transform: translate(1px, 1px);
      }
    }
  }
</style>
