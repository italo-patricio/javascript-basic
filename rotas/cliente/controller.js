const clientService = require('./service');

function carregaTodos({res}) {
    res.send(clientService.carregaTodos());
}

function carregaPorId({req, res}) {
    let id = req.params.id;
    res.send(clientService.carregaPorId(id));
}

module.exports = {
    carregaTodos,
    carregaPorId
}