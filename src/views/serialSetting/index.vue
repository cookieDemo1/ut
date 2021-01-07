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
        { to: '/serialSetting/p1', name: 'P1' }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
  .root{
    flex: 1;
    background-color: blueviolet;
    background-image: linear-gradient(to right, #202020, #292929);
    height: 100%;
    padding: 20px 30px;
  }
</style>
