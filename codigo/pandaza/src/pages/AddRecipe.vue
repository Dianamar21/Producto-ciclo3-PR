<template>
  <div class="banner-image">
    <main class="container">
        <div class="row ">
            <p> Bienvenido todo esta listo para tu nueva receta</p>
            <div class="col-10 mx-auto ">
                <div class="formulario">
                    <div class="card">
                        <div class="card-header bg-header text-white">
                            <h2> <b> Nueva Receta </b></h2>
                        </div>

                        <form @submit.prevent="laNuevaReceta" class="m-3">

                            <div class="mb-3">
                                <input v-model="titulo" type="text" value="" placeholder="Titulo de la receta" class="form-control">
                            </div>
                            <div class="mb-3">
                                <input  class="form-control" type="file" id="">
                            </div>
                            <!-- agregar ingredientes -->
                            <form @submit.prevent="ingredientes">
                                <div class="input-group mb-3 ">
                                    <input type="text" v-model="ingrediente"  placeholder="ingredientes" class="form-control  ">
                                    <input type="text" v-model="cantidad" placeholder="cantidad" class="form-control">
                                    <button type="submit" class="pl-6"> <img src='../assets/plus_icon.png' width="40"></button>

                                </div>
                                <div>
                              
                                </div>
                            
                                <div id="ingredientes" class="input-group mb-3">
                                    <span class="input-group-text">Lista de ingredientes</span>
                                    <ul>
                                        <li  v-for="(ing, index) in losIngredientes" v-bind:key="ing"> 
                                             {{ing.ingrediente}} x {{ing.cantidad}}
                                            <button @click="losIngredientes.splice(index, 1)" type="submit" class="pl-6">
                                            <img src='../assets/menos_icon.png' width="25">
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <div class="input-group mb-3">
                                <span class="input-group-text">Preparación</span>
                                <textarea v-model="preparacion" rows="6" class="form-control"  aria-label="With textarea"></textarea>
                            </div>
                            <input type="submit" value="Nueva Receta" class="btn btn-primary form-control ">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>

</template>

<script>
export default {
  components: {},
  data : () => ({
        titulo : '',
        imagen : '',
        preparacion : '',
        creador : '',
        //////////ingredientes////////////
        losIngredientes : [],
        ingrediente : '',
        cantidad : '',
        id : 1,
        nuevaReceta : []
    }),
    methods: {
        ingredientes(){
            let ingredientes = {
                id : this.id,
                ingrediente : this.ingrediente,
                cantidad : this.cantidad
            };
            this.losIngredientes.push(ingredientes)
            this.id ++,
            this.ingrediente="",
            this.cantidad=""
            
        },
        laNuevaReceta(){
            var receta = {
                titulo : this.titulo,
                imagen : this.imagen,
                ingredientes : this.losIngredientes,
                preparacion : this.preparacion,
                autor : this.creador
            };
            this.nuevaReceta.push(receta);
            
            this.titulo = '',
            this.preparacion = '',
            this.ingrediente = '',
            this.cantidad = '',
            this.losIngredientes = ''
            alert('Nueva receta Creada');           
           
            
        }
  },
};
</script>
<style scoped>
.bg-header{
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(79, 82, 240, 0.8)), url("../assets/banner_2.jpg");
    background-size: cover;
    background-position: center;


}
</style>
