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
let nombre= prompt("cual es tu nombre")
let apellido= prompt("cuales son tus apellidos")
console.log (nombre)
console.log(apellido) 
nombre.toLocaleLowerCase(apellido)




