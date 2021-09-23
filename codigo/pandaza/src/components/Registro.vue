<template>
    <div class=" fondo">
        <div class="container">
            <div class="text-white">
                <h1><b>Bienvenido a PANDAZA</b></h1>
                <p>PanDaza es el Recetario colaborativo mas grande del mundo.
                    Y ahora Registrate para que seas participe.</p> 

            </div>
            <div>
            <template>
               <div class="row col-8 m-3 mx-auto shadow p-3 mb-5 bg-white rounded p-4">
                    <div class="col-12" >
                    <form>
                        <v-text-field
                        v-model="nombre"
                        :error-messages="nameErrors"
                        :counter="30"
                        label="Nombre"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        ></v-text-field>
                        <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Password"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Confirma tu Password"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        ></v-text-field>

                        <v-checkbox
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        label="Ver Password"
                        required
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                        ></v-checkbox>

                        <v-btn
                        class="mr-4"
                        @click="submit"
                        depressed
                        color="primary"
                        >
                        Registrar
                        
                        </v-btn>
                        <v-btn @click="clear">
                        <router-link to="/">Cancelar </router-link>
                        </v-btn>
                    </form>
                </div> 
                   
                </div>       
            </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Registro'

}
</script>

<style>
.fondo{
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(100, 55, 0, 0.8)), url("../assets/fondo-registro.jpg");
    background-size: cover;
    background-position: center;
    height: 300px;
    opacity: 6;
}

</style>