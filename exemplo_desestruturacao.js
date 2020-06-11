const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// Pegando da const la de cima
function mostraNome({ nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);