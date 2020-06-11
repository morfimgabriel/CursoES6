const arr = [1, 3 , 4, 5, 8, 10];

// percorrer vetor utilizasse a funcao map
const newArr = arr.map(function(item, index) { 
    return item + index;
});

console.log(newArr);

// ---------------------- ex 1

const sum = arr.reduce(function(total, next) {
    return total + next;
})

console.log(sum)

// ---------------------- ex 2


// Funcao Filter Percorre o Array para retornar True ou false ( item par)
const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter)

// ---------------------- ex 3





const find = arr.find(function(item){
    return item === 4;
})

console.log(find)


// ---------------------- ex 4 

