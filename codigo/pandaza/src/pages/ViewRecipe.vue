<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col sm="4" class="pa-3" v-for="receta in recetas" :key="receta._id">
          <v-card
            class="pa-1"
            :to="{ name: '/receta/:_id', params: { id: receta._id } }"
          >
            <v-img height="250" :src="`/${receta.imagenReceta}`"></v-img>
            <v-btn class="ml-4 mt-3" small outlined color="indigo">
              Ver Mas
            </v-btn>
            <div class="row">
            <v-card-title class="headline">
              {{ receta.nombreReceta.substring(0,25) + "..." }}
            </v-card-title>
            </div>
            <v-card-text class="py-0">
              <p><b>Preparacion</b></p>
              <p>{{ receta.preparacion.substring(0, 40) + "..." }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div>
  </div>

  </div>

  
</template>

<script>
//import RecepiesData from "../dummy/recipes.json";

export default {
  components: {},
  data() {
    
    return {
      recetas:[],
    };
  },
  methods: {
    listarRecetas() {
      this.axios.get("http://localhost:3000/ver-recetas")
        .then((response) => {
          // console.log(response.data)
          this.recetas = response.data;
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
    
    },mounted() {
      this.listarRecetas();
  },
};
</script>
