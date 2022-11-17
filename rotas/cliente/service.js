function carregaTodos() {
    return [
        {id: 1, nome: 'cliente A'},
        {id: 2, nome: 'cliente B'},
        {id: 3, nome: 'cliente C'},
        {id: 4, nome: 'cliente D'},
        {id: 5, nome: 'cliente E'},
    ]
}

function carregaPorId(id) {
    return [
        {id: 1, nome: 'cliente A'},
        {id: 2, nome: 'cliente B'},
        {id: 3, nome: 'cliente C'},
        {id: 4, nome: 'cliente D'},
        {id: 5, nome: 'cliente E'},
    ].find(it => it.id == id);
}

module.exports = {
    carregaTodos,
    carregaPorId
};