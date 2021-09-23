import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../pages/Home.vue';
import AddRecipePage from '../pages/AddRecipe.vue';
import EditRecipePage from '../pages/EditRecipe.vue';
import ViewRecipePage from '../pages/ViewRecipe.vue';
import SignUpPage from '../pages/SignUp.vue';
import DeleteRecipePopup from '../components/DeleteRecipePopup.vue';
import Registro from '../components/Registro.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage },
    { path: '/recipe/add', component: AddRecipePage },
    { path: '/recipe/edit', component: EditRecipePage },
    { path: '/recipe/view', component: ViewRecipePage },
    { path: '/recipe/register', component: Registro },
    { path: '/signup', component: SignUpPage },
    { path: '/delete', component: DeleteRecipePopup },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;