<template>
<<<<<<< HEAD
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
=======
  <div>
    <h1>Ver Receta</h1>
    <br>
    <h5>Tabla de datos de la receta</h5>
  <div>

    <v-simple-table >
    <!-- <v-simple-table dark> -->
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre del ingrediente:
          </th>
          <th class="text-left">
            Unidad de medida + Cantidad:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>


  </div>
  
  
  </div>
>>>>>>> e13a328527a36e82dbb86e58d08c4a0f57eb8b53
</template>

<script>
  export default {
    //
  }
</script>
