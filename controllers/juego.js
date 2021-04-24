const Alumno = require("../util/database").models.alumno;
const path = require('path');

exports.getPrueba = (req, res)=>{
    console.log(req.query);
    res.send('<html><body><p>Hola</p></body></html>');
}

exports.postPrueba = (req,res)=>{
    console.log(req.body);
    Alumno.findAll({
        where:{
            nombre: req.body.nombre
        }
    })
        .then(alumnos=>{
            console.log("Usuario:", alumnos);
            if(alumnos.length==0)
                res.send("No se encontro usuario")
            else
                res.send(alumnos);
        })
    //res.send('Ha llegado la informacion con exito')
}

exports.getDescarga = (req,res)=>{
    //Colocar la ruta absoluta
    res.download(path.join(__dirname,'..','public','resources','imagenprueba.jfif'));
}