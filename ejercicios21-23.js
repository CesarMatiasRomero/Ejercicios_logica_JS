// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

let numerosElevados = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if (arr.length === 0) return console.error("El arreglo esta vacio");

    for (let num of arr) {
        if (typeof num != "number") return console.error("El valor ingresado no es un numero")
    }

    let newArr = arr.map(el => el * el)

    return console.info(`Arreglo original ${arr}, arreglo elevado al cuadrado ${newArr}`)
}

numerosElevados([2,4,5])


// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

let descubrirNumeros = (num = undefined) => {
    if (num === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if (!(num instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if (num.length === 0) return console.error("El arreglo esta vacio");

    for (let numeros of num) {
        if (typeof numeros != "number") return console.error("El valor ingresado no es un numero")
    }
    
    let min = Math.min(...num)
    let max = Math.max(...num)

    return console.info(`El numero mas alto del array es ${max}, el numero mas bajo del array es ${min}`)

}

descubrirNumeros([51,36,28,15,12,99,41,6,26,33,2,89])


// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.



let filtrarNumeros = (num) => {

    if (num === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if (!(num instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if (num.length === 0) return console.error("El arreglo esta vacio");


    numPares = [];
    numImpares = [];

    for( let i = 0; i < num.length; i++){
        if (i % 2 === 0){
            numPares.push(i)
        }else{
            numImpares.push(i)
        }
    }

    return `Los numeros pares son ${numPares} y los impares son ${numImpares}`

}

filtrarNumeros([1,2,3,4,5,6,7,8,9])