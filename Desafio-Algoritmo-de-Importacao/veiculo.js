
let velocidade = 0;

function acelerar(aceleracao) {
  velocidade += aceleracao;
  return `${velocidade} kms/h`;
}

function mostrarDadosVeiculo(marca, modelo, fabricante) {
  console.log(`Marca: ${marca}`);
  console.log(`Modelo: ${modelo}`);
  console.log(`Fabricante: ${fabricante}`);
}

export {acelerar, mostrarDadosVeiculo}