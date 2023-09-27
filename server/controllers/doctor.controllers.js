import { pool } from '../db.js'

export const loginDoctor = async (req, res) => {
  const { username, password } = req.body
  let query = `SELECT * FROM Usuarios WHERE email = '${username}' AND clave = '${password}' and tipo = '1'`
  console.log(query)
  try {
    let result = await pool.execute(query)
    let datos = result[0][0].idUsuario
    res.status(200).json(datos)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

export const landingDoctor = async (req, res) => {
  const idDoctor = req.query.codDoctor
  let query = `SELECT * FROM Medicos WHERE idUsuario = '${idDoctor}'`

  try {
    let result = await pool.execute(query)
    let datos = result[0][0]
    res.status(200).json(datos)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

