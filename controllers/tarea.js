const Tarea = require("../util/database").models.tarea;

exports.postAgregarTarea = (req, res)=>{
    console.log(req.body);
    Tarea.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); //Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Hubo un error") //Cliente
        })
}