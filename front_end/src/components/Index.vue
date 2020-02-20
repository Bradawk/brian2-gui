<template>
  <div class="index">
    <div class="main-panel">
      <top-nav></top-nav>
      <side-nav></side-nav>
      <dashboard-content @click="toggleSidebar"></dashboard-content>
    </div>
  </div>
</template>

<script>
import SideNav from './layout/SideNav.vue'
import TopNav from './layout/TopNav.vue'
import DashboardContent from './layout/Content.vue'

export default {
  name: 'Index',
  components: {
      SideNav, TopNav, DashboardContent
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
