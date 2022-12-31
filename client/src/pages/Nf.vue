<template>
  <h2>Notas Fiscais</h2>
  <p>Vizualize as notas fiscais que você tem.</p>
  <TableGeneric :headerTable="headerTable" />
</template>

<script>
  import TableGeneric from '../components/Table.vue'

  export default {
    name: 'NF',
    components: {
      TableGeneric
    },
    data() {
      return {
        headerTable: ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS']
      }
    }
  }
</script>

<style>

</style>