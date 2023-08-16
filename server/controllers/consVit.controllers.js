import { pool } from '../db.js'

export const getConstantesVitales = async (req, res) => {
  let codPaciente = req.query.codPaciente

  let query = `SELECT nombreTipo, unidades, valorMinimoHab, valorMaximoHab 
  FROM TiposConstanteVital TCV 
  LEFT JOIN RegistroConstanteVital RCV ON RCV.tipoConstante = TCV.idTipos
  WHERE codPaciente = ?`
  let result = await pool.query(query, [codPaciente])
  console.log(result)
}