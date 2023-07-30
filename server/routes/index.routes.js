import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT 1+ 1 as result');
        console.log(rows[0]);
        res.json('Base de datos funcionando');
    } catch {
        console.log('BBDD apagada')
        res.json('Base de datos apagada')
    }
})

export default router;