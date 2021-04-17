//Biblioteca manejo de JSON
const bodyParser = require('body-parser');
//Importando la biblioteca express para la creación de servidores
const express = require('express');
//Traer un objeto sequelize
const sequelize = require("./util/database");
const alumnoRoutes = require("./routes/alumno");
const tareaRoutes = require("./routes/tarea");
const grupoRoutes = require("./routes/grupo");
const grupoAlumnoRoutes = require("./routes/grupoAlumno");

const app = express();
app.use(bodyParser.json());
app.use('/alumno',alumnoRoutes);
app.use('/tarea',tareaRoutes);
app.use('/grupo',grupoRoutes);
app.use('/grupoAlumno',grupoAlumnoRoutes);


sequelize.sync({})
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(8080,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error))