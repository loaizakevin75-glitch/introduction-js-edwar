// Arrays en JS

const numbers = [10, 20, 30, 80, 100, 7, 8];

console.log(numbers);

// Otra forma de visualizacion en tabla
console.table(numbers);

//Crear un arreglo con el constructor (new)
const months = new Array('May', 'january', 'july', 'june', );

console.table(months);

const miArray = ['Hello', 42, true, false, null, {myName: "Kevin", myJob: 'Aprendiz'}, [3172293, 3147206, 3036193]];

console.log(miArray);

//Consultar un elemento de un arreglo 
console.log(typeof numbers[2]);
console.log(miArray[5]);

//Método para reconocer la longitud de un arreglo
console.log("Kevin tu Arreglo tiene:" , numbers.length , "elementos");

// UN iterador con forEach
numbers.forEach(function(number){
    console.log(number);
})

months.forEach(function(month){
    console.log(month)
});

miArray.forEach(function(Array){
    console.log(Array)
});