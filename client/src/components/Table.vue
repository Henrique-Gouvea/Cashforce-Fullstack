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
          <td className="featured-value">
            {{ body?.value }}
          </td>
          <td className="featured-value bold">
            {{ body?.orderStatusBuyer }}
          </td>
          <td className="buyer-data-btn">
            <button className="btn-cedente">Dados do cedente</button>
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
    /* width: 60%;
    display: flex;
    flex-direction: column; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    position: absolute;
    width: 100%;
    height: 214px;
    left: 0px;
    top: 176px;

  }

  thead.table-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  tr.table-header-row {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: uppercase;
    color: #bdbbbb;
  }

  tr.table-body-row {
    box-sizing: border-box;
    width: 1177px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DFE2EB;
    border-radius: 6px;
    flex: none;
    flex-grow: 0;
  }
</style>