import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../pages/Home.vue';
import SignUpPage from '../pages/SignUp.vue';
import AddRecipePage from '../pages/AddRecipe.vue';
import ViewRecipePage from '../pages/ViewRecipe.vue';
import EditRecipePage from '../pages/EditRecipe.vue';
import pruebacoment from '../pages/pruebasComentario.vue';
import pruebaRecetas from '../pages/Recetas.vue';

//import DeleteRecipePopup from '../components/DeleteRecipePopup.vue';
// aqui pendiente ...
Vue.use(VueRouter);
//pendiente   ----const lasImagenes = import('./')


const routes = [
    { path: '/', component: HomePage },
    //{ path: '/recipe/Home', component: HomePage},
    { path: '/AddRecipe', component: AddRecipePage },
    { path: '/EditRecipe', component: EditRecipePage },
    { path: '/ViewRecipe', component: ViewRecipePage },
    { path: '/Login', component: SignUpPage },
    { path: '/PComent', component: pruebacoment },
    { path: '/Recetas', component: pruebaRecetas },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;