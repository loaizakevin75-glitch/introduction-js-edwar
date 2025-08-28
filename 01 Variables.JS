// alerta ("estoy en Hello world")
  // convenciones para nombrar 

  //CamelCase
  //UpperCamelCase => se usa para nombrar clases en JavaScript
  //lowerCamelCase => se usa para nombrar las variables en JavaScript
  // SCREAMING_SNAKE_CASE => se usa para nombrar las variables consteantes en JavaScript
// kebab-case => Se usa para nombrar archivos multimedia en JavaScript 

    // snake_case => Generalmente usado para nombrar variables en el lenguaje Python
    
    // Train-Case => Variante del kebab-case, pero la primera letra de cada palabra va en mayúscula

    // Ya NO se usa var para declarar las variables, actualmente se usa let 
    // En JS no es obligatorio  indicar el tipo de variable 
    // JS se puede o NO usar el punto y coma

    var product = 'sensor-1';
    var product2 = 'sensor-2';

    console.log(product);
    console.log(product2);

    // No se puede iniciar una variable con un guion (-)
// var  -sensor ='sensor-3';

// No se puede iniciar una variable con un número
// var 1sensor = 'sensor-4';

var _sensor = 'sensor-5'; 

// Si esta permitido iniciar una variable con un guion bajo (_)
console.log(_sensor);

// Crear una variable de las tres formas distintas

//var sensor10 = "sensor de lluvia";
//const sensor10 = "sensor de lluvia"; 
let sensor10 = "sensor de lluvia";

console.log(sensor10);

//Ejemplo con var 
// No me indicar error por duplicidad de variable
// var sensor11 = "sensor de humedad";
//  var sensor11 = "sensor de calor";

//     console.log(sensor11);

//let no permite duplicidad al declarar variables 
// let sensor12 = "sensor de velocidad";
// let sensor12 = "sensor de luz";
// No muestera eror por inicializacion 
// console.log(userName);
// var userName = "Kevin ";

console.log(userName);
let userName = "Kevin ";

// Usando la declaracion const no se puede cambiar su valor 
const maxSize = 1024;
maxSize = 2048;

console.log(maxSize);

