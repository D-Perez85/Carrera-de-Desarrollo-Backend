/** Devuelve el operando del lado derecho cuando su operando izquierdo es nulo o indefinido. 
** A diferencia del operador OR, el operando izquierdo se devuelve si es un valor falso NOT NULL  
*/

const foo = null ?? 'default string';
console.log(foo); // default string

const baz = 0 ?? 42;
console.log(baz); // 0

const nulo = null;
const vacio = "";
const numero = 42;

const valorA = nulo ?? "valor por defecto de A";
const valorB = vacio ?? "valor por defecto de B";
const valorC = numero ?? "valor por defecto de C";

console.log('A:', valorA);
console.log('B:', valorB);
console.log('C:', valorC);
