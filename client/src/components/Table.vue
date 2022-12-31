<template>
  <div class="hello">
    <table className="table">
      <thead>
        <tr v-for="header in headerTable" v-bind:key="header.id" className="table-header">
          <th>{{header}}</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: 'TableGeneric',
    props: {
      headerTable: Array
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  tr.table-header {
    display: flex;
    flex-direction: column;
  }
</style>