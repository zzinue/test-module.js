/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/
/* pasos :
-definir kodemia y almacenarla en una variable
-ejecutar una funcion para cambiar el orden de las palabras
-emitit en pantalla el resultado
*/
/*let str1= ("kodemia")
function reverseString (str1){
    let splitString= str1.split ("")
    let reverseArray= splitString.reverse ()
    let joinArray= reverseArray.join("")
    return joinArray
}

console.log(reverseString(str1))
*/

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
pasos= 
-definir el string y almacenarlo en una variable
-ejecutar una funcion para poner solo las vocales en mayusculas
-emitir en pantalla el resultado 
*/


/*
input: "abcdefg"
output: "AbCdEfG"

Algoritmo: 
-definir una variable para el string y almacernarla
-hacer una funcion que ponga la primera letra en mayuscula y la siguiente en minuscula
*/

/*function mayuscula (inter) {
    let resultado='';
    for(let i=0; i<inter.length; ++i){
        if (i%2 ==0){
            resultado += inter[i].toUpperCase();
        }else {
            resultado += inter[i].toLowerCase();
        }

    }
    return resultado;
}
console.log(mayuscula("javascript"))*/
/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
 Algoritmo: 
 -definir un string y almacenarlo en una variable
 crear una funcion que indique con que comienza ese string
*/
/*function beginWord (word){
    let newString = ''
    let int=''
    let min=word.toLowerCase()   
    let vowel= (/[aeiou]/gi)
    let consonant= (/[bcdfghjklmnopqrstvxyz]/gi)
    let numbers= (/[0-9]/gi)
    let specialCaracter= /\W/gi
    
    if (min.search(vowel)== 0){
        int= min.split ("")
        newString= (`esta frase/palabra${word} inicia con la vocal ${int[0]}`)
    }
    if (min.search(consonant)){
        int= min.split ("")
        newString=(`esta frase/palabra ${word} inicia con la consonante ${int[0]}`)

    }
    if (min.search(numbers)==0){
        int= min.split ("")
        newString=(`esta frase/palabra ${word} inicia con el numero ${int[0]}`)
    }
    if (min.search(specialCaracter)){
        int=min.split("")
        newString=(`esta frase/palabra ${word} inicia con el caracter especial ${int[0]}`)
    }
    return newString;

}
let word= prompt("ingresa la oracion")
let remaining= beginWord (word)
console.log(remaining)*/


/*EJERCICIOS DE FER EN CLASE

*/