import { pool } from '../db.js'

export const getConstantesVitales = async (req, res) => {
  let codPaciente = req.query.codPaciente
  let query = 'CALL SpSConstantesLanding(?)'
  try {
    let [rows, _] = await pool.execute(query, [codPaciente])
    res.status(200).json(rows[0])
  } catch (err) {
    res.status(500).json(err.message)
  }
}

export const postConstanteVital = async (req, res) => {
  let { fecMedicion, tipo, valor1, valor2, codPaciente } = req.body
  let query = `INSERT INTO RegistroConstanteVital VALUES (null, '${codPaciente}', (select idTipos from TiposConstanteVital where nombreTipo = '${tipo}'), '${fecMedicion}',${valor1} , ${valor2}, (select unidades1 from TiposConstanteVital where NombreTipo = '${tipo}'))`


  try {
    let result = await pool.execute(query, [codPaciente, tipo, fecMedicion, valor1, valor2])
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

export const getMedicionesPacTipo = async (req, res) => {
  let codPaciente = req.query.codPaciente
  let tipo = req.query.tipo
  let query = `SELECT * FROM RegistroConstanteVital WHERE codPaciente = '${codPaciente}' AND tipoConstante = (SELECT idTipos FROM TiposConstanteVital WHERE nombreTipo = '${tipo}') ORDER BY fechaRegistro DESC`
  try {
    let [rows, _] = await pool.execute(query, [codPaciente, tipo])
    res.status(200).json(rows)
  } catch (err) {
    res.status(500).json(err)
  }
}