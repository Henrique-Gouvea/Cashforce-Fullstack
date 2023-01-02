<script setup>
  import CashForceLogo from "../../assets/images/logo-cashforce.vue";
  import HandShake from "../../assets/icons/HandShake.vue";
</script>

<template>
  <nav className="sidebar">
    <CashForceLogo className="logo" />
    <div className="options-sidebar">
      <div className="options-content">
        <HandShake class="img-icon-sidebar" />
        <a>Notas fiscais</a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'SidebarComponent',
  }
</script>

<style>
  :root {
    --sidebar-bg-color: #FBFDFE;
    --sidebar-options-color: #00ad8c;
  }
</style>

<style scoped>
  .sidebar {
    /* color: white;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 30px;
    display: flex;
    flex-direction: column; */
    position: absolute;
    width: 18%;
    height: 100%;
    left: 0px;
    top: 0px;

  }

  .svg {
    width: 160px;
    height: 30px;
    left: 24px;
    top: 25px;
  }

  nav {
    width: 100%;
    background-color: var(--sidebar-bg-color);
  }

  .options-sidebar {
    height: 30px;
    border-left: var(--sidebar-options-color);
  }

  .options-content:hover {
    cursor: pointer;
    border-left: 4px var(--sidebar-options-color) solid;
  }

  .options-content {
    display: flex;
    align-items: center;
    height: 100%;
    column-gap: 15px;
    padding: 15px;
    margin-top: 30px;
  }

  .options-content img {
    margin-left: 21px;
  }

  .options-content a {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: var(--sidebar-options-color);
  }

  .options-content a:hover {
    color: #354974;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    margin: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .img-icon-sidebar {
    width: 30px;
  }
</style>