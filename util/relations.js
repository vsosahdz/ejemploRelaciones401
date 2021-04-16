function applyRelations(sequelize){
    console.log(sequelize.models);
    const Alumno = sequelize.models.alumno;
    const Tarea = sequelize.models.tarea;
    const Grupo = sequelize.models.grupo;
    const GrupoAlumno = sequelize.models.grupoAlumno;

    //Un alumno puede tener muchas tareas
    Alumno.hasMany(Tarea);
    //Una tarea solo puede pertener a un alumno
    Tarea.belongsTo(Alumno);
    
    //Un alumno puede pertener a varios grupos
    Alumno.belongsToMany(Grupo,{through:GrupoAlumno});
    Grupo.belongsToMany(Alumno,{through:GrupoAlumno});
    //Un grupo puede tener varios alumnos
}

module.exports = {applyRelations};