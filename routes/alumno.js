const router = require("express").Router();
const alumnoController = require('../controllers/alumno');

router.post('/agregarAlumno',alumnoController.postAgregarAlumno);
router.get('/verAlumnos',alumnoController.getAlumnos);
router.post('/eliminarAlumno',alumnoController.postEliminarAlumno);
router.post('/actualizarAlumno',alumnoController.postActualizarAlumno);
router.get('/consultarAlumno',alumnoController.getConsultarAlumno);
router.get('/consultarAlumno2',alumnoController.getConsultarAlumno2);
router.get('/graficarAlumno',alumnoController.getGraficarAlumno);


module.exports = router;