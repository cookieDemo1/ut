<template>
  <div id="app">
    <navbar title="串口服务器"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSystemInfo } from './api/login/index'
import navbar from './components/navBar/index'
export default {
  name: 'App',
  components: {
    navbar
  },
  created () {
    this.getSystemInfo()
  },
  methods: {
    getSystemInfo () {
      getSystemInfo().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style lang="scss">
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #CCC;
}
</style>
