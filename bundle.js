"use strict";

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return console.log(item + 10);
});
var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}
