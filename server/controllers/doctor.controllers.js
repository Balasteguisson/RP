import { pool } from '../db.js'

export const loginDoctor = async (req, res) => {
  const { username, password } = req.body
  let query = `SELECT * FROM Usuarios WHERE email = '${username}' AND clave = '${password}' and tipo = '1'`
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
  let query2 = `SELECT p.* FROM medicospacientes mp inner join Medicos m on m.idMedico = mp.idMedico inner join pacientes p on mp.codPaciente = p.codPaciente WHERE m.idUsuario = '${idDoctor}'`
  let query3 = `SELECT * FROM consultas c inner join Medicos m on c.idMedico = m.idMedico  WHERE m.idUsuario = '${idDoctor}'`
  try {
    let result = await pool.execute(query)
    let result2 = await pool.execute(query2)
    let result3 = await pool.execute(query3)
    let datos = {
      datosdoctor: result[0][0],
      pacientes: result2[0],
      consultas: result3[0]
    }
    res.status(200).json(datos)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

export const getPatientData = async (req, res) => {
  const codPaciente = req.query.codPaciente
  let query = `SELECT * FROM pacientes WHERE codPaciente = '${codPaciente}'`
  let queryAlt = `SELECT * FROM registroconstantevital WHERE codPaciente = '${codPaciente}' and tipoConstante ='7' order by FechaRegistro DESC LIMIT 1`
  let queryPes = `SELECT * FROM registroconstantevital WHERE codPaciente = '${codPaciente}' and tipoConstante ='4' order by FechaRegistro DESC LIMIT 1`
  let queryConsultas = `SELECT * FROM consultas c left join diagnosticosCIE10 dc on dc.clase = c.diagnostico WHERE codPaciente = '${codPaciente}'`
  try {
    let result = await pool.execute(query)
    let resultAlt = await pool.execute(queryAlt)
    let resultPes = await pool.execute(queryPes)
    let resultConsultas = await pool.execute(queryConsultas)
    let datos = {
      datosPaciente: result[0][0],
      alt: resultAlt[0][0],
      pes: resultPes[0][0],
      consultas: resultConsultas[0]
    }
    res.status(200).json(datos)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}


export const createConsulta = async (req, res) => {
  const codPaciente = req.query.codPaciente
  const idMedico = req.query.idDoctor

  let query = `INSERT INTO consultas (codPaciente, idMedico, fechaInicio) VALUES ('${codPaciente}', '${idMedico}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`
  console.log(query)
  try {
    let result = await pool.execute(query)
    console.log(result[0].insertId)
    res.status(200).json(result[0].insertId)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}