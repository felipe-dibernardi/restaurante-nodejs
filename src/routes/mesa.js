const express = require('express');
const mesaController = require('../controller/mesa');
const router = express.Router();

router.get('/', mesaController.getMesas);

exports.routes = router;