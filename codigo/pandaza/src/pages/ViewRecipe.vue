<template>
  <div>
    <h1>Ver Receta</h1>
    <br>
  <div>

    <v-simple-table >
    <!-- <v-simple-table dark> -->
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
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
</template>

<script>
export default {
  components: {},
};
</script>
