import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../pages/Home.vue';
import SignUpPage from '../pages/SignUp.vue';
import AddRecipePage from '../pages/AddRecipe.vue';
import ViewRecipePage from '../pages/ViewRecipe.vue';
import EditRecipePage from '../pages/EditRecipe.vue';
import pruebacoment from '../pages/pruebasComentario.vue';
import pruebaRecetas from '../pages/ListRecipe.vue';
import EditRecipePage2 from '../pages/AddRecipe.vue';
//import DeleteRecipePopup from '../components/DeleteRecipePopup.vue';

Vue.use(VueRouter);
/*{
    path: '/supervisor',
    name: 'Supervisors',
    component: () => import('../views/Supervisor.vue')
    //carga perezosa, se usa cuando se da click o ejecuten, luego importa
    //la pagina
  }, */
const routes = [
    { path: '/', component: HomePage},
    //{ path: '/recipe/Home', component: HomePage},
    { path: '/AddRecipe', component: AddRecipePage },
    { path: '/AddRecipe/:nameReceta', component: EditRecipePage2 },
    { path: '/EditRecipe/', component: EditRecipePage },
    { path: '/ViewRecipe', component: ViewRecipePage },
    { path: '/Login', component: SignUpPage },
    { path: '/PComent', component: pruebacoment},
    { path: '/ListRecipe', component: pruebaRecetas},
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
