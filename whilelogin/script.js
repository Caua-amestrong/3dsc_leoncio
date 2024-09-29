// 1) CRIE UM LOOP QUE RODE ENQUANTO 
// O USUARIO NÃO ESTIVER LOGADO 
// VERIFIQUE USUARIO E SENHA 
// SE OS DADOS ESTIVEREM ERRADOS : 
  // INFORME O ERRO 
// SENAO 
// DÊ BOAS VINDAS 
/*window.prompt("Digite seu nome de usuário")
window.prompt("Digite sua senha")

const usuario = "admin"
const senha = "atumalaca"
  let estaLogado = false 

let u, s = ""
while (!estaLogado){} 
u = window.prompt("Digite seu nome de usuário")
s = window.prompt("Digite sua senha")

if (u == usuario && s == senha) {
  estaLogado = true
  alert( "Bem vindo", + usuario)
  
}else {
  alert("Usuário ou senha inválidos")
}
*/











// CRIE UM PROGRAMA QUE PEÇA AO USUARIO 
//PARA ADIVINHAR MEU NUMERO DA SORTE:
    // CRIE UM LOOP WHILE 
   // MEU NUMERO: math.random() * 60
   // NUMERO DE TENTATIVAS == 3 (CONDIÇÃO DE PARA)
   // CHECAR COM IF/ELSE    

 let numeroSorte= Math.floor(Math.random() * 60) + 1;
  let numeroTentativas = 3; 
    let tentativas = 0; 
 let acertou = false; 

while(tentativas < numeroTentativas){


  var adivinhe = parseInt(window.prompt("Adivinhe o número da sorte (entre 1 e 60):"));

  if (adivinhe === numeroSorte){
      acertou = true 
    break;
    
  }else{
    alert("Número incorreto. Tente novamente.")
  }
}
if (acertou) {
  alert("Você acertou");
}
if (acertou) {
    alert("Parabéns! Você acertou meu número da sorte: " + numeroSorte);
} else{}       
  