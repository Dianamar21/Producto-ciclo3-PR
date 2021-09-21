<template>
  
  <div>
  
  <div>
    <!--   CAJON EXCLUSIVO LOGIN      -->
    <h4>LOGIN</h4>
    
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Usuario"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      

      <v-col
          cols="12"
          md="4"
        >
      <v-btn
      depressed
      color="primary"
    >
      LOGIN
    </v-btn>
      </v-col>
    </v-row>


    </v-container>
  </v-form>

  </div>
      <!--   BANNERRRRRRRRRRRRRRRRRRRRRRRRRRRR      -->
      <v-img
      lazy-src="../assets/banner_2.jpg"
      max-height="300"
      max-width="1400"
      src="../assets/banner_2.jpg"
    ></v-img>
      <!--ANTES:src="https://picsum.photos/id/11/500/300"-->
      <!--ANTES: lazy-src="https://picsum.photos/id/11/10/6"-->
      
      <br>
  
  <!--   DATOS DE TITULO ANTES DE CONSULTAR RECETA      -->
    <h1>Bienvenido a Pandaza</h1>
    <h4>El recetario colaborativo mas grande del mundo</h4>
    <recipeConsult></recipeConsult>
  </div> 

</template>



<script>

<<<<<<< HEAD
  <v-footer app>
<<<<<<< Updated upstream
    <!-- -->
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">¡Contacta al equipo desarrollador!</strong>
        <p><a href="tel:+573135253515">Llama ahora</a></p>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Power Rangers Team</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-footer>
</v-app>
</template>
=======
    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  <v-footer>
  
>>>>>>> Stashed changes
=======
import recipeConsult from '../components/recipeConsult.vue'
>>>>>>> e13a328527a36e82dbb86e58d08c4a0f57eb8b53

export default {
<<<<<<< HEAD
  components: {}
=======
  components: {
    recipeConsult
  },
>>>>>>> master
};
</script>
