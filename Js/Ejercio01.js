// comentarios en una sola linea

/*
Comentarios multi linea
*/

//EJERCICIO 01 : Declaracion de Variables

// a) Var

var miNombre ="Brian Jesus";
var misApellidos;
var miEdad = 19;

//El objeto de consola nos permite enviar datos a la terminal y poder 
console.warn("---Declaracion de variables usando el prefijo   VAR");
console.log("Intentando leer las variables: ", miNombre,misApellidos, miEdad);

misApellidos = "Mendoza Marquez"
console.log("Ya que anbos fueron inicializados vuelven a intentar leerlas: ", miNombre, misApellidos);



//Una variable puede cambiar el proceso de ejecución del programa.

//b) COSNT
console.warn("--- Declaración de variables del tipo constante usando: CONST")
const miUniversidad = "UT Xicotepec";
const miMatricula = 230574
 console.log("Hola, ",miNombre," ",misApellidos," se que estudias actualmente en: ", miUniversidad, " asignamos la matricula: ",miMatricula, "y tienes una edad de: ",miEdad, " años");
 
 //Para saber el tipo de dato que tiene una variable o constante podemes utilizar la función typeOf()
 console.log("Analizando los datos puedo deducir que: ")
 console.log("miNombre es del tipo:", typeof(miNombre))
 console.log("misApellidos es del tipo:", typeof(misApellidos))
 console.log("miUniveridad es del tipo:", typeof(miUniversidad))
 console.log("miMatricula es del tipo:", typeof(miMatricula))
 console.log("miEdad es del tipo:", typeof(miEdad))

 //c) LET
 let miFechaNacimiento = "2005-03-24";
 let miColorFavorito;

 console.warn("--- Declaración de Variable Locales usando : LET")
 console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el:", miFechaNacimiento," y tu ColorFavorito es: mmmmmmm dejame pensar...")
 miColorFavorito = "Azul";
 console.log(`Creo que es ${miColorFavorito}, le atine?`) //La manera de mezclar textos fijos con el valor actual de las variables se les conoce cómo: interpolación y deben iniciar y finalizar on un backtic - tilde inversa
 console.log("Analizando los datos puedo deducir que: ")
 console.log("miColorFvorito es del tipo: ", typeof(miColorFavorito))
 console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento))