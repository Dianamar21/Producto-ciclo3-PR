<template>
  <b-form>
    <b-form-group
      id="form-group-comment"
      label="Comentario:"
      label-for="form-input-comment"
    >
      <b-form-textarea
        id="form-input-comment"
        v-model="text"
        type="text"
        placeholder="Todo bien!! Todo bien!!!"
        rows="3"
        max-rows="6"
      />
    </b-form-group>
  </b-form>
</template>
<script>
export default {
    
};
</script>
