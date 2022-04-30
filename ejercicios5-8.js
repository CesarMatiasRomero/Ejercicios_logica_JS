// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let reversa = () => {
    let saludo = "Hola mundo";
    return saludo.split("").reverse().join("")
    
}
reversa()



// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let contarPalabra = () => {
    let texto = "Hoy es sábado 30 de abril. Hoy es un dia genial para aprender a programar";
    let textoSeparado = texto.split(" ");
    console.log(textoSeparado);
    let contadorPalabra = 0;

    for (let i = 0; i < textoSeparado.length; i++){
        if(textoSeparado[i] == "Hoy"){
            contadorPalabra++
        }else{

        }
    }
    return contadorPalabra
}

console.log(contarPalabra());


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

let polindromo = () => {
    let texto1 = "salas";
    let textoPolindromo = texto1.split("").reverse().join("");
    
    if(texto1 === textoPolindromo){
        // return true
        console.log("True");
    }else{
        // return false
        console.log("False");
    }

    

}

polindromo()



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.



let eliminarCaracteres = (texto = "", patron = "") => {
    console.log(texto.replace(new RegExp(patron, "ig"), "")); 
}

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")
    

