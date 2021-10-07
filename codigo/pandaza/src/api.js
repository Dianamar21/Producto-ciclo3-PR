import axios from 'axios';
const url = '../api';

export default class API {
    // traer las recetas 
    static async getAllReceta() {
        const res = await axios.get(url);
        return res.data;
    }

    // traer la receta por id 
    static async getRecetaByID(id) {
            const res = await axios.get(`${url}/${id}`);
            return data;
        }
        // agregar una receta 
    static async addReceta(post) {
            const res = await axios.post(url, post);
            return res.data;
        }
        // actualizar receta 
    static async BuscarReceta(id, post) {
            const res = await axios.patch(`${url}/${id}`, post);
            return res.data;
        }
        // eliminar receta 
    static async deleteReceta(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }




}