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
            <span
              @click="() => updateData(body?.provider?.name, body?.provider?.tradingName,body?.provider?.responsibleEmail, body?.provider?.phoneNumber)"
              className="btn-cedente">Dados do
              cedente</span>
          </td>
        </tr>
      </tbody>
    </table>
    <PopUp v-if="popupTriggers.buttonTrigger" :ChangePopup="() => ChangePopup('buttonTrigger')">
      <h2>Dados do Cedente</h2>
      <p>Nome: {{ NameProvider }}</p>
      <p>Nome Comercial: {{ TradingName }}</p>
      <p>E-mail: {{ ResponsibleEmail }}</p>
      <p>Telefone: {{ PhoneNumber }}</p>
    </PopUp>
    <PopUp />
  </div>

</template>

<script>
  import { formatDate, formatMoneyInPtBr } from "../helpers/Converter.js";
  import PopUp from './PopUp';
  import { ref } from 'vue';

  export default {
    name: 'TableGeneric',
    props: {
      headerTable: Array,
      bodyTable: Array
    },
    data: () => ({
      NameProvider: '',
      TradingName: '',
      ResponsibleEmail: '',
      PhoneNumber: '',
    }),
    methods: {
      updateData: function (name, tradingName, responsibleEmail, phoneNumber) {
        this.NameProvider = name
        this.TradingName = tradingName
        this.ResponsibleEmail = responsibleEmail
        this.PhoneNumber = phoneNumber
        this.ChangePopup('buttonTrigger')
      },
    },
    setup() {
      const popupTriggers = ref({
        buttonTrigger: false,
      });
      const ChangePopup = (trigger) => {
        popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      }
      return {
        PopUp,
        popupTriggers,
        ChangePopup,
        formatDate,
        formatMoneyInPtBr,
      }
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