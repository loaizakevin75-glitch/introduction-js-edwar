// This es una palabra reservada del sistema, o sea que no se puede crear ni funciones ni variables cin este nombre.

const reservation = {
    userName: "Kevin" ,
    lastName: "Loaiza",
    userAge: 20,
    total: 100000,
    isPaid: false,

// Los objetos puede contener fncion 
 information: function (params) {
    console.log`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es: ${this.isPaid}`
}

};

const reservation2 = {
    userName: "Carlos",
    lastName: "Gimenez",
    userAge: 24,
    total: 150000,
    isPaid: true,

// Los objetos puede contener fncion 
 information: function (params) {
    console.log`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es: ${this.isPaid}`
}

};
const reservation3 = {
    userName: "Carla",
    lastName: "Gimenez",
    userAge: 28,
    total: 190000,
    isPaid: true,

// Los objetos puede contener fncion 
 information:() => {
    console.log`El cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es: ${this.isPaid}`
}

};

// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar.
//Es obligatorio usar la función de esta manera, por esta hacer referencia al objeto que se está usando.
reservation.information();
reservation2.information();
//Si se usan arrow function no es capaz de leer los datos del contexto, dando como resultado undefined
reservation3.information();