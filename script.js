
var pesel = document.getElementById("pesel")
    var imie = document.getElementById("imie")
    var nazwisko = document.getElementById("nazwisko")
    var wiek = document.getElementById("wiek")
    var glosowanie = document.getElementById("glosowanie")

function spelnionewymagania(){
    
    if(pesel.value!=null && imie.value!=null && nazwisko.value!=null && wiek.value!=null){
        var submit = document.createElement("button")
        submit.setAttribute("id","submit")
        submit.setAttribute("onclick","zaglosowano()","przesylDanych()")
        submit.innerHTML = "Głosuj"
        glosowanie.appendChild(submit)
    }
}


function zaglosowano(){
    const body =document.getElementById("body")
   body.innerHTML = ""
   body.style.backgroundColor = "gray"
   var napis = document.createElement("h1")
   napis.setAttribute("id","napis")
   napis.innerHTML = "ZAGŁOSOWANO"
   body.appendChild(napis)
}
