const recetaModel = require("../models/recetas");
//coment1
const fs = require('fs')
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
        //yeison edito aqui 
        const receta = req.body;
        const imagename = req.file.filename;
        receta.imagenReceta = imagename;
        receta.ingredientes = JSON.parse(receta.ingredientes);
        // hasta aqui para agregar una imagen
        try {

            const newReceta = await recetaModel.create(receta);
            res.status(201).json(newReceta);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req, res) {
        //yeison edito aqui
        const id = req.params.id;
        let nueva_img = "";
        if (req.file) {
            nueva_img = req.file.filename;
            try {
                fs.unlinkSync('./uploads' + req.body.old_imagenReceta);
            } catch (err) {
                console.log(err);
            }
        } else {
            nueva_img = req.body.old_imagenReceta;
        }
        const receta = req.body;
        receta.imagenReceta = nueva_img;

        try {
            await recetaModel.findByIdAndUpdate(id, receta);
            res.status(200).json({ message: 'Receta actualizada!' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async delete(req, res) {
        const id = req.params.id;
        try {
            const result = await recetaModel.findByIdAndDelete(id);
            if (result.imagenReceta != '') {
                try {
                    fs.unlinkSync('./uploads/' + result.imagenReceta);

                } catch (err) {
                    console.log(err);
                }
            }

            res.status(200).json({ message: 'Receta eliminada!' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}