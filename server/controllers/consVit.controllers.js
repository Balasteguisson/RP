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
}