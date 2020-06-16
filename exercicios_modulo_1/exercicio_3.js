
const arr = [1, 2, 3, 4, 5];

// 3.1
arr.map(item => console.log(item + 10)) 


const usuario = { nome: 'Diego', idade: 23 };


// 3.2
const mostraIdade = (usuario) => usuario.idade + 2;
console.log(mostraIdade(usuario))


// 3.3 
const nome = "Diego";
const idade = 23;


const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome: nome, idade: idade});

console.log(mostraUsuario(nome, idade));

// 3.4

const promise = function() {
      return new Promise(function(resolve, reject) {
            return resolve();
 })
}

console.log(promise)
