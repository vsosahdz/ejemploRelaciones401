const Grupo = require("../util/database").models.grupo;

exports.postAgregarGrupo = (req, res)=>{
    console.log(req.body);
    Grupo.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); //Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Hubo un error") //Cliente
        })
}