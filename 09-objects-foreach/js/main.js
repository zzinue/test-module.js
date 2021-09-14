let dataArray = [
    ["Fernanda", "Palacios"],
    ["Alfred", "Altamirano"],
    ["Angel", "Resendiz"],
    ["Elda", "Corona"],
    ["Tux", "Tuxtla"],
    ["Jorge", "De Buen"]
]
/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]
*/
/*const arrayobject = (mentors)=>{
    let mentorArray= []
    for (let i=0; i<mentors.length; i++){
        let name= mentors[i][0]
        let lastName= mentors[i][1]
        let objectMentor={name,lastName}
        mentorArray.push(objectMentor)
    }
    return mentorArray
}
let finalMentors= arrayobject(dataArray)
console.log(finalMentors)*/

//ahroa con Foreach: 

dataArray.forEach((name, index)=>{
        console.log(`el nombre es ${name} y la posicion es ${index }`)
})