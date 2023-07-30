import { pool } from '../db.js'

export const loginUser = (req, res) => {
    res.send('Entrando a la aplicacion')
}


export const signUpUser = async (req, res) => {
    let { user, password } = req.body
    let queryNewUser = `INSERT INTO usuarios (EMAIL,CLAVE) VALUES (?,?) `;

    let result = await pool.execute(queryNewUser, [user, password], (err, results, fields) => {
        if (err)
            res.status(400).json('No se ha podido registrar al usuario.')
    })

    console.log("HOLA")
    console.log(result);
    console.log("HOLA")
    res.status(200).json({ message: 'Usuario creado' })
}