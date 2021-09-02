/* pedir al usuario los siguientes datos: (nombre, peso actual en kg)
*/
let name=prompt("cual es tu nombre")
let peso=prompt("cual es tu peso en kg")

peso= peso/1000
let gravity= 9.8
let moonG=1622
let operation= peso/gravity * moonG 

console.log(`tu peso en la luna es de ${operation} kg`)

let marteG=3711
let operationM=peso/9.8 * marteG

console.log(`y tu peso en Marte es de ${operationM} kg`)

let Jupiter=24790
let operationJ=peso/9.8 * Jupiter

console.log(`y tu peso en Jupiter es de ${operationJ}kg`)