import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();


//ping a bbdd para ver que se ha iniciado bien
router.get('/ping', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT count(email) from USUARIOS');
        console.log(rows[0]);
        res.json({ message: 'Base de datos funcionando' });
    } catch {
        console.log('BBDD apagada')
        res.json({ message: 'Base de datos apagada' })
    }
})

router.get('/obtenerResumenHC', async (req, res) => {
    let queryBD = `CALL SpSResumenHC('${req.query.codPaciente}')`
    let queryBD2 = `CALL SpSConstantesLanding('${req.query.codPaciente}')`
    try {
        let [rows,] = await pool.execute(queryBD)
        let [rows2,] = await pool.execute(queryBD2)
        let datos = [rows[0], rows2[0]]
        res.status(200).json(datos)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

export default router;