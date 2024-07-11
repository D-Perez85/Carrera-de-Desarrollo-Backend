/** Propiedades rest son para la desestructuracion de objetos */
const { pera, manzana, ...carnes } = 
{ pera: 'pera', manzana: 'manzana', roja: 'asado', magra: 'cerdo', avicola: 'pollo' };

console.log(pera); // pera
console.log(manzana); // manzana
console.log(carnes); // { roja: 'asado', magra: 'cerdo', avicola: 'pollo' }
console.log(carnes.magra); // cerdo

/** Propiedades spread son para la asignacion */
const cosas = { manzana, ...carnes };
console.log(cosas); // {manzana: 'manzana',roja: 'asado',magra: 'cerdo',avicola: 'pollo'}


// Practica 
const sinSpread = (...args)=> { console.log(args)}
sinSpread('a', 'b', 'c', 'd', 'e'); // [ 'a', 'b', 'c', 'd', 'e' ]

const conSpread = (a, b, c, d, e) => {console.log(a, b, c, d, e)}
conSpread('a', 'b', 'c', 'd', 'e'); // a b c d e