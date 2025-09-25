// More methods for arrays
// Este arreglo se creo usando el constructo
const months = new Array('May', 'January', 'July', 'June');

// Este No tiene constructor
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

// Recorrer el arreglo con un forEach para que mueste todos los elementos.
// En este caso months es un parámetro 
months.forEach(function(month){
    console.log(month);
});

// Verificar si un mes existe con forEach
months.forEach(function(month1){
    if (month1 == 'May') {
        console.log('The month of may exist in the array')
    }else{
        console.log("Doesn't exist")
    }
});

// Buscar en un arreglo si algo existe, si existe devuelve un true si no un false
const result = months.includes('June');
console.log(result);

//======================================

// En JS Includes no funciona con los objetos, solo funciona en un arreglo plano
const result2 = shoppingCart.includes('Tablet');
console.log(result2);

const num = 5 == 5;
console.log('Igualación doble', num);

// Con igualación doble solo compara el valor por eso en la consola tenemos un true.
const num2 = 5 == '5';
console.log('Igualación doble', num2);

// Con igualación triple verifica si es del mismo valor y tipo.
const num3 = 5 === '5';
console.log('Igualación triple', num3);

//===========================================
// en conclusión para un arreglo plano se usa includes y en para un arreglo de objetos se usa some.
const result3 = shoppingCart.some(function(product){
        return product.productName === 'Mouse'
    })
    
console.log(result3);

// Hace lo mismo que el código anterior Pero Más corto con arrow Function. 
let result4 = shoppingCart.some(product => product.productName === "Play station")
console.log(result4);

//===========================================

// Sumar todos los precios del carrito de compras
result5 = shoppingCart.reduce(function(total, product){
    return total + product.price
}, 0)

console.log(result5);

// Lo mismo pero con función flecha
let result6 = shoppingCart.reduce((total, product) => total + product.price, 0);
console.log(result6)

//==================================================

result7 = shoppingCart.filter(function(product){
    return product.price < 700
})
console.log(result7)

let result8 = shoppingCart.filter (product => product.price < 700);
console.log(result8)

// filtrar los del ,ismo producto
result8 = shoppingCart.filter(function(product){
    return product.productName === 'sound-bar'
});

console.log(result8);

// Lo mismo pero con arrow function 
result8 = shoppingCart.filter(product => product.productName === 'Sound-bar')

console.log(result8);

// Todos excepto un tipo 
result8 = shoppingCart.filter(function(product){
    return product.productName !== 'sound-bar'
});

console.log(result8)

result8 = shoppingCart.filter(product => product.productName !== 'Sound-bar')

console.log(result8);

