// funciones 

/*let one=45
let two=20
let suma= one +two 
console.log(suma)*/
let resultado = 100
let SomeResult= 50

//definiciones de la funcion 
function Suma (one, two) {

let resultado= one + two
//console.log(suma)
// return te permite regresar un valor de esa funcion 
return resultado


}

let resultadoSuma = Suma (200, 10)
console.log(resultadoSuma)

console.log("-------------------------")

function evaluarsiesmayor (nu1, nu2) {
    let resultado= nu1>nu2 ? "es mayor el primero": "el segundo es mayor o igual"
    return resultado
}
let nuevoResultado = evaluarsiesmayor (10, 20)
console.log(nuevoResultado)

//ejercicios 

/* 
solicitar al usuario su nombre y sus apellidos
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
/*let name= prompt("What's your name ")
let lastname= prompt("What's your surname")

let nameTransformed= name.toLocaleLowerCase()
let lastnameTransformed= lastname .toUpperCase()

let textJoined = `${nameTransformed} ${lastnameTransformed}`

console.log(textJoined)
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
console.log("---------------------------")

/* ejercicio 6 

ejercicio 3 solicitar el nombre completo a un usuario
e indeicarle cuantas vocales tiene
-


*/
let nameComplete= "fernanda"


let vowels= nameComplete.match(/[aeiou]/gi) // arreglo de esas vocales
console.log('vocales', vowels,vowels.length)

console.log("-------------------")
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
mandar mensaje " que numeros  quieres operacionalizar"



*/

function operations (number1, number2, operation){
    let result
    switch (operations) {
        case "suma"
            result= number1 + number2 
            break; 
        case "resta"
             resta= number1-number2
             break;
        case "multiplicacion"
             result= number1 * number2 
                break; 
        case "division"
            result= number1/number2
             break;
        default:
        alert ("no existe operation")
        break;
    }
    return `el resultado de la operacion "${operacion}"de los numeros es:${result}`
}

let operationChoiced = prompt("ingresa que operacion quiere realizar \n opcion1=suma")
let numero1= parseInt (prompt("ingresa el valor de numero 1"))
let numero2= parseInt (prompt ("ingresa el valor de numero 2"))


console.log (operations(numero1. numero2, operationChoiced))
