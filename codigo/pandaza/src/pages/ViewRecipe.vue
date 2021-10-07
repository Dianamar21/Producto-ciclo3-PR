<template>
  <div>
    <div>
      <h1>todas rece</h1>
    </div>
    <div>
      y aqui van mas
    </div>

    <v-container>
      <v-row no-gutters>
        <v-col sm="4" class="pa-3" v-for="receta in recetas" :key="receta._id">
          <v-card
            class="pa-1"
            :to="{ name: 'receta', params: { id: receta._id } }"
          >
            <v-img height="250" :src="`/${reseta.imagenReceta}`"></v-img>
            <v-btn class="ml-4 mt-3" small outlined color="indigo">
              Ver Mas
            </v-btn>
            <v-card-title class="headline">
              {{ receta.nombreReceta }}
            </v-card-title>
            <v-card-text class="py-0">
              <p>{{ receta.preparacion.substring(0, 100) + "..." }}</p>
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
  async data() {
    const recetasDatos =  await this.mostrarRecetas();
    return {
      recetas: recetasDatos,
    };
  },
  methods: {
    async mostrarRecetas() {
      const response = await fetch("http://localhost:3000/ver-recetas", {
        method: "GET",
      });
      const data = await response.json();
      return data;
      
      
    },
    
    },mounted() {
      this.mostrarRecetas();
  },
};
</script>
