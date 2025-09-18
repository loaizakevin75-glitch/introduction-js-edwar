//Kevin Loaiza Campuzano
//Metodos para los objetos 
// Con esta linea de codigo garantizo buenas prácticas.
"use strict"

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

const speedMax = 80;
//speedMax = 70;
console.log(speedMax);

// Aunque el objeto product este declarado como constante permite agregar propiedades.
product.quantity = 20;
console.log(product);

// cone el metodo o función freeze bloqueamos el objeto para que no se puedan agregar mas propiedades, eliminarlas o modificarlas (editarlas).
//Object.freeze(product);

// Si usamos el metodo seal no podemos agregar ni eliminar pero si se puede editar o modificar una propiedad.
Object.seal(product);

// Vamos a agregar una nueva propiedad color 
//product.color = "black";
// Forma de saber si un objeto está bloqueado
console.log("El objeto está bloqueado?", Object.isFrozen(product));

let response;
if (Object.isFrozen(product)) {
     response = "Si";
}else{
    response =  "No"
}

console.log("El objeto está bloqueado?" + response);

// Eliminar una propiedad de un objeto.
//delete product.price;
//console.log(product);

//Modificar o editar las propiedades de un objeto
//product.productName = "Sensor de PH";
//console.log(productName);

// Saber si un objeto esta sellado
console.log("El objeto esta sellado?:" + Object.isSealed(product));