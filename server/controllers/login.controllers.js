import { pool } from '../db.js'


//Inicio de sesión
export const loginUser = async (req, res) => {
    console.log(req.body);
    let { user, password } = req.body
    let query = `SELECT * FROM Usuarios WHERE email = ? and clave = ?`

    try {
        let result = await pool.query(query, [user, password])
        if (!result[0].length) {
            throw new Error("Usuario/contraseña incorrectos")
        }
        res.status(200).send(result)
        return;
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
        return;
    }

}

//Registro de usuario
export const signUpUser = async (req, res) => {
    let { user, password } = req.body
    let queryNewUser = `INSERT INTO usuarios (EMAIL,CLAVE,TIPO) VALUES (?,?,'0') `;

    let result = await pool.execute(queryNewUser, [user, password], (err, results, fields) => {
        if (err)
            res.status(400).json('No se ha podido registrar al usuario.')
    })

    console.log("HOLA")
    console.log(result);
    console.log("HOLA")
    res.status(200).json({ message: 'Usuario creado' })
}


//Obtener todos los usuarios
export const getUsers = async (req, res) => {
    let query = 'SELECT * FROM Usuarios'
    try {
        let result = await pool.execute(query, [])
        res.status(200).json(result[0])
        return;
    } catch (err) {
        console.log(err);
        res.status(400).json('Error en la bbdd' + err)
    }

}

