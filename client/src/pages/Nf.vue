<script setup>
  import HandShakeB from "../assets/icons/HandShakeB.vue";
</script>

<template>
  <div className="pages-nav">
    <div className="title-content">
      <HandShakeB />
      <h2>Notas Fiscais</h2>
    </div>
    <h3>Vizualize as notas fiscais que você tem.</h3>
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
    padding-top: 70px;
    padding-right: 47px;
    margin-left: 20%;
    z-index: 1;
  }

  .pages-nav h3 {
    color: #727D94;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .title-content {
    color: #021B51;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title-content h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
</style>