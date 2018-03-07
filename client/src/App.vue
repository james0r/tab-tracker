<template>
  <div id="app">
    <v-app>
       <v-navigation-drawer app></v-navigation-drawer>
         <v-toolbar app></v-toolbar>
           <v-content>
             <v-container fluid>
                   <page-header></page-header>
               <router-view></router-view>
             </v-container>
           </v-content>
       <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.toolbar__title {
  color: white;
}
</style>
