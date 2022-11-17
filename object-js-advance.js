// const cliente = {
//     "nome": 'Cliente fulano de tal'
// };

// console.log('Nome do cliente', cliente.nome);

// spreed
const objA = ['Fulano']
const objB = ['FulanoB']

console.log([objA, ...objB])

// desestruturação
const { nome } = { nome: 'Fulano', idade: 12};
const [ objDesestructured1, objDesestructured2 ] = [{ nome: 'Fulano', idade: 12}, { nome: 'Fulano B', idade: 13}];
console.log(nome);
console.log(objDesestructured1, objDesestructured2);
