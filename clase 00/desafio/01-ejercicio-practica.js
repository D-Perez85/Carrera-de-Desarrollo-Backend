/** Desarrollar una Fn que reciba args y retorne la suma de los mismos en un array de un elemento.
**  Retornar el array con el resultado de operaciones de suma con args varios, (usar spread / rest)
**/

const sumar = (...args) =>{
    let salida = 0; 
    args.filter((a)=> typeof a == 'number')
        .forEach((value)=> salida +=value); 
            return [salida]
    }
const result = sumar(2, 2, 'a', null, 5, 'pepe', undefined, 6); 
console.log(result); // 15