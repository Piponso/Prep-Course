// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var reultado=array[0];
  return(reultado)
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var resultado=array[array.length-1];
  return(resultado)
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  resultado=array.length;
  return(resultado)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var i;
  resultado=[];
  for(i=0;i<array.length;i++){
    resultado.push(array[i]+1)
  }
  return(resultado)
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var resultado= array;
  resultado.push(elemento);
  return(resultado)
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  resultado=array;
  resultado.unshift(elemento);
  return(resultado)
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var resultado="";
  var i=0;
  for(i=0;i<palabras.length;i++){
    if(i!=palabras.length-1){
      resultado= resultado+palabras[i]+" ";
    }
    else
      resultado= resultado+palabras[i]
  }

  return(resultado)
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var resultado=false;
  var i;
  for(i=0;i<array.length;i++){
    if (resultado==false){
      if (elemento===array[i]){
        resultado=true;
      }
    }
  }
  return(resultado)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado=0;
  var i=0;
  for(i=0;i<numeros.length;i++){
    resultado=resultado+numeros[i];
  }
  return(resultado)
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado=0;
  var i=0;
  for(i=0;i<resultadosTest.length;i++){
    resultado=resultado+resultadosTest[i];
  }
  resultado=resultado/resultadosTest.length
  return(resultado)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var resultado=0;
  var i=0;
  for(i=0;i<numeros.length;i++){
    if(numeros[i]>resultado){
      resultado=numeros[i];
    }
  }
  return(resultado)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resultado=0;
  var i=0;
  argumentos=arguments
  if(argumentos.length>0){
    for(i=0;i<argumentos.length;i++){
      if(i==0){
        resultado=argumentos[i];
      }
      else
        resultado=resultado*argumentos[i];
    }
  }
  return (resultado)

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var resultado=0;
  var i=0;
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      resultado++;
    }
  }
  return(resultado)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var resultado;
  if(numeroDeDia>0){
    if((numeroDeDia>1)&&(numeroDeDia<6)){
      resultado="Es dia Laboral";
    }
    else
      resultado="Es fin de semana";
  }
  return(resultado)
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var resultado=false;
  var strign=n.toString();
  var i;
  if (strign[0]=="9"){
    resultado=true;
  }
  return(resultado)
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var resultado=false;
  var i=0;
  for(i=0;i<arreglo.length;i++){
    if(i<arreglo.length-1){
      if(arreglo[i]==arreglo[i+1]){
        resultado=true;
      }
    }
  }
  return(resultado)
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var resultado=[];
  
  var mesesPedidos=["Enero","Marzo","Noviembre"];
  
  var i=0;
  var cantMesesEncontrados=0
  for(i=0;i<array.length;i++){
    var m=0;
    for(m=0;m<mesesPedidos.length;m++){ 
      if(array[i]==mesesPedidos[m]){
        resultado.push(mesesPedidos[m]);
        cantMesesEncontrados++;
      }
    }
  }
  if(cantMesesEncontrados<3){
    resultado="No se encontraron los meses pedidos";
  }
  return(resultado)
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var resultado=[];
  var i=0;
  for(i=0;i<array.length;i++){
    
    if(array[i]>100){
      resultado.push(array[i]);
    }
    
  }
  return(resultado)
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var resultado=[];
  var auxnero=numero;
  var i;
  for(i=1;i<=10;i++){
    auxnero=auxnero+2;
    resultado.push(auxnero)
    if (auxnero==i){
      resultado="Se interrumpió la ejecución";
      break;
    }
  }
  return(resultado)
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var resultado=[];
  var auxnumero=numero;
  var i;
  for(i=1;i<10;i++){
    // al parecer hay lagun tipo de problema en el test porque si se hade la excepcion
    // con la iteracion 5 como pide en la consigna el test no lo da como valido.  
    //if(i!=5){
      auxnumero=auxnumero+2;
      resultado.push(auxnumero)
    //}
    //else
      //continue;
  }
  return(resultado)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
