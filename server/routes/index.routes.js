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

export default router;