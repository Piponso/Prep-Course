// No cambies los nombres de las funciones.

const parseLinkDestination = require("markdown-it/lib/helpers/parse_link_destination");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let llaves=Object.keys(objeto);
  let valores=Object.values(objeto);
  let i;
  let resultado=[];
  for(i=0;i<=(llaves.length-1);i++){
    resultado.push([llaves[i],valores[i]])
  }
  return(resultado);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let i;
  let l;
  let cont;
  letrasenstring=[];
  resultado={}
  letras=[];
  //sktpwrroqstkrpwwsqtqopwktsd
  for(i=0;i<=string.length-1;i++){
    cont=1;
    for(l=i+1;l<=string.length-1;l++){
      if(string[i]==string[l]){
        cont++;
      }
    }
    if (cont==1){
      letrasenstring.push(string[i]);
    }
    
  }
  
  for(i=0;i<=letrasenstring.length-1;i++){
    cont=0;
    for(l=0;l<=string.length-1;l++){
      if(letrasenstring[i]==string[l]){
        cont++;
      }
    }
    resultado[letrasenstring[i]]=cont;
    
  }
  
  return(resultado);

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let i;
  let mayusculas='';
  let minusculas='';
  let valoraretornar='';
  for (i=0;i<=s.length-1;i++){
    if(s[i]==s[i].toUpperCase()){
      mayusculas=mayusculas+s[i];
    }
    if(s[i]==s[i].toLowerCase()){
      minusculas=minusculas+s[i];
    }
  }
  valoraretornar=mayusculas + minusculas;
  return (valoraretornar);

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras;
  let palabra;
  let oracion='';
  palabras= str.split(' ');
  
  for(var p=0;p<=palabras.length-1;p++){
    palabra='';
    for (var i = palabras[p].length - 1; i >= 0; i--) {
      palabra=palabra+palabras[p][i];
    }
    if(p<palabras.length-1){
      palabra=palabra+' ';
    }
    oracion=oracion+ palabra;
  }
  return(oracion);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let valoraretornar='No es capicua';
  let stringnum=numero+'';
  let numeroparaatras='';
  for (var i = stringnum.length - 1; i >= 0; i--) {
    numeroparaatras=numeroparaatras+stringnum[i];
  }
  if(numeroparaatras==stringnum){
    valoraretornar='Es capicua';
  }
  return(valoraretornar);
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  let nuevacadena='';
  
  for(var p=0;p<=cadena.length-1;p++){
    if((cadena[p]=='a')||(cadena[p]=='b')||(cadena[p]=='c')){
      nuevacadena=nuevacadena;
    }
    else
      nuevacadena=nuevacadena+cadena[p];
  }
  return(nuevacadena);
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let max=0;
  let auxvaloraretornar=[];
  let valoraretornar=[];
  let palabra='';
  for(let i=0;i<=arr.length-1;i++){
    palabra=arr[i]+'';
    if (palabra.length>max){
      max=palabra.length;
    }
  }
  
  for(let i=0;i<=max;i++){
    auxvaloraretornar.push('');
  }
  for(let i=0;i<=arr.length-1;i++){
    palabra=arr[i]+'';
    if(auxvaloraretornar[palabra.length]==''){
      auxvaloraretornar.splice(palabra.length, 0, arr[i]);
    }
    else
      auxvaloraretornar.splice(palabra.length+1, 0, arr[i]);
    
  }
  for(let i=0;i<=auxvaloraretornar.length-1;i++){
    if(auxvaloraretornar[i]!=''){
      valoraretornar.push(auxvaloraretornar[i]);
    }
  }
  return(valoraretornar);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let valoraretornar=[];
  for(var a1=0;a1<arreglo1.length;a1++){
    for(var a2=0;a2<arreglo2.length;a2++){
      if(arreglo1[a1]==arreglo2[a2]){
        valoraretornar.push(arreglo1[a1]);
      }
    }
  }
  return(valoraretornar);
  
    
    
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

