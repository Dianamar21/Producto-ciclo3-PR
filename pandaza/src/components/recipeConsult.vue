<template>
 <div> 
<div>
    <v-text-field
            label="Consulta tu receta"
            placeholder="Placeholder"
          ></v-text-field>
        
        <v-btn depressed> Consultar </v-btn>
    </div>

<div id="resultado">
     <v-row>
         <v-col v-for="recipe in recipes" :key="recipe.id">>
           <!--ANTES:<v-col v-for="n in 10" :key="n">-->
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slots="progress">
      <v-progress-linear
        color="blue darken-4"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src= "recipe.image"
      
    ></v-img >
    <!--ANTES: src="https://cdn.vuetifyjs.com/images/cards/cooking.png"-->

    <v-card-title>{{recipe.title}} </v-card-title>
    <!--ANTES: <v-card-title>Cafe Badilico</v-card-title>-->

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>{{recipe.base}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  </v-row>
  </div>

  <div>
    PRUEBAS DE MUESTRA DE registros
    <v-row>
      <v-col v-for="reg in registros"
      :key="reg.name"
      >
      {{reg.name}}
      </v-col>
    </v-row>
  </div>

</div>

</template>

<script>

//import recipes from "../dummy/recipes.json";
import SignUp from "../pages/SignUp.vue";


export default {
    name: 'recipeConsult',
    //dummy: {recipes},
  props: {
    msg: String
  },

  pages: {
    SignUp,
  },


  // ============== PRUEBAS BASE DE DATOS ==================
  data(){
    return{
      
      // Llamado para recojer Datos usuarios registrados
      registros: [],

      recipes:[
        {id: "2e41fee0-1837-11ec-9621-0242ac130002",
        createdUser: "5c7e06e6-1837-11ec-9621-0242ac130002",
        title: "Pastas de la abuela",
        base: "Plato tipico de abuela tradicional italiana.",
        image: "https://www.goya.com/media/3854/southwestern-chicken-and-rice.jpg",
        },
        {id: "2e41fee0-1837-11ec-9621-0242ac130002",
        createdUser: "5c7e06e6-1837-11ec-9621-0242ac130002",
        title: "Sancocho",
        base: "Caldo tipico en las tierras del valle del cauca -col.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/16/8b/be/32/sancocho-valluno-de-gallina.jpg",
        },
        {id: "2e41fee0-1837-11ec-9621-0242ac130002",
        createdUser: "5c7e06e6-1837-11ec-9621-0242ac130002",
        title: "Bandeja Paisa",
        base: "Bandeja caracteristica de la region antioqueña.",
        image: "http://c.files.bbci.co.uk/DBBF/production/_105055265_bandejapaisa.jpg",
        }
      ] 
    } 
  },
  mounted(){
      let userList = JSON.parse(localStorage.getItem("userList"));
      if(userList != undefined){
        this.registros=userList;
        
      }
    },
  //, //methods:{
     //mostrarEnPantalla(){    
      //}
  //}

}
</script>

<style>

</style>