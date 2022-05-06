// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(base === 2){
        return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    } else if( base === 10){
        return console.log(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }else{
        return console.log("El tipo de base a convertir NO es valido");
    }

}

convertirBinarioDecimal(100, 2)
convertirBinarioDecimal(1110010, 2)
convertirBinarioDecimal(100,10)


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const montoFinal = (total, descuento) => {
    let rebaja = ((descuento * total) /100);
    let montoFinal = total - rebaja
    console.log(`El monto final de su compra es ${montoFinal}`); 
}

montoFinal(500,30)


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularYear = (fecha = undefined) => {
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let yearEnMs = 1000 * 60 * 60 * 24 * 365;
    let anioHumano = Math.floor(hoyMenosFecha / yearEnMs)

    console.log(`Desde la fecha ingresada han pasado ${anioHumano} anios`);
}

calcularYear(new Date(1995,02,24))


