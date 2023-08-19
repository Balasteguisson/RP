import { pool } from '../db.js'
import { v4 as uuidv4 } from 'uuid';

//Inicio de sesión
export const loginUser = async (req, res) => {
    let { email, password } = req.body
    let query = `SELECT codPaciente FROM Usuarios U
    inner join Pacientes P on U.idUsuario = P.idUsuario WHERE email = ? and clave = ?`
    try {
        let result = await pool.query(query, [email, password])
        if (!result[0].length) {
            throw new Error("Usuario/contraseña incorrectos")
        }
        res.status(200).send(result)
        return;
    } catch (err) {
        if (err.message == 'Usuario/contraseña incorrectos') {
            res.status(500).json('User error')
            return;
        }
    }

}

//Registro de usuario
export const signUpUser = async (req, res) => {
    let { email, password } = req.body
    console.log(email, password)

    let queryNewUser = `INSERT INTO usuarios (EMAIL,CLAVE,TIPO) VALUES (?,?,'0') `;
    try {
        let result = await pool.query(queryNewUser, [email, password])
        res.status(200).json({ message: 'Usuario creado', insertId: result[0].insertId })
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }

}

export const signUpUser2 = async (req, res) => {
    //guille@gmail.com
    let { userId, nombre, apellidos, dni, numTarjSanitaria, fecNacimiento, sexo, numTelf, pais, ccaa } = req.body
    fecNacimiento = fecNacimiento.substring(0, 10)
    console.log(fecNacimiento)
    let codPaciente = `${nombre.substring(0, 1)}${apellidos.substring(0, 1)}${uuidv4().replace(/-/g, 'x').substring(0, 10)}`.toUpperCase()

    let query = `INSERT INTO Pacientes (codPaciente, idUsuario, nombre, apellidos, dni, numTarjSanitaria, fechaNacimiento, sexo, telefono, pais, ccaa )
    VALUES ('${codPaciente}','${userId}','${nombre}','${apellidos}','${dni}','${numTarjSanitaria}','${fecNacimiento}','${sexo}','${numTelf}','${pais}','${ccaa}')`

    try {
        //let result = await pool.query(query);
        //console.log(result)
        res.status(200).json({ message: "Usuario registrado correctamente" })
    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }

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
        res.status(500).json('Error en la bbdd' + err.message)
    }

}

