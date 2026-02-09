// Estructura Switch
// Permite evaluar una expresión y ejecutar diferentes bloques de código, según el caso que coincida.

const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con card')
        
        break;
        
        
        case 'bitCoin':
            console.log('Pagaste con bitcoin')
            
            break;
            
            case 'debitCard':
        console.log('Pagaste con debitCard')
        
        break;

    case 'creditCard':
        console.log('Pagaste con creditCard')
        
        break;

        default:
            console.log('Método de pago No válido');
        break;
}

