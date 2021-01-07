<template>
  <div class="menu">
    <router-link
      v-for="(item, index) in routes"
      :key="index"
      :to="item.to"
      class="menu-item">
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  data () {
    return {
      routes: [
        { to: '/systemHome', name: '系统首页' },
        { to: '/systemSetting', name: '系统设置' },
        { to: '/serialSetting', name: '串口设置' },
        { to: '/workMode', name: '工作模式' },
        { to: '/statusSearch', name: '状态查询' },
        { to: '/deviceManage', name: '设备管理' }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
  .menu{
    width: 180px;
    background-color: #161616;
    height: 100%;

    .router-link-active, .router-link-exact-active{
      background-color: #27D967;
      color: #FFFFFF !important;
    }

    .menu-item{
      display: block;
      text-align: center;
      font-size: 14px;
      color: #6C6C6C;
      width: 125px;
      margin: 20px auto;
      // background-color: #292929;
      height: 30px;
      line-height: 30px;
      font-weight: bold;
      border-radius: 4px;

      &:hover{
        background-color: #27D967;
        color: #FFFFFF;
        transition: all linear .2s;
      }
    }
  }
</style>
