const arr = [1, 3 , 4, 5, 6]

const newArr = arr.map(item => item * 2);


console.log(newArr)


// Definindo Valores padrão caso não tenha enviado um parametro na chamada
function soma(a = 3, b = 6) {
    return a + b;
}



// com arrow function
const soma2 = (a = 3, b = 6) => a + b;

console.log(soma(1))
console.log(soma2(1))