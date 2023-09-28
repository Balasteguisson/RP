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
  let query3 = `SELECT * FROM consultas c inner join Medicos m on c.idMedico = m.idUsuario left join diagnosticosCIE10 d on d.clase = c.diagnostico  WHERE m.idUsuario = '${idDoctor}'`
  let query4 = `SELECT * FROM consultas c inner join Medicos m on c.idMedico = m.idUsuario left join diagnosticosCIE10 d on d.clase = c.diagnostico  WHERE m.idUsuario != '${idDoctor}'`
  try {
    let result = await pool.execute(query)
    let result2 = await pool.execute(query2)
    let result3 = await pool.execute(query3)
    let result4 = await pool.execute(query4)
    let datos = {
      datosdoctor: result[0][0],
      pacientes: result2[0],
      consultas: Object.assign({}, result3[0], result4[0])
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

  let query = `INSERT INTO consultas (codPaciente, idMedico, fechaInicio, numeroParticipantesMax) VALUES ('${codPaciente}', '${idMedico}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}',2)`
  let query2 = 'INSERT INTO consultas_has_medicos (consultas_idConsultas, medicos_idMedico, EsCreador) VALUES (?, ?, 1)'
  console.log(query)
  try {
    let result = await pool.execute(query)
    if (result[0].insertId) {
      await pool.execute(query2, [result[0].insertId, idMedico])
      res.status(200).json(result[0].insertId)
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

export const getParticipantesConsulta = async (req, res) => {
  const idConsulta = req.query.idConsulta
  let query = `SELECT * FROM consultas_has_medicos cm inner join medicos m on cm.medicos_idmedico = m.idUsuario WHERE consultas_idConsultas = '${idConsulta}'`
  console.log('llamada')

  try {
    let result = await pool.execute(query)
    res.status(200).json({ participantes: result[0] })
  } catch (error) {
    console.log(error)
    res.status(500).json(error.sqlMessage)
  }
}

export const updateConsulta = async (req, res) => {
  const idConsulta = req.query.idConsulta
  const participantes = req.body.limiteParticipantes
  console.log(participantes)
  let query = `UPDATE consultas SET numeroParticipantesMax = '${participantes}' WHERE idConsultas = '${idConsulta}'`
  try {
    let result = await pool.execute(query)
    if (result[0].affectedRows > 0) {
      res.status(200).json({ result })
    } else {
      res.status(500).json('Error actualizando consultas')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error.sqlMessage)
  }
}

export const updateDiagnostico = async (req, res) => {
  let idConsulta = req.query.idConsulta
  let codDiagnostico = req.body.idDiagnosticosCIE10

  let query = `UPDATE consultas SET diagnostico = '${codDiagnostico}' WHERE idConsultas = '${idConsulta}'`
  console.log(query)
  try {
    let result = await pool.execute(query)
    if (result[0].affectedRows > 0) {
      console.log(result)
      res.status(200).json({ result })
    } else {
      res.status(500).json('Error actualizando consultas')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error.sqlMessage)
  }
}

export const sendMensaje = async (req, res) => {
  let { idConsulta, idDoctor, mensaje } = req.body
  let date = new Date().toISOString().slice(0, 19).replace('T', ' ')
  let dateWithoutOffsetSpain = new Date(date).toLocaleString('en-US', { timeZone: 'Europe/Madrid' })
  let dateISOSTRING = new Date(dateWithoutOffsetSpain).toISOString().slice(0, 19).replace('T', ' ')
  let query = `INSERT INTO mensajesmedicos VALUES (null,'${idDoctor}', '${idConsulta}', '${mensaje}', '${dateISOSTRING}')`
  try {
    let result = await pool.execute(query)
    console.log(result)
  } catch (error) {
    console.log(error)
    res.status(500).json(error.sqlMessage)
  }
}

export const fetchMensajes = async (req, res) => {
  let idConsulta = req.query.idConsulta
  let query = `SELECT * FROM mensajesmedicos mm 
  inner join consultas_has_medicos cm on mm.medicos_idMedico = cm.medicos_idMedico
  inner join medicos m on cm.medicos_idMedico = m.idUsuario
   WHERE mm.consultas_idConsultas = '${idConsulta}'`
  try {
    let result = await pool.execute(query)
    res.status(200).json(result[0])
  } catch (error) {
    console.log(error)
    res.status(500).json(error.sqlMessage)
  }
}