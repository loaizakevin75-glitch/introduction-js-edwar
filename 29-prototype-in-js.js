//Prototype
//El prototipo es com un molde o modelo base 
// para este ejemplo, voy a guardar las funciones comunes en un lugar llamando prototype, asi los objetos del mismo tipo pueden heredarlas.

function Car(brand, model, color){
    this.brand = brand;
    this.model = model;
    this.color = console;
}

const car1 = new Car('Suzuki', 'Frons','Yellow');
const car2 = new Car('Honda', 'Mars', 'Gray');

console.log(car1);
console.log(car2);
// Se define la funcion para todos los vehiculos
Car.prototype.stop = function (){
    console.log(`El carro ${this.brand} esta frenando`);
    
};
car1.stop();
car2.stop();