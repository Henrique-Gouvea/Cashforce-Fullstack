<script setup>
  import { formatDate, formatMoneyInPtBr } from "../helpers/Converter.js";
</script>

<template>
  <div>
    <table className="table">
      <thead clasName="table-header">
        <tr className="table-header-row">
          <th v-for="header in headerTable" v-bind:key="header.id">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="body in bodyTable" v-bind:key="body.id" className="table-body-row">
          <td>{{ body?.nNf }}</td>
          <td>{{ body?.buyer?.name }}</td>
          <td>{{ body?.provider?.name }}</td>
          <td>{{ formatDate(body?.emissionDate) }}</td>
          <td className="featured-status-value">
            {{ formatMoneyInPtBr(body?.value) }}
          </td>
          <td className="featured-status-value">
            {{ body?.orderStatusBuyer }}
          </td>
          <td className="buyer-data-btn">
            <span className="btn-cedente">Dados do cedente</span>
          </td>
        </tr>
      </tbody>
    </table>
    <PopUp>
      <h2>Dados do Cedente</h2>
      <p>Nome: {{ body?.buyer?.name }}</p>
      <p>Nome: {{ body?.buyer?.name }}</p>
      <p>Nome: {{ body?.buyer?.name }}</p>
    </PopUp>
  </div>

</template>

<script>
  import PopUp from './Popup.vue';

  export default {
    name: 'TableGeneric',
    props: {
      headerTable: Array,
      bodyTable: Array
    }
  }
</script>

<style scoped>
  table {
    width: 93%;
    display: flex;
    flex-direction: column;

  }

  tr.table-header-row {
    width: 80%;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    color: #bdbbbb;
    justify-content: space-between;
    vertical-align: middle;
    align-items: center;
  }

  .table-body-row {
    display: flex;
  }

  tr.table-body-row {
    box-sizing: border-box;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DFE2EB;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    justify-content: space-around;
    flex-grow: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    vertical-align: middle;
    align-items: center;
  }

  .btn-cedente {
    color: #727D94;
    box-sizing: border-box;
    align-items: center;
    padding: 8px 29px;
    width: 107px;
    height: 16px;
    left: 1004px;
    top: 8px;
    border: 1px solid #CAD3FF;
    border-radius: 24px;
  }

  .btn-cedente:hover {
    cursor: pointer;
    box-shadow: 5px 2px 2px rgba(0, 0, 0, 0.048);
  }

  .featured-status-value {
    color: #00ad8c;
  }
</style>