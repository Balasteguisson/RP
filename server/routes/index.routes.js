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
    console.log(req.query.codPaciente)
    let queryBD = `CALL SpSResumenHC('${req.query.codPaciente}')`
    console.log(queryBD)
    try {
        let [rows, _] = await pool.execute(queryBD)
        res.status(200).json(rows[0])
    } catch (err) {
        res.status(500).json(err.message)
    }
})

export default router;