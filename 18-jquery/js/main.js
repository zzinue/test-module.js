// document.getElementById("save-user").addEventListener("click", () =>{
//     console.log("guardando user..")

// })

$ ("#save-user").click(() => {
console.log("click desde query")
})

$("#toggle-text").click (()=>{


    // $("#text").hide()

    //vanilla 
    let elemento= document.getElementById("text")
    let elmentoHasClass= elemento.classList.contains("d-none")

  /*   elmentoHasClass 
    ?elemento.classList.remove("d-none")
    :elemento.classList.add ("d-none")
 */
    //jquery 
    $("#text").toggle()

})

//
$(".buttons-controls .btn.btn-secondary").click ((event)=>{
       // console.log(event.target.dataset.deleteClass)
       let classText= $(event.target).data("delete-class")
       $("."+classText).remove()

})