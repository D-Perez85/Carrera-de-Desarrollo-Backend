/** Trailing commas 
 *  Pueden ser utiles para agregar nuevos elementos, parametros o propiedades al codigo 
**/

var arreglo = [1, 2, 3, ];
console.log(arreglo, arreglo.length); // [ 1, 2, 3 ] 3

var objeto = {
    foo: 'bar',
    bar: 'qwerty',
    age: 42,
};

// tambien se permite en funciones
function f(p) {}
function f(p,) {}
(p) => {}
(p,) => {}
