const MesaService = require('../service/mesa')

const mesaService = new MesaService();

exports.getMesas = (req, res, next) => {
    res.status(200).json(mesaService.getMesas());
}

exports.getMesa = (req, res, next) => {
    //implementar
}

exports.addMesa = (req, res, next) => {
    //implementar
}