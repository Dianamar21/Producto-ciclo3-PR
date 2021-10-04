
const recetaModel = require("../models/recetas");
//coment1
module.exports = class RecetasController {
    static async getAll(req, res) {
        try {
            const recetas = await recetaModel.find();
            res.status(200).json(recetas);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async getByCode(req, res) {
        const code = req.params.code;
        try {
            const receta = await recetaModel.findOne({ "code": code });
            if (receta != null) {
                res.status(200).json(receta);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async insert(req, res) {
        try {
            const receta = req.body;
            const newReceta = await recetaModel.create(receta);
            res.status(201).json(newReceta);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req, res) {
        try {
            const code = req.params.code;
            const receta = req.body;
            const newReceta = await recetaModel.updateOne({ "code": code }, receta);
            res.status(200).json(newReceta);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async delete(req, res) {
        try {
            const code = req.params.code;
            await recetaModel.deleteOne({ "code": code });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}
let p = 1;