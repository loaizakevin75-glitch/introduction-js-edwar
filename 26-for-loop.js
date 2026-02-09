//ForEach map son métodos exclusivos de arreglos

const shoppingCart = [
    {productName: 'Smart tv 60"', price: 900, color: 'Blue'},
    {productName: 'Smart tv 50"', price: 800},
    {productName: 'Tablet', price: 500},
    {productName: 'Sound-bar', price: 900},
    {productName: 'Google assistand', price: 600},
    {productName: 'Sound-bar', price: 400},
    {productName: 'Play statrion', price: 800},
    {productName: 'Wii', price: 450},
    {productName: 'Mouse', price: 50},
]

// // Recorrer un arreglo por cada elemento
// shoppingCart.forEach(function(product){
//     console.log(product);
// });

// // Acceder a un elemento especifico
// shoppingCart.forEach(function(product){
//     console.log(product);
// });

// // Acceder a un elemento especifico
// shoppingCart.forEach(function(product){
//     console.log(product);
// });

// // Acceder a un elemento especifico
// shoppingCart.forEach(function(product){
//     console.log(product);
// });

//=========================================

//Ahora ForEach con arrow function

// // Recorrer un arreglo por cada elemento
shoppingCart.forEach((product) => console.log(product));
shoppingCart.forEach((product) => console.log(product.productName));
shoppingCart.forEach((product) => console.log(product.price));
shoppingCart.forEach((product) => console.log(product.color));

