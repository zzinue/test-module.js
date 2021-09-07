let str = "kodemia"
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
console.log('output:', result)


//hacer este pero con for 


//ejercicios 

/*let table= Number (prompt("ingrese del 1 al 10"))

for (let i=1;i<=10; i++){
    console.log(table*i)
}*/


/*Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero*/

let table= Number (prompt("ingrese del 10 al 100"))
if (table>=10 && table <=100){

for (let i=1;i<=table; i++){
   // console.log(table*i)
   if (i%2===0){
       console.log(i)
   }

}
}


