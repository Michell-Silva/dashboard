<template>
  <DashboardComponent>
    <div slot="slot-pages" class="content-pages">
      <header class="title-pages">
        <p>Clientes</p>
      </header>
    </div>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "@/pages/Dashboard/DashboardComponent";
export default {
  name: "CustomersComponent",
  components: {
    DashboardComponent,
  },
}
</script>

<style scoped lang="scss" src="./style.scss">

</style>
