<template>
  <div>
    <h1>Editar Receta</h1>
    <b-form>
      <b-form-group
        id="form-group-title"
        label="Titulo de la receta:"
        label-for="form-input-title"
      >
        <b-form-input
          id="form-input-title"
          v-model="text"
          type="text"
          placeholder="arepas de maiz"
        />
      </b-form-group>

      <b-form-group
        id="form-group-images"
        label="Images:"
        v-for="(recipeImage, counter) in recipe.images"
        v-bind:key="counter"
      >
        <b-img :src="recipeImage" fluid alt="Responsive image"></b-img>
      </b-form-group>

      <b-form-group id="form-group-ingridients" label="Ingredientes:">
      </b-form-group>

      <b-form-group
        id="form-group-steps"
        label="Preparación:"
        label-for="form-input-steps"
      >
        <b-form-textarea
          id="form-input-steps"
          v-model="text"
          type="text"
          placeholder="Maiz, agua, sal, mezclar"
          rows="3"
          max-rows="6"
        />
      </b-form-group>

      <CommentComponent />

      <b-button type="submit" variant="primary">Guardar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import RecepiesData from "../dummy/recipes.json";
import CommentComponent from "../components/AddComment.vue";

export default {
  components: {
    CommentComponent,
  },
  data() {
    return {
      recipe: RecepiesData[0],
    };
  },
};
</script>
