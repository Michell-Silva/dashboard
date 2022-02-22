<template>
  <div class="sidebar">
    <div class="top">
      <div class="avatar">
        <span><i class="fa fa-users icon"></i></span>
      </div>
      <div class="info">
        <p class="name">Michell</p>
        <p class="status">online</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li> <router-link to="Home"><i class="fa fa-home"></i> Início</router-link></li>
        <li> <router-link to="Customers"><i class="fas fa-users"></i> Clientes</router-link></li>
        <li> <router-link to="Products"><i class="fas fa-shopping-basket"></i> Produtos</router-link></li>
        <li> <router-link to="sales"><i class="fas fa-store-alt"></i> Serviços</router-link></li>
        <li> <router-link to="report"><i class="fas fa-chart-bar"></i> Relatórios</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent"
}
</script>

<style lang="scss" scoped>
@import 'src/assets/SCSS/_main';

.sidebar {

  .top{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 25px 5px;
    align-items: center;
    margin-top: 60px;

    .avatar{
      margin-right: 10px;

      span{
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #CCC;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: $red-logo;

      }
    }
    .info {
      p{
        margin: 0;
        color: #FFF;
      }
      .name {
        font-size: 15px;
      }
      .status {
        font-size: 10px;
      }
    }
  }

  .menu{
    margin-top: 15px;
    padding: 10px;

    ul li{
      margin: 15px 0;
      font-size: 18px;
      list-style: none;
      font-weight: 200;

      a {
        color: #FFF;
        text-decoration: none;
      }
    }
  }
}
</style>
