// Arrow function
// En JS es una forma mas corta de escribir funciones usando la sintaxis () =>

    // Sintaxis más breve, y este es ideal para funciones pequeñas 
    // NO tiene su propios this, hereda el this del contexto donde se define 


    const add = function(){
        console.log(16+3);
    }

    add();

    //Funcion con parametros
    const add2 = function(num1, num2){
        console.log(num1 + num2);
    }

    add2(4, 8);

    //Las llaves son opcionales cuando después de la flecha solo tengo una sentencia 
const add3 = (num3, num4) => console.log(num3 + num4);
add3(6, 9);

// =========================

// Otro ejemplo
//const learn = (technology) => {
   // console.log('JavaScript ${technology}');
//}
const learn = (technology) => console.log(`technology ${technology}`);
learn ('technology')
console.log(learn)
// 
const months = new Array('May', 'January', 'July', 'June', 'December', 'Novembe', 'Febrary');

console.log(months);

const shoppingCart = [
    {productName: 'Smart tv 60"', price: 900},
    {productName: 'Smart tv 50"', price: 800},
    {productName: 'Tablet', price: 500},
    {productName: 'Sound-bar', price: 900},
    {productName: 'Google assistand', price: 600},
    {productName: 'Sound-bar', price: 400},
    {productName: 'Play statrion', price: 800},
    {productName: 'Wii', price: 450},
    {productName: 'Mouse', price: 50},
]

// months.forEach(function(month0){
//     if(month == 'November' || month == 'december'){
//         console.log('Se verifico en el arreglo y el mes si existe');
//     }else{
//         console.log('el mes No existe');
//     }
// })

months.forEach(function(month){
    if(month == 'November' || month == 'december'){
        console.log('Se verificó en el arreglo y el mes si existe');
    }else{
        console.log('el mes No existe');
    }
})

//===============================

// const result = shoppingCart.some(function(product){
//     return product.price === 800;
// })

// console.log(result);
const result = shoppingCart.some(product => product.price === 800);

console.log(result);

//===============================================
// let and const: new ways of declaring variables.
// Arrow functions: () => {}.

// const result3 = shoppingCart.reduce(function( total, product){
//     return total + productName
// }, 0)

// console.log(result3);
const result3 = shoppingCart.reduce(( total, product) => total + product.price, 0)
console.log(result3);

//================= ¿Que hace una variable en una fiesta'
// Declararse 

// const result6 = shoppingCart.filter(function(product){
//     return product.price < 600;
// })

// console.log(result6)
const result6 = shoppingCart.filter(product => product.price < 600
)

console.log(result6)

//============================
 function greet(userName){
    console.log(`Hello ${userName}`);
 }

console.log(greet("Kevin"));

greet2 = (userName) =>
    console.log(`Hello ${userName}`);

console.log(greet2("Kev"));
//===============================

const boost = num => num * num;
console.log(boost(4));

const boost2 = num => Math.pow(num, 2);
console.log(boost2(100));

// ========= ¿que hace un bucle for en terapia? ====
// Trata de cerrar ciclos. ...

// Arrow function con retorno explíto

// Se usa cuando el cuerpo de una función  tiene llaves{}

const add10 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add10(15, 7));

//============================

//Retorno implícito, cuando la función NO tiene llaves realiza el retorno implicitamente.
const add11 = (num6, num7) => num6 + num7;

console.log(add11(4, 6));

