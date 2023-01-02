<template>
  <Nf />
  <SidebarComponent />
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
    background-color: #F6F7FC;
  }

  #nav {
    padding: 30px;
  }
</style>