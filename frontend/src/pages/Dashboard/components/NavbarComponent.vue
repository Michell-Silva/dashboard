<template>
  <div class="navbar">
    <h3 class="logo"><i class="fas fa-dragon"></i> Logo Marca</h3>
    <a href="#" @click.prevent="logout" class="logout"><i class="fas fa-door-open"></i> Sair</a>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods:{
    logout(){
      this.$router.push({name:'Login'});
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/SCSS/_main';
.navbar {

  .logo {
    color: white;

    .fa-dragon {
      color: #d21d1d;
    }
  }
  .logout{
    color: white;
    text-decoration: none;
  }
  .logout:hover{
    color: #d21d1d;
  }
}
</style>
