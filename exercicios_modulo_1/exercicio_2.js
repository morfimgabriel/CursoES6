const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
]

// Pega todas as idades dos usuarios
const idade_usuarios = usuarios.map(function(item) { 
    return item.idade;
});

const usuarios_rocketseat_18 = usuarios.filter(function(item){
    if (item.empresa === 'Rocketseat'){
        return item.idade > 18;
    }
})


const find = usuarios.find(function(item){
    return item.empresa === 'Google';
})


// falhei 
const sum = usuarios.reduce(function(item) {
    item.idade = item.idade * 2
    return item;
})


console.log(idade_usuarios);
console.log(usuarios_rocketseat_18);
console.log(find)
console.log(sum)