// rest 

const usuario = {
    nome: "Diego",
    idade: 23,
    empresa: "Rocketseat"
}

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);


// Reast ex 2
const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);



// params vira uma lista(array) ex3
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// params vira uma lista(array)
function retorna_valores(a, b, ...params) {
    return params;
}

console.log(retorna_valores(1, 3, 4, 5 ,6 ,7));