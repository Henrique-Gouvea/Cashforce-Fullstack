<template>
  <h2>Notas Fiscais</h2>
  <p>Vizualize as notas fiscais que você tem.</p>
  <TableGeneric msg="Welcome to Table" />
</template>

<script>
  import TableGeneric from '../components/Table.vue'

  export default {
    name: 'NF',
    components: {
      TableGeneric
    }
  }
</script>

<style>

</style>