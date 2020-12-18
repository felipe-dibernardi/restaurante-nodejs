const express = require('express');
const bodyParser = require('body-parser');
const pingRoute = require('./routes/ping');
const mesaRoute = require('./routes/mesa');

const app = express();

const context = '/api'

app.use(bodyParser.json());
app.use(context + '/v1/ping', pingRoute.routes);
app.use(context + '/v1/mesa', mesaRoute.routes);

app.listen(5000);