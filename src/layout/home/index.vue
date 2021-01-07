<template>
  <div class='home'>
    <left-menu></left-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import leftMenu from '../../components/leftMenu/index'
export default {
  name: 'home',
  components: {
    'left-menu': leftMenu
  }
}
</script>

<style scoped lang="scss">
  .home{
    flex: 1;
    // background-color: #1F1F1F;
    display: flex;
  }
</style>
