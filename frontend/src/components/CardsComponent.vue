<template>
  <div class="my_card">

    <div class="content top">
      <h3>{{ type }}</h3>
      <p class="percentage"><i class="fas fa-arrow-alt-circle-up"></i>{{ percentage }}</p>
    </div>

    <div class="content footer">
      <i :class="['fa ico', icon]"></i>
      <p class="qtd">{{ qtd }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardsComponent",

  props:{
    type: String,
    percentage: String,
    icon: String,
    qtd: String,
  },

  mounted () {
    /*code*/
  },

  data () {
    return {
      /*code*/
    }
  },

  methods: {
    /*code*/
  },

  computed: {
    /*code*/
  },
}
</script>

<style lang="scss" scoped>

@import 'src/assets/SCSS/_main';

.my_card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: $purple;
  padding: 15px;
  border-radius: 7px;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .top{

    .percentage{
      color: $green;
    }
  }

  .footer{

    .ico{
      font-size: 40px;
    }
    .qtd {
      font-size: 30px;
      margin: 0;
    }
  }
}
</style>
