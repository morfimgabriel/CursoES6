// const é apenas setada uma vez, é imutavel
const a = 1

// para mudar a const para algo mutavel
// tem a seguinte forma
const usuario = { nome: 'Diego'};
usuario.nome = 'Gabriel';

console.log(usuario);


 // variaveis de escopo 

 function teste(x) {
     // Escopo é tudo que vai estar na primeira chave (let)
     let y = 2;

     if (x > 5) { 
         let y = 4
         console.log(x, y);
     }
 }

 teste(10);


