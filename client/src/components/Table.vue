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
          <td>{{ body?.emissionDate }}</td>
          <td className="featured-status-value">
            {{ body?.value }}
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
  </div>

</template>

<script>
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
    margin-left: 3.5%;
    display: flex;
    flex-direction: column;

  }

  tr.table-header-row {
    /* width: 100%; */
    font-style: normal;
    /* font-weight: 700; */
    font-size: 12px;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
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
    /* width: 1177px; */
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DFE2EB;
    border-radius: 6px;
    /* flex: none; */
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    justify-content: space-around;
    flex-grow: 0;
    margin: 10px;
    vertical-align: middle;
    align-items: center;
  }

  .btn-cedente {
    box-sizing: border-box;

    /* Auto layout */
    align-items: center;
    padding: 8px 29px;

    width: 165px;
    height: 32px;
    left: 1004px;
    top: 8px;

    /* P. Blue / 2 */

    border: 1px solid #CAD3FF;
    border-radius: 24px;
  }

  .featured-status-value {
    color: #00ad8c;
  }
</style>