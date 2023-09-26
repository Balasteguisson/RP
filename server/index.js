import express from "express";
import { port } from "./config.js";

//Rutas
import indexRoutes from './routes/index.routes.js'
import loginRoutes from './routes/login.routes.js'
import consVitRoutes from './routes/consVit.routes.js'
import tratamientoRoutes from './routes/tratamientos.routes.js'
import diagnosticosRoutes from './routes/diagnosticos.routes.js'

import doctorRoutes from './routes/doctor.routes.js'
//Otras Librerias
import morgan from "morgan"



//Configuraciones
const app = express();
app.use(express.json())
app.disable('x-powered-by')

app.use(morgan('dev'));

//Middleware
app.use((req, res, next) => {
    next();
})



//Rutas paciente
app.use(indexRoutes);
app.use(loginRoutes);
app.use(consVitRoutes);
app.use(tratamientoRoutes);
app.use(diagnosticosRoutes);


//Rutas medico
app.use('/resumenHC', express.static('HCresume'))
app.use('/doctorV', express.static('doctorVite'))
app.use(doctorRoutes)


//Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('404 - Ruta no encontrada')
})

//Inicio de servidor
app.listen(port)
console.log(`Server listening on port ${port}`);

