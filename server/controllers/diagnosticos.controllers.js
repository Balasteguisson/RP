import { pool } from '../db.js'

export const findPatologia = async (req, res) => {
  const nombre = req.query.nombre
  const query = `SELECT * FROM DiagnosticosCIE10 WHERE Descripcion LIKE '%${nombre}%' GROUP BY Descripcion`

  try {
    let result = await pool.execute(query)
    let resultados = result[0].map((item) => {
      return {
        nombre: item.descripcion,
        cod: item.clase
      }
    })
    res.status(200).json(resultados)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}

export const postPatologia = async (req, res) => {
  const datos = req.body
  const fechaRegistro = (new Date()).toISOString().slice(0, 16).replace('T', ' ')
  datos.fechaInicio = datos.fechaInicio.slice(0, 16).replace('T', ' ')
  const query = `INSERT INTO DiagnosticosPaciente VALUES (NULL,'${datos.codPaciente}','${datos.cod}','${fechaRegistro}','${datos.fechaInicio}',NULL)`
  try {
    let result = await pool.execute(query)
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}


export const getPatologiasPaciente = async (req, res) => {
  const codPaciente = req.query.codPaciente
  const query = `SELECT * FROM DiagnosticosPaciente dp  inner join DiagnosticosCIE10 dc on dp.idDiagnosticosCIE10 = dc.clase  WHERE codpaciente = '${codPaciente}' ORDER BY dp.fechaDescubierto DESC `
  try {
    const result = await pool.execute(query)
    const resultados = result[0].map((item) => {
      return {
        nombre: item.descripcion,
        cod: item.clase,
        fechaDescubierto: item.fechaDescubierto
      }
    })
    res.status(200).json(resultados)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.sqlMessage)
  }
}