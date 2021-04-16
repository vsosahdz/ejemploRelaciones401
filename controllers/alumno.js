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