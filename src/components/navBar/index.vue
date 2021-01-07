<template>
  <div class="navbar">
    <img src="../../assets/imgs/logo.png" class="logo" alt="">
    <p class="title">{{ title }}</p>
    <img class="exit" src="../../assets/imgs/exit.png" @click="exit" alt="">
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['title'],
  methods: {
    exit () {
      this.$confirm('确定退出吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({ message: '已取消退出！', duration: 2000 })
      })
    }

  }
}
</script>

<style scoped lang="scss">
  .navbar{
    height: 60px;
    // background-color: #3A3849;
    background-color: #171717;
    position: relative;

    .logo{
      width: 102px;
      height: 26px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0 auto 40px;
    }

    .title{
      margin-left: 160px;
      font-size: 20px;
      display: inline-block;
      height: 60px;
      line-height: 60px;
      font-weight: bold;
      color: #8c8c98;
    }

    .exit{
      width: 30px;
      height: 30px;
      float: right;
      margin: 15px 50px 0 0;
      cursor: pointer;
    }

  }
</style>
