//Diferencias entre metodos y funciones
const num1 = '10';
const num2 = '20';

console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num1);

//Función Parsear (parseInt) es convertir un tipo de variable a otro tipo
console.log(num1);
console.log(parseInt(num2));

// este método convierte de número a String.
console.log(num1.toString());
console.log(num1);

//=================================================================
// Función: Bloque de código independiente que realiza una tarea
function greet(){
    console.log('Hello');
};

greet();

//==================================================================

const person = {
    userName: "Kevin", 
    greet: function(){
        console.log(`Hello, I'm ${this.userName}`);
    }
}

// Método es una función asosciada a un objeto (se llama a través de un punto).
person.greet(); // Es un método por que pertenece a person
console.log(typeof person);

// Una función existe por si sola 
//Un método es una función de un objeto
