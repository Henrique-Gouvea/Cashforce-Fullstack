<script setup>
  import HandShakeB from "../assets/icons/HandShakeB.vue";
</script>

<template>
  <div className="pages-nav">
    <h1> </h1>
    <div className="title-table-content">
      <div className="title-subtitle-content">
        <div className="title-content">
          <HandShakeB />
          <h2>Notas Fiscais</h2>
        </div>
        <h3>Vizualize as notas fiscais que você tem.</h3>
      </div>
      <TableGeneric :headerTable="headerTable" :bodyTable="bodyTable" />
    </div>
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
  h1 {
    border-bottom: 1px solid #DFE2EB;
    width: 91%;
    padding: 16px 46px;
    gap: 10px;
    height: 2%;
    left: 0px;
    top: 0px;
  }

  .pages-nav {
    z-index: 1;
    position: absolute;
    margin-left: 3.5%;
    width: 82%;
    height: 100%;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: #FFFFFF;
    box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
    border-radius: 15px 0px 0px 15px;
  }

  .pages-nav h3 {
    color: #727D94;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .title-table-content {
    margin-left: 3.5%;
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

  /* .title-subtitle-content {
    position: relative;
  } */
</style>