import express from "express";
import { port } from "./config.js";

//Rutas
import indexRoutes from './routes/index.routes.js'
import loginRoutes from './routes/login.routes.js'

//Otras Librerias
import morgan from "morgan"
import moment from "moment"
//var jwt = require ("jwt-simple") --para mas adelante cuando implemente una capa de seguridad


//Configuraciones
const app = express();
app.use(express.json())
app.disable('x-powered-by')

app.use(morgan('dev'));

//Middleware
app.use((req, res, next) => {
    console.log('Pasando por middleware');
    next();
})



//Rutas
app.use(indexRoutes);
app.use(loginRoutes);





//Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('404 - Ruta no encontrada')
})

//Inicio de servidor
app.listen(port)
console.log(`Server listening on port ${port}`);

