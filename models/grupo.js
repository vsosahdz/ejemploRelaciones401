const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('grupo',{
        //Forma descriptiva de declarar atributos
        clave:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey:true
        },
        //Forma corta de declarar atributos
        descripcion: Sequelize.STRING
    })
};

