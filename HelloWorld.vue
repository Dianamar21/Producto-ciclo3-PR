<template>
  <div class="hello">
    <p> Nombre </p>
    <p> Dato </p>
  </div>
  <div class="helloo">
    <p> Welcome to PanDaza,prueba!! </p>
  </div>
    <div class="col-md-6">
            <img src="../assets/Panda.jpg" alt="Mountain" style="width:300px">
            <p> Welcome to PanDaza,prueba!! </p>
            <img src="../assets/Panda.jpg" alt="Mountain" style="width:300px">
        </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fc3f06;
}
</style>
