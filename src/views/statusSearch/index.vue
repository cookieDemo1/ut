<template>
  <div class="root">
    <submenu :routes="routes"></submenu>
    <router-view></router-view>
  </div>
</template>

<script>
import submenu from '../../components/subMenu/index'

export default {
  components: {
    submenu
  },
  data () {
    return {
      routes: [
        { to: '/statusSearch/comParams', name: '串口通信参数' },
        { to: '/statusSearch/networkLink', name: '网络连接状态' },
        { to: '/statusSearch/serialCom', name: '串口通信状态' }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
  .root{
    flex: 1;
    background-image: linear-gradient(to right, #202020, #292929);
    height: 100%;
    padding: 20px 30px;
  }
</style>
