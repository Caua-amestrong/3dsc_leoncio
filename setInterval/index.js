// function imprimeOla() {
//   console.log("Ola");
// }
// function olaPessoa(nome) {
//   console.log("Ola " + nome);
// }
//  let salario = 1000;

// setInterval(function () {
//   salario = salario + 100;
//   console.clear();
//   console.log(`salario: ${salario},00`);
// }, 2000);
//
// CRIE UMA FUNÇÃO QUE RETORNE UM OBJETO JS
// EXECUTE ESTA FUNÇÃO A CADA 1s ATRAVÉS DE UMA FUNÇÃO SETINTERVAL

let capivara = {
  nome: "Apolo",
  sobrenome: "muito ruim",
  ruim: 50,
};
setInterval(function () {
  capivara.ruim = capivara.ruim + 1;
  console.clear();
  console.log(capivara);
}, 1000);