<template>
  <Nf />
  <SidebarComponent />
  <router-view />
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
    margin-top: 30px;
    font-family: 'DM Sans';
    font-style: normal;
  }

  #nav {
    padding: 30px;
  }
</style>