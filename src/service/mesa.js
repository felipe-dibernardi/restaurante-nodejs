const MesaDao = require("../dao/mesa");

module.exports = class MesaService {

    constructor() {
        this.mesaDao = new MesaDao();
    }

    getMesas() {
        return this.mesaDao.getMesas();
    }

    getMesa(id) {
        //implementar
    }

    addMesa(numero) {
        //implementar
    }

}