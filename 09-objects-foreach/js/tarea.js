/* /* 
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]
/*
- Agrupar el nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes
*/
/* let bandasAll=songsData.map((bandas,index)=>{
    return bandas.band

})
 console.log(bandasAll) 
const dataArray= new Set (bandasAll)
console.log(dataArray)


//- Agrupar las canciones por banda 
let jaguaresAccum = ""
let enanitosAccum= ""
let manaaccum= ""

songsData. forEach((cancion, )=>{
    let  accederCanciones= cancion.name 
    let accederBandas= cancion.band
    switch (accederBandas) {
        case "Jaguares":
            jaguaresAccum+= accederCanciones
            break;
        case "Enanitos Verdes":
            enanitosAccum+= accederCanciones
            break; 
        case "Maná":
            manaaccum+= accederCanciones

        break;
        
    
        default:
            break;
    }

})
console.log(jaguaresAccum)
console.log(enanitosAccum)
console.log(manaaccum)

//- La cancion con más reproducciones

let numeroMasGrande= songsData.map((reproducciones,index)=>{
    return parseInt (reproducciones.statistics.reproductions)
})
let mayor= 0
for (let i=0; i<=numeroMasGrande.length; i++){
    if (numeroMasGrande[i]>mayor)
    {
        mayor= numeroMasGrande[i]
    }
}

console.log(mayor)

let topsong= ""
 songsData.forEach(reproducciones => {
     let reproName= reproducciones.name
     let reproNumero= reproducciones.statistics.reproductions
     switch (reproNumero) {
         case (mayor):
             topsong += reproName
             break;
         default:
             break;
     }

    
})
console.log(topsong)



// la cancion con mas likes 
let mostLikes= songsData.map ((likes)=>{
    return parseInt (likes.statistics.likes)


})
let mayorlikes= 0
for (let i=0; i<=mostLikes.length;i++){
    if (mostLikes[i]>mayorlikes)
    {
        mayorlikes= mostLikes[i]
    }
}
let topLikes= ""
songsData. forEach((likes, )=>{
    let  getSongs= likes.name 
    let getlikes= likes.statistics.likes
        switch (getlikes) {
            case (mayorlikes):
                topLikes += getSongs

                
                break;
        
            default:
                break;
        }
    })
console.log(topLikes) */


/*
Obtener una lista de strings con el siguiente formato:
"La cancion {name} es de {banda}"
*/
const songBand= (arraysong)=> {
    const resultado= arraysong.map((banda)=> {
    return `la cancion ${banda.name} es de ${banda.band}`
    //console.log(`la banda es ${banda} y la cancion ${name}`)

})
return resultado
}
console.log(songBand(songsData))

   
/*
crear una funcion que me permita Obtener las canciones que contengan un criterio de busqueda
criterio: cel
[
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    }
]
*/

/* 
const searchSong= (arraySong,property, wordToSearch) => {
    const songs = arraySong.filter ((song)=> song[property].toLowerCase().includes(wordToSearch.toLowerCase()))
    return songs
} 
*/