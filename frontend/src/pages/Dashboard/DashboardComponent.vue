<template>
  <div class="main">
    <div class="sidebar">
      <SidebarComponent/>
    </div>
    <div class="content-right">
      <div class="navbar">
        <NavbarComponent/>
      </div>
      <div class="pages">
        <slot name="slot-pages"></slot>
      </div>
    </div>
  </div>
</template>

<script>
/*import*/
import SidebarComponent from '../Dashboard/components/SidebarComponent'
import NavbarComponent from '../Dashboard/components/NavbarComponent'

export default {
  name: "DashboardComponent",
  components:{
    SidebarComponent,
    NavbarComponent,
  }
}
</script>

<style lang="scss" src="./style.scss" scoped/>
