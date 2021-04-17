const router = require("express").Router();
const grupoController = require('../controllers/grupo');

router.post('/agregarGrupo',grupoController.postAgregarGrupo);

module.exports = router;