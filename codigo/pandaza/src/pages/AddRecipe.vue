<template>
  <div>
    <div class="transition-swing text-h3 mb--1">Editar Receta</div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              outlined
              label="Titulo Receta"
              placeholder="Arroz con pollo"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-carousel>
              <v-carousel-item
                v-for="(item, index) in recipe.images"
                :key="index"
                :src="item"
                reverse-transition="fade-transition"
                transition="fade-transition"
              />
            </v-carousel>
          </v-col>
        </v-row>
        <v-row v-for="ingridient in recipe.ingridients" :key="ingridient.id">
          <v-col cols="6">
            <v-subheader v-text="ingridient.name" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Cantidad"
              v-text="ingridient.quantity"
              suffix="lbs"
            ></v-text-field>
                <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
        >
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
          </v-col>
        </v-row>
         <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
        <v-row>
          <v-col cols="12">
            <v-textarea
              outlined
              name="input-7-4"
              label="Descripcion"
              hint="Calentar sarten, agregar pollo y arroz"
            />
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="space-around"
        >
          <v-btn depressed
          color="primary">
            Guardar
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>

</template>

<script>
import RecepiesData from "../dummy/recipes.json";

export default {
  components: {},
  data() {
    return {
      recipe: RecepiesData[0],
    };
  },
};
</script>
