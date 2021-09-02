console.log("Hola koder")

console.log("esto es un error")

console.log("esto es warning")
// 3 metodos para interactuar con el usaurio

//alert("esto es un mensaje para los koders")

//let name= prompt("ingresa tu nombre")
//regresa un string

console.log (name)

//operadores
// aritmeticos
/*
 +
- 
*
%
/
()
*/

let operation = 5+(5 -10)*3
console.log(operation)

let division = 5/2
console.log (division)

let residuo = 5%2
console.log (residuo)

//relacionales 

/* 
>
<
>=
<=
==
===
!=
!== (super diferente)
*/
console.log(8>9)
console.log(9>8)
console.log(8>=9)
console.log(9>=8)
console.log(7<7)
console.log(7<=7)


let string1= "a"
let string2 = "b"
console.log(string2>string1)

console.log("-----------")




// de asignacion 

/*
= -> asignar valor a una variable
== -> comparacion de valores
=== -> comparacion de tipo de dato y del valor
*/

console.log(7==7)
console.log("7" == 7) // mala practica
console.log("7"===7)

/* 
+= 


*/
let number1 = 1 
//number1 = number1 + 5 
number1 +=10
number1 *=2
number1/=2
number1-= 10
console.log(number1 )
console.log("-------------")

//incremento | decremento 
 let number2 =2 
 number2++ // para ciclos inc. a una unidad
 number2--
 console.log(number2)


// logicos 

/* EJERCICIO 1: pedir 2 números al usaurio y mostrar en consola el resultado
de aplicar todas las operaciones aritmeticas
entre esos dos números*/

/*let name1= prompt("introduce A ")
let name2= prompt("introduce B ")

name1= Number(name1)
name2=Number(name2)

let suma= name1+name2
let resta= name1-name2
let div= name1/name2

console.log(suma)
console.log(resta)
console.log(div)*/


// EJERCICIO 2 = pedir al usuario dos numeros y escribir en consola
// si el primer número es mayor que el segundo

/*let pedir1= prompt("dame el primer número")
let pedir2= prompt("dame el segundo número")

pedir1=Number(pedir1)
pedir2= Number(pedir2)
let resultado= pedir>pedir2
console.log(``)*/

// operadores lógicos 

//&&
//||
// ! value 
/*let name1= prompt("introduce A ")
let name2= prompt("introduce B ")
name1= Number(name1)
name2=Number(name2)


if (name1> name2){
    console.log("el primer numero es mayor que el segundo")
    //se ejecuta este codigo
}
else if (name1===name2){
    console.log("los numeros son iguales")

    }
 else {
     console.log(`el primer numero es menor que el segundo`)
 }
*/

// NOT 
let value= undefined
if(!value){
     console.log(value)
}
