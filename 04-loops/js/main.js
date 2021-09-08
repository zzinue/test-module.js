
//Ejercicios While y For
/*let str = "kodemia"
let lengthStr = str.length

let result= ""

for (let index= 0; index< lengthStr; index++){
    if (index%2===0){  // si es par
    result+= str.charAt(index).toUpperCase()
    }else {
    result+= str.charAt(index).toLowerCase()

}
}
console.log('input:', str)
console.log('output:', result)*/

//hacer este pero con while 
/*let str = "kodemia"
let lengthStr = str.length
let index=0
let result=""

while (index<lengthStr){
    if (index%2===0){
        result+= str.charAt(index).toLocaleUpperCase()

    }else {
        result+=str.charAt(index).toLocaleLowerCase()
    }
    index++
   
}
console.log('input:', str)
    console.log('output:',result ) */


/*EJERCICIOS PARA EL 7 DE SEPTIEMBRE: 
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
 */
/*let word = prompt("write one word")
function matchWord (word){
    let firstWord= word.at (0)
    let lastWord= word.at(word.length-1)

    let result
    if (firstWord===lastWord){
        result= "true"
    }else {
        result= "false"
    }
    return result
}
console.log(matchWord(word))*/


//ejercicio 2 
/*Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6*/

/*let table= Number (prompt("ingrese del 1 al 10"))

for (let i=1;i<=10; i++){
    console.log(table*i)
}*/



/*Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero*/

/*let table= Number (prompt("ingrese del 10 al 100"))
if (table>=10 && table <=100){

for (let i=1;i<=table; i++){
   // console.log(table*i)
   if (i%2===0){
       console.log(i)
   }

}
}*/

/*Ejercicio 4:
Imprimir en consola la suma total de
 todos los digitos de una cantidad p.ej. "1234" */
 /*let cadena = prompt("introduzca los números sin espacio");

 let numero = parseInt(cadena);
 
 if(numero >= 10){
 
   let suma = 0;
   for (let c in cadena) 
        suma += parseInt(cadena[c]);
 
   console.log(suma);
 }
 else
 {
   console.log(numero);
 }*/
 

 /*Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********

Alegortmo 
1.- definir una variable para el *
2.- definir una variable para la salida del resultado
3.- hacer un ciclo for para ir llenando los espacion uno a uno 	
4.- añadir un * por cada ciclo
5.- imprimir en pantalla el resultado del outpu
*/

/*let number = ("*")
let output= ""
for (index=0; index<=10; index++){
    output+= number
    console.log(output)
}*/


/*Ejercicio 6;
Imprimir en consola la suma de los multiplos 
de 3 y 5 contenidos entre el 1 y 100 
-> 233168
algoritmo =
1.-  definir variable ouput
2.- iniciar un cilo for con index=0 menor o igual a 100 e
 incrementar en una unidad
 3.- evaluar la condicion si (i=3) o (i=5)
 4.- despues sumar el resultado
 5.- imprimir output
*/
/*let output= 0
for (i=0; i<=100;i++){
    if (i%3===0 || i%5===0){
        output+= i
        console.log(output)
    }


    }*/

/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders

algoritmo= 
1.- solicitar la frase y guardarla en una variable
2.- definir variable de longitud de la cadena
3.- definir variable resultado
4.- crear un ciclo for index de inicio, hasta que sea menor
o igual que el largo de la frase y aumentarle una unidad 
5.- evaluar condicion

*/
let phrase= prompt("give me your phrase")
let phraseLength= phrase.length
let result=""
for (index=0; index<=phraseLength;index++){
    if (phrase[index]=""){
        result += ""
    }else if (phrase[index-1]===" "){
        result+= phrase[index].toUpperCase()
        
    }else{
        result += phrase[index].toLowerCase()

    }
}
console.log(result)





