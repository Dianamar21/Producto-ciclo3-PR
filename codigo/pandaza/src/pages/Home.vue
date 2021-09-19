<template>
  <v-app>
  <v-navigation-drawer class="deep-purple accent-4"
      v-model="drawer" src="https://picsum.photos/1920/1080?random" 
      dark
      app >
    <!-- iconos y texto en menu lateral -->
    <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar
      color="deep-purple accent-4"  dark app
         
      src="https://picsum.photos/1920/1080?random"
     
      >
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <!-- otra opcion: v-on:click  -->
        
      </v-app-bar-nav-icon>
      
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
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
export default {
  components: {},
};
</script>
