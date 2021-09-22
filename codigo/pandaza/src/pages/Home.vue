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

import recipeConsult from '../components/recipeConsult.vue'


export default {
  components: {
    recipeConsult
  },
   
};
</script>
