  
<template>
  <!--<v-app id="inspire">-->
  <!-- If using vue-router -->
  <!--<router-view></router-view>-->
  <!--</v-app>-->

  <!--SECCION MENU LATERAL-->
  <v-app>
    <v-navigation-drawer
      class="deep-purple accent-4"
      v-model="drawer"
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      dark
      app
    >
      <!--ANTES: v-model="drawer" src="https://picsum.photos/1920/1080?random"-->
    <!-- iconos y texto en menu lateral -->
    <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.page" 
          link
        >
          <v-list-item-icon>
            <v-icon color="yellow accent-2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="deep-purple accent-4"
      dark
      app
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <!-- ANTES:  src="https://picsum.photos/1920/1080?random"-->

      <v-app-bar-nav-icon @click="drawer = !drawer">
        <!-- otra opcion: v-on:click  -->
      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- componente se muestra solo si el usuario esta autenticado o no -->
      <!-- <v-btn icon :v-show="isAuthenticated">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

 export default {
    //
    data(){
      return{
        title: "Pandaza",
        drawer: false,
        items: [
        {icon:'mdi-home-outline', title:'Home', page: "/"},
        {icon:'mdi-email',title: 'Coments',page:"/PComent"},
        {icon:'mdi-account-plus', title:'Login',page:"/Login" },
        {icon:'mdi-silverware-fork-knife', title:'Add recipe',page:"/AddRecipe"},
        {icon:'mdi-food', title:'View recipe', page:"/ViewRecipe"},
        {icon:'mdi-shaker-outline', title:'Edit recipe', page:"/EditRecipe/"},
        {icon:'mdi-book-open-outline', title:'Recetas', page:"/ListRecipe"},

        ],
       
      // sessionToken: loadToken(),
      // isAuthenticated: !!sessionToken, 
      }
    }, 
    method:{
   loadToken() {
      const token = localStorage.getItem("pandaza-token");
      return token;
    },   
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>