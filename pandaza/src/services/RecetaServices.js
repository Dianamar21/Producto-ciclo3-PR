import httpClient from "./httpClient";
const END_POINT = "/api/recetas" 

const getAllRecetas = ()=> httpClient.get(END_POINT);
const insertReceta = (receta) => httpClient.post(END_POINT, receta);
const getReceta = (nameReceta) => httpClient.get(END_POINT + "/" + nameReceta);
const updateReceta = (nameReceta, receta) => httpClient.put(END_POINT + "/" + nameReceta, receta);
const deleteReceta = (nameReceta) => httpClient.delete(END_POINT + "/" + nameReceta);



export {
    getAllRecetas,
    insertReceta,
    getReceta,
    updateReceta,
    deleteReceta
}