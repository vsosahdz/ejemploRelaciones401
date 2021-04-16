const Sequelize = require('sequelize');

const GrupoAlumno = (sequelize)=>{
    sequelize.define('grupoAlumno',{
        idGrupoAlumno:{
            type:Sequelize.STRING,
            allowNull: false,
            primaryKey:true
        },
        estado: Sequelize.STRING
    })
};

module.exports = GrupoAlumno;