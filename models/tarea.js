const Sequelize = require('sequelize');

const Tarea = (sequelize)=>{
    sequelize.define('tarea',{
        descripcion: Sequelize.STRING,
        dias: Sequelize.INTEGER
    })
};

module.exports = Tarea;