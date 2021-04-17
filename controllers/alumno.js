const Alumno = require("../util/database").models.alumno;

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