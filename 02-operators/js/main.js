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

/*EJERCICIO 1: pedir 2 números al usuario y mostrar en consola el resultado
de aplicar todas las operaciones aritmeticas
entre esos dos números*/

/*let name1= prompt("introduce A ")
let name2= prompt("introduce B ")

name1= Number(name1)
name2=Number(name2)

let suma= name1+name2
let resta= name1-name2
let div= name1/name2
let multiplicacion= name1*name2

console.log(`la suma es ${suma}`)
console.log(`la resta es ${resta}`)
console.log(`la division es ${div}`)
console.log(` la multiplicacion es ${multiplicacion}`)*/



/*EJERCICIO 2 = pedir al usuario dos numeros y escribir en consola
// si el primer número es mayor que el segundo*/

/*let give1= prompt("dame el primer número")
let give2= prompt("dame el segundo número")

give1=Number(give1)
give2= Number(give2)

let resultado= give1>give2
console.log(`el primer número es mayor que el segundo ${resultado}`)*/

/*EJERCICIO 3: Pedir al usuario dos letras, y determinar
si la primera aparece antes o después en el alfabeto */

/*let ask1=prompt("dame la primera letra")
let ask2=prompt("dame la segunda letra")

/*ask1=Number(ask1)
ask2=Number(ask2)*/

/*let comparation=ask1<=ask2
if (comparation===true) {
    console.log(`primera letra aparece antes en el alfabeto `)
} else{
    console.log(`primera letra aparece despues en el alfabeto `)
}*/

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

// Not
/*let value= undefined
if(!value){
     console.log(value)
}*/

/*console.log("------------------")
// jueves 2 de sep 2021 
let age= 17
if(age>=18){
    console.log(`eres mayor`)
}else {
    console.log(`eres menor`)
}*/


let hora=17
if (hora>=0 && hora<=5){
    console.log(`dejenme dormir`)
} else if (hora>=6 && hora<=11){
    console.log(`buenos dias`)
}else if (hora>=12 && hora<=19){
    console.log(`buenas tardes`)
}else {
    console.log(`buenas noches`)
}

//operador ternario: para hacer validaciones rápidas
// (condicion) ? (verdadero) : (falso)
let edad=24 
let eresMayor= edad >=18 ? "eres mayor de edad" : "eres menor de edad"
console.log(`validacion ${eresMayor}`)

// switch 
/* 
domingo - 0
lunes - 1
martes- 2
miercoles-3 
jueves- 4 
viernes- 5 
sabado- 6

*/
let today= 4
switch(today){
    case 0: 
        console.log("domingo")
        break;
    case 1:
        console.log("lunes")
        break; 
    case 2:
        console.log("martes")
     case 3:
        console.log("miercoles")
        break; 
    case 4:
        console.log("jueves")
        break; 
    case 5:
        console.log("viernes")
        break; 
    case 6:
        console.log("sabado")
        break;
    default:
        console.log("dia invalido")
        break; 

}



