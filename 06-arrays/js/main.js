
let arrayKoders= [
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo"
]

/*Hola, mi nombre es${nombre} */
for (let i=0; i<arrayKoders.length; i++){
    console.log(`Hola, mi nombre es ${arrayKoders[i]}`)
}
console.log(arrayKoders)
// metodos de array

// .push() Agrega uno o mas items al final del array

arrayKoders.push("jorge")
console.log(arrayKoders)


//.pop () Remueve el ultimo item del array y devuelve
//el item removido
arrayKoders.pop()
console.log(arrayKoders)


//.shift () Remueve el primer item del array
//y devuelve el item removido

arrayKoders.shift()
console.log(arrayKoders)

// .reverse () Invierte el array, modificando
//el array original

//.unshft () agrega un item al inicio del 
//arrayKoders, y devuelve la longitud del array


//. concat () concatenar uno o mas arrays

/*let arrayKoders10ma= ["Cintia", "Juanpi","Vero"]
let arrayAllKoders=arrayKoders.concat(arrayKoders10ma)
console.log(arrayAllKoders)
*/
/* .splice (index, howmany, items.., item)
index -> selecciona el indice de un item en el array
howmany-> Cuantos elementos se eliminaran a partir del indice
items -> items a agregar a partir del indice indicado

Regresa -> los items removidos*/

/*
jercicio 1:

Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.
*/

/*let cantidad=  prompt("cuantos koders quieres incluir")
let MyArray=[]
function cantidadKoders(){
    for (let i=1; i<=cantidad;i++ ){
        let ingresaName= prompt("introducir el nombre completo del koder")
        MyArray.push(ingresaName)
       //console.log(`el nombre es ${MyArray[i]}y la posicion sería ${i} `)
        
    }
   for(let i=0; i<MyArray.length; i++){
        console.log(`Koder ${i+1}: ${MyArray[i]}`)
    }
 
}
cantidadKoders(cantidad)*/


//let findKoder=prompt("ahora dime el número de koder que quieres conocer")



/*A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado*/
/*let buscar= prompt("que numero de koder quieres buscar")

console.log(MyArray[buscar-1])*/



/*- imprimir la lista de koders en orden alfabetico descendiente*/
 //MyArray.sort()
 //MyArray.pop()
 //console.log(MyArray)

/*- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]  */
  /* algoritmo
  -detectar los strings
  -poner dos splits uno para la divi
  */
//let newArray= [MyArray]
/*const arrayKoders= [
    "Fanny alvarez",
    "Elias herrrera", 
    "kraken perez salians",
    "Claud Rodrguez"

]
function addKoder (koder){
    let koder= prompt("agrega el nombre del koder")
    arrayKoders.push (koder)
}
function printKoders (){
    for (let i=0; i< arrayKoders.length; i++){
        console.log(`koder ${i+1}: ${arrayKoders[i]}`)
    }
}



/* Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"*/
  //MyArray.splice(3, 0, "Fanny Alvarez")
  //console.log(MyArray) */
  
  /*Ejercicio
  - Funcion que me regrese un numero aleatorio 
  desde 0  hasta array.length
  pasos: 
  -crear una variable para el array
  - pedirle al usuario que defina el valor del array 

  - crear ciclo for que imprima con un console.log
  desde 0 hasta el largo del array 
  - 
*/

let longitud=prompt("dame longitud del arreglo")
let array = []
for (i=0;i<longitud.length;i++){
    array.push("")
    
   
    
}
console.log(array)
let operacion= Math.floor(Math.random()*array.length)
console.log(operacion)
