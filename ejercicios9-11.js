// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function getRandom() {
    let minimo = 501;
    let maximo = 601;

    let numPosible = Math.random() * (maximo - minimo) + minimo
    console.log(numPosible); 

}

getRandom()



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


let capicua = () => {
    let num = "2002";
    let capicua = num.split("").reverse().join("");
    
    if(num === capicua){
        // return true
        console.log("True");
    }else{
        // return false
        console.log("False");
    }

    

}

capicua()



// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

let factorial = () => {
    let numero = 5;
    let fac = 1;
    for(let i = numero; i > 1; i--){
        fac *= i;
    }
    return fac
}

console.log(factorial());


