import express from "express";
import { port } from "./config.js";

//Rutas
import indexRoutes from './routes/index.routes.js'
import loginRoutes from './routes/login.routes.js'


const app = express();
app.use(express.json())

app.use(indexRoutes);
app.use(loginRoutes);



app.listen(port)
console.log(`Server listening on port ${port}`);

