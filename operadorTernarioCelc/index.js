// OPERADOR TERNARIO 

// SÃO USADOS PARA SIMPLIFICAR O PROCESSO DE TOMADA DE DECISÃO E, EVENTUALMENTE, 
//SUBSTITUIR IF/ELSE 

const idade = 18 
if (idade >= 18) {
  console.log("Permitida a entrada");
} else {
  console.log("Proibido para menores");
}
  
// COM OPERADOR TERNARIO 
const passe = idade >= 18 ? "Permitida a entrada" : "Proibida a entrada"
console.log(passe)