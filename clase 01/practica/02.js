console.log("\n-----------------------------------EJ 01 - Opcion A ------------------------------------------------"); 

var valores = [true, 5, false, "hola", "adios", 2];
function optionA(lista) {
    const filtered = lista.filter((item) => typeof item === 'string'); 
    return filtered.reduce((a,b) => (a.length > b.length ? a : b));  
}; 
console.log(optionA(valores)); 

console.log("\n-----------------------------------EJ 01 - Opcion B ------------------------------------------------"); 

function letters(lista) {
    let string = lista.filter(element => typeof element === 'string');
    return string; 
}

function optionB(fn) {
    return fn.reduce((a,b) => (a.length > b.length ? a : b));  
}; 
console.log(optionB(letters(valores))); 

console.log("\n---------------------------------------- EJ 02 -----------------------------------------------------"); 

const functionA = ((value)=>{
    indice = value.indexOf(false, 0)
        return `El parametro false se encuentra en la posicion ${indice}`; 
})
console.log(functionA(valores)); 

console.log("\n---------------------------------------- EJ 03 -----------------------------------------------------"); 

const functionB = ((lista, op)=>{
    const nros = lista.filter((item) => typeof item === 'number'); 
    const[n1,n2]  = [...nros]; 
    const operations ={
        '+' : n1 + n2,
        '-' : n1 - n2,
        '/' : n1 / n2,
        '*' : n1 * n2 
    }; 
    const result = operations[op] ? operations[op] : operations['+']; 
    return result;  
})
console.log(functionB(valores, '+'));  // 7

console.log("\n---------------------------------------- EJ 04 -----------------------------------------------------"); 

/** Definir una fn que recibe una lista de datos y los muestra, si está vacía muestar: “lista vacía”. 
** Invocarla con datos de prueba para verificar que funciona bien en ambos casos.
**/

let lista =  [{id: 1, nota: "Nota 01"}, {id: 2, nota: "Nota 02"}, {id: 3, nota: "Nota 03"}]; 
let lista2 = []; 

function mostrarNotas (value) {
    if(value.length > 0){
        console.log(`Lista de notas: `);
        for (let x = 0; x < value.length; x++) {
            if(value.length !== 0){
            console.log(`ID ${value[x].id} : ${value[x].nota}`);
            }
        }
    }else{
        console.log(`lista vacía`);
    }
}
mostrarNotas(lista); 


