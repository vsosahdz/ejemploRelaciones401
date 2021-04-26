//Biblioteca manejo de JSON
const bodyParser = require('body-parser');
//Importando la biblioteca express para la creación de servidores
const express = require('express');
//Biblioteca para utilizar el local storage
//const {LocalStorage}= require('node-localstorage');
//Traer un objeto sequelize
const sequelize = require("./util/database");
const alumnoRoutes = require("./routes/alumno");
const tareaRoutes = require("./routes/tarea");
const grupoRoutes = require("./routes/grupo");
const grupoAlumnoRoutes = require("./routes/grupoAlumno");
const juegoRoutes = require('./routes/juego');

const app = express();
app.use(bodyParser.json());
//Sirve para leer la información que envian los formularios
app.use(bodyParser.urlencoded({extended:true}))

app.use('/alumno',alumnoRoutes);
app.use('/tarea',tareaRoutes);
app.use('/grupo',grupoRoutes);
app.use('/grupoAlumno',grupoAlumnoRoutes);
app.use('/juego',juegoRoutes);

//Creamos una instancia del local storage
//var localStorage = new LocalStorage('./scratch');

//localStorage.setItem('Nombre','Usuario');
//console.log(localStorage.getItem('Nombre'));

sequelize.sync({})
    .then(resultado=>{
        console.log("Conexion exitosa");
        app.listen(8080,()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(error=>console.log(error))