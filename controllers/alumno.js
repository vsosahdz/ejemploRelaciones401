const Alumno = require("../util/database").models.alumno;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

exports.postAgregarAlumno = (req, res)=>{
    console.log(req.body);
    Alumno.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); //Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Hubo un error") //Cliente
        })
}

exports.getAlumnos = (req,res)=>{
    //SELECT * from alumnos;
    Alumno.findAll()
        .then(alumnos=>{
            console.log("Usuario:", alumnos);
            res.send(alumnos)
        })
}

exports.postEliminarAlumno = (req,res)=>{
    //DELETE FROM alumno WHERE id=...
    console.log(req.body)
    Alumno.destroy({
        where: {
            id: req.body.id
        }
    }).then(()=>{
        console.log("Alumno eliminado");
        res.send("Alumno eliminado")
    }).catch(error=>{
        console.log(error);
        res.send("Error en el proceso")
    })    
}

exports.postActualizarAlumno = (req,res)=>{
    //UPDATE alumno SET  WHERE id=...
    console.log(req.body)
    Alumno.update({nombre: req.body.nombre},{
        where: {
            id: req.body.id
        }
    }).then(()=>{
        console.log("Alumno actualizado");
        res.send("Alumno actualizado")
    }).catch(error=>{
        console.log(error);
        res.send("Error en el proceso")
    })    
}

//Recomendada
exports.getConsultarAlumno = (req,res)=>{
    //Ejecutar una consulta en SQL desde el servidor de NodeJS
    sequelize.query("SELECT nombre FROM alumno where id=3",{type:Sequelize.QueryTypes.SELECT})
        .then(alumnos=>{
            console.log(alumnos);
            res.json({estado: "Correcto"});
        })
        .catch(err=>{
            console.log(err);
            res.json({estado: "Incorrecto"});
        })
}

exports.getConsultarAlumno2 = (req,res)=>{
    //Ejecutar una consulta en SQL desde el servidor de NodeJS
    sequelize.query("SELECT id FROM alumno",{
        model: Alumno,
        mapToModel: true
    })
        .then(alumnos=>{
            console.log(alumnos);
            res.json({estado: "Correcto"});
        })
        .catch(err=>{
            console.log(err);
            res.json({estado: "Incorrecto"});
        })
}