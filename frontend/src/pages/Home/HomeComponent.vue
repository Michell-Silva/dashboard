<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title-pages">
        <p>Início</p>
      </header>

      <div class="row">
        <div class="col-12 col-md-3">
          <CardsComponent
              :type="'Clientes'"
              :percentage="'7%'"
              :icon="'fa-users'"
              :qtd="qtd"
          ></CardsComponent>
        </div>

        <div class="col-12 col-md-3">
          <CardsComponent
              :type="'Produtos'"
              :percentage="'8%'"
              :icon="'fa-shopping-basket'"
              :qtd="'28'"
          ></CardsComponent>
        </div>

        <div class="col-12 col-md-3">
          <CardsComponent
              :type="'Serviços'"
              :percentage="'33%'"
              :icon="'fa-store-alt'"
              :qtd="'90'"
          ></CardsComponent>
        </div>

        <div class="col-12 col-md-3">
          <CardsComponent
              :type="'Relatórios'"
              :percentage="'12%'"
              :icon="'fa-chart-bar'"
              :qtd="'350'"
          ></CardsComponent>
        </div>
      </div>

      <div class="mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <ListComponent
                :data="users"
                description="Clientes"
                :columns="['Nome', 'Email']"
            ></ListComponent>
          </div>

          <div class="col-12 col-md-6">
            <ListComponent
                :data="users"
                description="Produtos"
                :columns="['Nome', 'Valor']"
            ></ListComponent>
          </div>
        </div>
      </div>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent'
import CardsComponent from "@/components/CardsComponent";
import ListComponent from "@/components/ListComponent";

const axios = require('axios').default;

export default {
  name: "HomeComponent",

  props: {

  },

  mounted () {
    this.getUsers();
  },
  data () {
    return {
      users: [],
      qtd: 0,
    }
  },
  methods: {
    async getUsers(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if(response.status === 200) {
        console.log(response.data);
        this.users = response.data;
        this.qtd = this.getCount();

      }else{
        console.error('Ocorreu um erro na API.')
      }
    },
    getCount: function (){
      return this.users.length ?? 0;
    }
  },
  computed: {
  },

  components:{
    DashboardComponent,
    CardsComponent,
    ListComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
