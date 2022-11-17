// function 
function soma(a,b) {
    return a + b;
}

// scope instance
class Operation {
    constructor() {
        console.log('Estou construindo essa bagaça do operation!');
    }
    soma(a, b) {
        return a + b;
    }
}

// without scope
const operation = {
    soma(a, b) {
        return a + b;
    }
}

// const result = soma(1,1);
// const result = new Operation().soma(1,1);
const result = operation.soma(1,1);

console.log(`O resulta é: ${result}`);