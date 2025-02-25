/** Funcion async 
 * Devuelve el resultado en una promesa. El operador await es usado para esperar una promesa
 * IMPORTANTE: el operador await solo puede ser usado DENTRO de una funcion async  
**/

//declaro la funcion esperar, definida como funcion async
async function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(segundos)
        }, segundos * 1000);
    });
}

// como debo esperar con await, declaro la funcion sumar con async tambien
const sumar = async function (a, b) {
    let res1 = await esperar(a);
    let res2 = await esperar(b);
    return res1 + res2;
};

// ejecuto la promesa y recibo los resultados
sumar(1, 1)
    .then(resultado => console.log('resultado:', resultado))
    .catch(error => console.log('error', error))
    .finally(()=> console.log('fin del programa'))



