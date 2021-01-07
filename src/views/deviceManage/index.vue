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
        { to: '/deviceManage/firmwareUpdate', name: '固件升级' },
        { to: '/deviceManage/recovery', name: '恢复出厂' },
        { to: '/deviceManage/portReboot', name: '端口重启' },
        { to: '/deviceManage/systemReboot', name: '系统重启' }
      ]
    }
  },
  created () {
    console.log('hello word')
    // this.$loading({
    //   lock: true,
    //   text: 'Loading',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // })
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
