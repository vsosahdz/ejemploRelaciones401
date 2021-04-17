const GrupoAlumno = require("../util/database").models.grupoAlumno;

exports.postAgregarGrupoAlumno = (req, res)=>{
    console.log(req.body);
    GrupoAlumno.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso"); //Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Hubo un error") //Cliente
        })
}