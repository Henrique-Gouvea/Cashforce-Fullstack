<template>
  <SidebarComponent />
  <Nf />
</template>

<script>
  import Nf from './pages/Nf.vue'
  import SidebarComponent from '@/components/sidebar/Sidebar'

  export default {
    name: 'App',
    components: {
      Nf,
      SidebarComponent
    }
  }

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #nav {
    padding: 30px;
  }
</style>