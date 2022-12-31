<template>
  <TableGeneric msg="Welcome to Table" />
</template>

<script>
  import TableGeneric from '../components/Table.vue'

  export default {
    name: 'App',
    components: {
      TableGeneric
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
</style>