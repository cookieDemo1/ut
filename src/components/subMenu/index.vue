<template>
  <div class="submenu">
    <router-link v-for="(item, index) in routes" :key="index" :to="item.to">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'subMenu',

  props: {
    // routes为[{to: '/system/info', name: 'info1'}, {to: 'system/info2', name: 'info2'}]
    routes: {
      type: Array,
      default: function () {
        return [
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  .submenu{
    height: 30px;
    background-color: #1C1C1C;
    line-height: 30px;
    border: 2px;
    a{
      display: inline-block;
      font-size: 14px;
      text-decoration: none;
      margin-right: 20px;
      color: #717171;
      &:hover, &:active{
        color: #23d062;
      }

      &.router-link-exact-active, &.router-link-active{

        color: #23d062;
      }
    }
  }
</style>
