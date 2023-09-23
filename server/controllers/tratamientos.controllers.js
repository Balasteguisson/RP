import { pool } from '../db.js'

export const postTratamiento = async (req, res) => {
  const datos = req.body
  const fechaInicio = datos.fechaInicio.slice(0, 10)
  const fechaFin = datos.fechaFin?.slice(0, 10)
  const query = `INSERT INTO TratamientoPaciente VALUES (NULL,'${datos.codPaciente}','${datos.nombre}',NULL,'${fechaInicio}','${fechaFin}',NULL,${datos.cod})`
  console.log(query)
  try {
    let result = await pool.execute(query)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

export const getTratamientosPaciente = async (req, res) => {
  const { codPaciente } = req.query
  const query = `SELECT * FROM TratamientoPaciente WHERE codPaciente = '${codPaciente}'`
  try {
    let result = await pool.execute(query)
    res.status(200).json(result[0])
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}