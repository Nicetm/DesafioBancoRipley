const webToken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const mysqlConnection = require('../database');

exports.login = async (req, res) => {

    const { rut, clave } = req.body;

    // Consultamos el rut del cliente
    mysqlConnection.query('SELECT * FROM br_acceso a INNER JOIN br_cliente c ON a.rut = c.rut AND a.id_cliente = c.id WHERE a.rut = ?', [rut], (err, rows, fields) => {
        if (!err) {
            if (rows == 0) {
                // Si rut no se encuentra retornamos error de rut
                res.json({message: 'Rut o clave incorrectos', status: 401, result: false})
            } else {
                // Si encontramos el rut comparamos la clave con la clave encriptada de la BD
                bcrypt.compare(clave, rows[0]['clave'], function (err, result) {
                    if (result) {
                        // Si todo esta OK generamos el token y enviamos los datos del cliente al front
                        const userDetail = { rut: rows[0], id: rows[0]['id_cliente'] }
                        const token = webToken.sign(userDetail, process.env.secret_key, { expiresIn: "1h" });
                        res.json({ 
                            id_cliente: rows[0].id_cliente,
                            rut: rows[0].rut,
                            nombre: rows[0].nombre, 
                            apellido_paterno: rows[0].apellido_paterno, 
                            apellido_materno: rows[0].apellido_materno, 
                            message: "Acceso Correcto", 
                            token, 
                            status: res.statusCode 
                            });
                    } else {
                        // Clave incorrecta retornamos error
                        res.json({ message: "CLave incorrecta ", token: '', status: 401 });
                    }
                });
            }
        } else {
            console.log(err);
        }
    });
}