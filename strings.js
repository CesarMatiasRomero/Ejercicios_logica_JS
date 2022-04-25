// EJERCICIOS

// 1) Programa una función que cuente el número de caracteres de una cadena de texto.
let contarCaracteres = () => {
  let saludo = "Hola, Buenos dias. Mi nombre es César Romero.";
  console.log(`El total de caracteres de la cadena es ${saludo.length}`);
};
contarCaracteres();

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let textoRecortado = () => {
  let texto = "Hola, Buenos dias. Mi nombre es César Romero.";
  console.log(texto.slice(0, 18));
};
textoRecortado();

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let cadenaSeparada = () => {
  let diasDeLaSemana =
    "Lunes, Martes, Miercoles, Jueves, Viernes, Sábado, Domingo";
  console.log(diasDeLaSemana.split(","));
};
cadenaSeparada();

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let repetirTexto = () => {
  let diasFinesDeSemana = "Sábado y Domingo ";
  console.log(diasFinesDeSemana.repeat(5));
};
repetirTexto();
