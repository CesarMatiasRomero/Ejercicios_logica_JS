// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

let num = 7;

let primo = (num) => {
  let divisible = false;
 for(let i = 2; i < num; i++){
     if((num % i) === 0){
         divisible = true;
         break
     }
 }
 return (divisible)
 ? console.log(`El numero ${num} No es primo`)
 : console.log(`El numero ${num}, Si es primo`);
  
};

primo(17);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

let parImpar = () => {
  let numero = 6;

  if (numero % 2 === 0) {
    console.log("El numero ingresado es par");
  } else {
    console.log("El numero ingresado es impar");
  }
};

parImpar();

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

let gradosCelsius = (g) => {
    let fahrenheit = ((g * 1.8) + 32);
  console.log("El valor ingresado son " + fahrenheit + " grados Fahrengeit");
};

gradosCelsius(30);

let gradosFahrengeit = (g) => {
    let celsius = ((g - 32) / 1.8);
  
  console.log("El valor ingresado son " + celsius + " grados Celsius");
};

gradosFahrengeit(86);
