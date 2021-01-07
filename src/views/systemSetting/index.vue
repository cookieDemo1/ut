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
        { to: '/systemSetting/ipAddr', name: 'IP地址' },
        { to: '/systemSetting/addrFilter', name: '地址过滤' },
        { to: '/systemSetting/userManage', name: '用户管理' },
        { to: '/systemSetting/snmp', name: 'snmp设置' },
        { to: '/systemSetting/mqtt', name: 'mqtt设置' }
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
