const arr = [1, 3 , 4, 5, 6]

 // exemplo 1
const newArr = arr.map(item => item * 2);

// exemplo 2
const newArr2 = arr.map(item => {
    return item * 2;
});


console.log(newArr)


// Definindo Valores padrão caso não tenha enviado um parametro na chamada
function soma(a = 3, b = 6) {
    return a + b;
}

const teste = () => {
    return 'teste';
}

const teste2 = () => ({ nome: 'Diego' });

console.log(teste2);