// para encriptar la clave
const crypto = require("crypto");
// libreria para crear el token del login
const jwt = require("jsonwebtoken");

const usuarioModel = require("../models/usuarios");
// function para encriptar password
function encryptPassword(password) {
    const key = Buffer.from(process.env.ENCRIPTADO_KEY, 'hex');
    const iv = Buffer.from(process.env.ENCRIPTADO_INIT_VECTOR, 'hex');
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    return cipher.update(Buffer.from(password, 'utf8'), 'utf8', 'hex') + cipher.final('hex');
}

// Controlador de los usuarios
module.exports = class UsuariosController {

    static async login(req, res) {
        try {
            // las siguientes dos lineas son para validar password sin quitarle la encriptada, osea validarlo encriptado
            const usuario = req.body;
            usuario.password = encryptPassword(usuario.password);

            const usuarioExistente = await usuarioModel.findOne({ "email": usuario.email });

            // condicional para validar clave, sino devuelve 401 que unauthorized
            if (usuarioExistente !== null && usuarioExistente.password === usuario.password) {
                // validacion del token que se genera en postman: https://jwt.io/
                const token = jwt.sign({
                    sub: usuarioExistente._id,
                    name: usuarioExistente.name,
                    email: usuarioExistente.email,
                    city: usuarioExistente.city
                }, process.env.ENCRIPTADO_KEY, {
                    expiresIn: '30d'
                });

                res.status(200).json({ token, name: usuarioExistente.name });
            } else {
                res.status(401).json({ message: "usuario o clave invalido" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async insert(req, res) {
        try {
            const usuario = req.body;
            usuario.password = encryptPassword(usuario.password);
            const newUsuario = await usuarioModel.create(usuario);
            res.status(201).json({ data: newUsuario, message: "Te has registrado correctamente" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
