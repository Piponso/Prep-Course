// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
  const resultado=numeros.reduce(function(acc,numero){
    return(acc+numero);
  })
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  var resultado= array.forEach(function(elemento){
    cb (elemento);
  })
//  let i;
 // let resultado;
  //for (i=0;i<=array.length-1;i++){
   // cb (array[i]);
  //}
  
  /// el resultado me esta tirando un undefined como ultimo elemento y no se por que lo hace.
  
  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var resultado= array.map(function(elemento,indice){
    return (cb(elemento));
  })
  return (resultado)
  }

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //var filtrado=array.forEach(function(elemento){
  //  if (elemento[0]=='a'){
  //    return elemento;
  //  }
  //})
  var i;
  var filtrado=[];
  for(i=0;i<array.length;i++){
    if (array[i][0]=='a'){
      filtrado.push(array[i]);
    }
  }
  return(filtrado);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
