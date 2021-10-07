import httpClient from "./httpClient";
const END_POINT = "/api/recetas" 

const getAllRecetas = ()=> httpClient.get(END_POINT);
const insertReceta = (receta) => httpClient.post(END_POINT, receta);

export {
    getAllRecetas,
    insertReceta
}