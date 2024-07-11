/**  Los iteradores asincronos estan pensados para iterar estructuras de datos asincrona  */

async function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(segundos)
        }, segundos * 1000);
    });
}


async function ejecutar() {
    const promesas = [esperar(1), esperar(2), esperar(3)];

    // Note: comentar / descomentar los distintos tipos de iteracion para probar uno u otro!!
    // iteracion normal (esto no resuelve las promesas y finaliza el flujo de ejecución)
    // for (const item of promesas) {console.log('normal:', item)}

    // iteracion asincronica (esto resuelve las promesas y finaliza el flujo de ejecución)
    for await (const item of promesas) {console.log('con async', item)}
}

ejecutar()
    .then(res => console.log('se completaron las promesas'))
    .catch(error => console.log('ocurrio un error', error))
    .finally(() => console.log('termino!'));

