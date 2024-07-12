/** Las propiedades del REST OPERATOR se utilizan para la desestructuracion de objetos, nos sirve para obtener un obj solo con las 
 *  propiedades RESTANTES del obj desestructurado
**/


console.log("\n---------------------------------------- Ejemplo 01 -----------------------------------------------------"); 
const { pera, manzana, ...carnes } = { pera: 'pera', manzana: 'manzana', roja: 'asado', magra: 'cerdo', avicola: 'pollo' };

console.log(pera); // pera
console.log(manzana); // manzana
console.log(carnes); // { roja: 'asado', magra: 'cerdo', avicola: 'pollo' }
console.log(carnes.magra); // cerdo


console.log("\n---------------------------------------- Ejemplo 02 -----------------------------------------------------"); 
let objeto = {a : 1, b : 2, c: 3}
let {a, ...rest} = objeto // Trabajamos con A y guardamos el resto en un obj, por si lo necesitamos.

console.log(a); // 1
console.log(rest); // {b: 2, c:3}


/** SPREAD OPERATOR son sirve para la desestructuracion de objetos y utilizar solo las propiedades que queremos.
*   Generalmente usamos SPREAD para la asignacion
*/
console.log("\n---------------------------------------- Ejemplo 03 -----------------------------------------------------"); 
const cosas = { manzana, ...carnes };

console.log(cosas); // {manzana: 'manzana', roja: 'asado', magra: 'cerdo', avicola: 'pollo'}

console.log("\n---------------------------------------- Ejemplo 03 -----------------------------------------------------"); 

let departamento = { propiedad : 1, valor: "b", indice: true};
let {propiedad} = departamento; // tomamos el objeto departamento y extraemos solo su primer valor.
console.log(propiedad) // 1

let monoambiente = {...departamento};
console.log(monoambiente); // { propiedad: 1, valor: 'b', indice: true }

console.log("\n---------------------------------------- PRACTICA FN -----------------------------------------------------"); 
const sinSpread = (...args)=> { console.log(args)}
sinSpread('a', 'b', 'c', 'd', 'e'); // [ 'a', 'b', 'c', 'd', 'e' ]

const conSpread = (a, b, c, d, e) => {console.log(a, b, c, d, e)}
conSpread('a', 'b', 'c', 'd', 'e'); // a b c d e