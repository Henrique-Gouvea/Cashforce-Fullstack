<template>
  <div className="pages-nav">
    <h2>Notas Fiscais</h2>
    <p>Vizualize as notas fiscais que você tem.</p>
    <TableGeneric :headerTable="headerTable" :bodyTable="bodyTable" />
  </div>
</template>

<script>
  import TableGeneric from '../components/Table.vue'
  import api from "../helpers/api";

  export default {
    name: 'NF',
    components: {
      TableGeneric
    },
    data() {
      return {
        headerTable: ['NOTA FISCAL', 'SACADO', 'CEDENTE', 'EMISSÃO', 'VALOR', 'STATUS', ''],
        bodyTable: []
      }
    },
    created() {
      this.getBody();
    },
    methods: {
      getBody() {
        api
          .get("/user/nfs")
          .then((res) => {
            this.bodyTable = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  }
</script>

<style>
  .pages-nav {
    position: fixed;
    background-color: red;
    padding-left: 48px;
    padding-top: 40px;
    padding-right: 47px;
    margin-left: 20%;
    z-index: 1;
  }
</style>