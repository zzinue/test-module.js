// funciones

/*let one=45
let two=20
let suma= one +two 
console.log(suma)*/
let resultado = 100;
let SomeResult = 50;

//definiciones de la funcion
function Suma(one, two) {
  let resultado = one + two;
  //console.log(suma)
  // return te permite regresar un valor de esa funcion
  return resultado;
}

let resultadoSuma = Suma(200, 10);
console.log(resultadoSuma);

console.log("-------------------------");

function evaluarsiesmayor(nu1, nu2) {
  let resultado =
    nu1 > nu2 ? "es mayor el primero" : "el segundo es mayor o igual";
  return resultado;
}
let nuevoResultado = evaluarsiesmayor(10, 20);
console.log(nuevoResultado);

//EJERCICIOS
console.log("---------------");
//ejercicio 1
/*
solicitar al usuario su nombre y sus apellidos
regresar en una sola cadena donde el nombre sea miunusculas
y los apellidos sean mayusculas
*/
/*let name= prompt("What's your name ")
let lastname= prompt("What's your surname")

let nameTransformed= name.toLocaleLowerCase()
let lastnameTransformed= lastname .toUpperCase()

let textJoined = `${nameTransformed} ${lastnameTransformed}`

console.log(textJoined)*/


/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos 
    caracteres tiene su nombre
*/
/*let completeName=prompt("what's your complete name?")
let total = completeName.match(/[a-z]/gi); // arreglo de esas vocales
console.log("numero de caracteres totales=", completeName, total.length);

console.log("-------------------");*/

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e 
    indicarle cuantas vocales tiene.
*/
/*let vowels1 = prompt("please proportionate your complete name")

let vowels2 = vowels1.match(/[aeiou]/gi); // arreglo de esas vocales
console.log("tu nombre tiene ", vowels2.length, "vocales");
//console.log(`tu nombre tien`"tu nombre tiene ", vowels, vowels.length);
*/

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento,
     y cada estudiante complementa   al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y 
    reemplazar todas las coincidencias por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

  /*let string1=("Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa   al estudiante que tiene a su lado") 
console.log (`${string1}`)
let string2= string1.match(/estudiante/gi)
console.log(`en esta frase se usa la palabra "estudiante" ${string2.length} veces`)
let string3=string1.replace (/estudiante/gi, "Koder")
console.log(string3)*/

/*Ejercicio 5:
 Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/
/*
function comparingStrings (str1, str2){
    let containerstring1=str1.length
    let containerstring2= str2.length

    if (containerstring1>containerstring2){
        return"el primer string es mayor"
    }   else if(containerstring2>containerstring1){
        return"el segundo string es mayor"
    }   else {
        return"ambos son iguales"
    }
   
}
// ejecutar la funcion 
 console.log(comparingStrings("some string", "this is larger"))
 
   /*
 Ejercicio 6:
 Dado un string de dos palabras realizar una función que 
 devuelva la palabra más larga
 input: 'Programación Javascript'
 Output: 'Programación'*/

/*let stringOne= prompt("inrtoduce one string with two words");
let string1and2= stringOne.split(" ");
console.log (string1and2)

if (string1and2[0].length>string1and2[1].length){
    console.log(`el string ${string1and2[0]} es mas largo`)
}   else if (string1and2>string1and2){
    console.log(`el string ${string1and2[1]}es mas largo`)
}else {
    console.log("ambos strings son iguales")
}*/




console.log("-------------------");
/* 
EJERCICIOS QUE HIZO FER solicitar al usuario su nombre y sus apellidos
regresar en una sola cadena con donde el nombre
sea minuscula y los apellidos sean mayusculas
input= nombre = fernanda
input: apellido= "palacios vera"
outpue: "fernanda PALACIOS VERA"
*/
/*let nombre= prompt("cual es tu nombre")
let apellido= prompt("cuales son tus apellidos")
console.log (nombre)
console.log(apellido) 
nombre.toLocaleLowerCase()
console*/

//ejemplo de como se debe planear el programa de ejercicio 1
/*guardar el nombre del usaurio en una variable
- guardar el apellido en una variable
-transformal el nombre en minusculas y gaurdar en una variable
- tranfromar el apellido a mayusculas y guardarlo en una variable
-juntar el nombre y apellido transformado en una cadena y la guardo en una variable 
- devolver el texto como resultado

*/


// funcion
/*let name= prompt("What's your name ")
let lastname= prompt("What's your surname")

function nameFormatted(name, lastname){
    let nameTransformed= name.toLocaleLowerCase()
    let lastnameTransformed= lastname.toUpperCase()
    let textJoined= `${nameTransformed} ${lastnameTransformed}`
    return textJoined

 }
 console.log(nameFormatted(name, lastname))*/

//ejercicio 5
//comparar dos string y determinar cual de los dos es el más largo
/*
 -tener el primer string en una variable
 -tener el segundo string en una variable
 -tener la longitud del primer string en una variable
 -tner la longitud del segundo string en una variable
 - si longitud del primer string es es mayor que el segundo
    -mandar el mensaje  --> " el primer string es mas lasrgo"
    de lo contrario si el segundo es mayor al primer string
    - mandar el mensaje --> el segundo string es mas largo"
-de lo contrario mandar el mensaje --> "ambos son iguales"

 */
// declaracion
/*function compareStrings (string1, string2) {
    let lenghtString1= string1. lenght
    let lenghtString2= string2. lenght
    let result
    if (lenghtString1> lenghtString2) {
        result= "el string1 es mayor"
    }else if (lenghtString2>lenghtString1) {
        result= "el string2 es mayor"
    }else {
        result= "ambos son iguales"
    }
    return result
}
// ejecutar la funcion 
console.log (compareStrings("some String", "This is a string more large"))*/
console.log("---------------------------");

/* ejercicio 6 

ejercicio 3 solicitar el nombre completo a un usuario
e indeicarle cuantas vocales tiene
-


*/
let nameComplete = "fernanda";

let vowels = nameComplete.match(/[aeiou]/gi); // arreglo de esas vocales
console.log("vocales", vowels, vowels.length);

console.log("-------------------");
/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/
/*
-preguntar al usuario la frase y almacenarla en una variable


-
*/

/*let phrase=prompt("give me you phrase")
let word= prompt("give the word to search")
let findPhrase= phrase.match(/Hola/gi)
console.log(`el numero de coincidencias es de ${findPhrase.length}  veces`)*/

/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/
/*
mandar el mensaje "que operacion quieres realizar"
mandar mensaje " que numeros  quieres operacionalizar"*/




function operations (nu1, nu2, operation){
    let result
    switch (operation) {
        case "suma":
            result = `El resultado de la operacion "${operation}" de los numeros es: ${nu1+ nu2}`
            break; 
        case "resta":
             resta=`El resultado de la operacion "${operation}" de los numeros es: ${nu1 - nu2}`
             break;
        case "multiplicacion":
             result= `El resultado de la operacion "${operation}" de los numeros es: ${nu1 * nu2}`
                break; 
        case "division":
            result= `El resultado de la operacion "${operation}" de los numeros es: ${nu1 / nu2}`
             break;
        default:
       // result= ("no existe operation")
        break;
    }
    return result
}


let operationChoiced = prompt("ingresa que operacion quiere realizar \n opcion1=suma \n opcion1=resta \n opcion1=multiplicacion \n opcion1=division")
let nu1= parseInt (prompt("ingresa el valor de numero 1"))
let nu2= parseInt (prompt ("ingresa el valor de numero 2"))

console.log (operations(nu1. nu2, operationChoiced))