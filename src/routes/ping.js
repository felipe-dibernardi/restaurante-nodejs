const express = require('express');
const pingController = require('../controller/ping');
const router = express.Router();

router.get('/', pingController.sendPing);

exports.routes = router;
