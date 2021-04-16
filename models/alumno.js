const Sequelize = require('sequelize');

const Alumno = (sequelize)=>{
    sequelize.define('alumno',{
        nombre: Sequelize.STRING
    })
};

module.exports = Alumno;