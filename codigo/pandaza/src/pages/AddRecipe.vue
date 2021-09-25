<template>
  <div>
    <div class="transition-swing text-h3 mb--1">Agregar Receta</div>
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
            <v-file-input accept="image/*" label="File input"></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <v-text-field
              outlined
              label="Nombre Ingrediente:"
              placeholder="Arroz"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field outlined label="Cantidad:" placeholder="1 lb"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn class="mx-2" fab dark color="indigo">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- <v-row v-for="ingridient in recipe.ingridients" :key="ingridient.id">
          <v-col cols="6">
            <v-subheader v-text="ingridient.name" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Cantidad"
              v-text="ingridient.quantity"
              suffix="lbs"
            ></v-text-field>
            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </v-col>
        </v-row> -->
        <!-- <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn> -->
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
        <v-row align="center" justify="space-around">
          <v-btn depressed color="primary"> Guardar </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      recipe: {},
      ingridients: [],
    };
  },
};
</script>
