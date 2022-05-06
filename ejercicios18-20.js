// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

let calcularVocales = (cadena = "") => {
    if (!cadena) console.warn ("No ingresaste una cadena de texto")

    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`)

    let vocales = 0;
    let consonantes = 0;

    cadena = cadena.toLocaleLowerCase();
    
    for (const letra of cadena) {
        if (/[aeiou]/.test(letra)) {
            vocales++
        }
        if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) {
            consonantes++
        }
        
    }
    
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

calcularVocales("hola mundo")


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

let validarNombre = (nombre = "") => {
    if (!nombre) console.warn ("No ingresaste una cadena de texto")

    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado, NO es una cadena de texto`)

    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(nombre);

    return(expReg)
    ? console.info(`${nombre}, es un nombre valido`)
    : console.warn (`${nombre} es un nombre invalido`)

}

validarNombre("Cesar, Romero")
validarNombre("Cesarmatiromero@gmail.com")



// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

let validarEmail = (email = "") => {
    if (!email) console.warn ("No ingresaste una cadena de texto")

    if(typeof email !== "string") return console.error(`El valor ${email} ingresado, NO es una cadena de texto`)

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expReg)
    ? console.info(`${email}, es un email valido`)
    : console.warn (`${email} es un email invalido`)

}

validarEmail("Cesarmatiromero@gmail.com")
validarEmail("Cesar, Romero")