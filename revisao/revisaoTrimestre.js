/**
 * // SET INTERVAL / SET TIME OUT
 * função nativa que recebe argumentos
 * controla dados a partir de argumento 
 */


const intervalo1 = setInterval(function(){
  console.log("Ola");
},200);
clearInterval(intervalo1);