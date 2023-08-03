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
        if (err.message == 'Usuario/contraseña incorrectos') {
            res.status(500).json('Usuario/contraseña incorrectos')
            return;
        }
    }

}

//Registro de usuario
export const signUpUser = async (req, res) => {
    let { user, password } = req.body
    let queryNewUser = `INSERT INTO usuarios (EMAIL,CLAVE,TIPO) VALUES (?,?,'0') `;
    try {
        let result = await pool.query(queryNewUser, [user, password])
        console.log(result)
        res.status(200).json({ message: 'Usuario creado', insertId: result[0].insertId })
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
}

export const signUpUser2 = async (req, res) => {
    let { idUsuario, nombre, apellidos, dni, tarjsan, fechaNacimiento, sexo, telf, pais, ccaa } = req.body
    let codPaciente = 'NP0000000001'; //GENERAR CODUSUARIO AQUI
    let query = `INSERT INTO Pacientes (codPaciente, idUsuario, nombre, apellidos, dni, numTarjSanitaria, fechaNacimiento, sexo, telefono, pais, ccaa ) VALUES ('${codPaciente}','${idUsuario}','${nombre}','${apellidos}','${dni}','${tarjsan}','${fechaNacimiento}','${sexo}','${telf}','${pais}','${ccaa}')`
    console.log(query)
    try {
        let result = await pool.query(query);
        console.log(result)
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

