//Cuando se unen dos objetos lo ideal es NO modificar ninguno de los dos objetos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true,
}

//Object.freeze-(product);

// Objeto que almacena medidas 
const measurements = {
    weight :'1 kg',
    measurement : '10cm'
}

// Rest operator, consta de (...) 

const newProduct = {...product, ...measurements};

//console.log(product);
//console.log(newproduct);
 
const vehiculo = {
    weight : '113 kg',
    length :'1.5m'
}

const driver = {
    weight : '58 kg',
    height : '1.66m'
}

const newDriver = {...vehiculo, ...driver};

console.log(product);
console.log(newDriver);