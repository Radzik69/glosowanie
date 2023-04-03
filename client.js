var wybranyKandydat = ""

function kandydatWybrany() {
    var kandydat = document.createElement("input")
    kandydat.setAttribute("id", "kandydat")
    kandydat.setAttribute("type", "hidden")
    kandydat.setAttribute("value", wybranyKandydat)
    kandydat.setAttribute("name", "kandydat")
    glosowanie.appendChild(kandydat)

    var pesel = document.createElement("input")
    pesel.setAttribute("id", "pesel")
    pesel.setAttribute("type", "text")
    pesel.setAttribute("placeholder", "pesel")
    pesel.setAttribute("name", "pesel")
    pesel.setAttribute("onchange", "spelnionewymagania()")
    pesel.setAttribute("maxlength", "11")
    glosowanie.appendChild(pesel)

    var imie = document.createElement("input")
    imie.setAttribute("id", "imie")
    imie.setAttribute("type", "text")
    imie.setAttribute("placeholder", "imie")
    imie.setAttribute("name", "imie")
    imie.setAttribute("onchange", "spelnionewymagania()")
    imie.setAttribute("maxlength", "20")
    glosowanie.appendChild(imie)

    var nazwisko = document.createElement("input")
    nazwisko.setAttribute("id", "nazwisko")
    nazwisko.setAttribute("type", "text")
    nazwisko.setAttribute("placeholder", "nazwisko")
    nazwisko.setAttribute("name", "nazwisko")
    nazwisko.setAttribute("onchange", "spelnionewymagania()")
    nazwisko.setAttribute("maxlength", "30")
    glosowanie.appendChild(nazwisko)

    var wiek = document.createElement("input")
    wiek.setAttribute("id", "wiek")
    wiek.setAttribute("type", "text")
    wiek.setAttribute("placeholder", "wiek")
    wiek.setAttribute("name", "wiek")
    wiek.setAttribute("onchange", "spelnionewymagania()")
    wiek.setAttribute("maxlength", "2")
    glosowanie.appendChild(wiek)
}

function spelnionewymagania() {
    var pesel = document.getElementById("pesel")
    var imie = document.getElementById("imie")
    var nazwisko = document.getElementById("nazwisko")
    var wiek = document.getElementById("wiek")
    var glosowanie = document.getElementById("glosowanie")

    if (pesel.value != "" && imie.value != "" && nazwisko.value != "" && wiek.value != ""
    ) {
        document.getElementById('pesel').readOnly = true;
        document.getElementById('imie').readOnly = true;
        document.getElementById('nazwisko').readOnly = true;
        document.getElementById('wiek').readOnly = true;


        var form = document.getElementById("formularz");
        var submit = document.createElement("input")
        submit.setAttribute("id", "send")
        submit.setAttribute("type", "submit")
        submit.value = "Głosuj"
        submit.addEventListener("click", function () {
            form.submit()
            zaglosowano()
        });
        glosowanie.appendChild(submit)
    }
}
function zaglosowano() {
    const body = document.getElementById("body")
    body.innerHTML = ""
    body.style.backgroundColor = "gray"
    var napis = document.createElement("h1")
    napis.setAttribute("id", "napis")
    napis.innerHTML = "ZAGŁOSOWANO"
    // wykresLink()
    body.appendChild(napis)
}

function wybor1() {
    wybranyKandydat = "Kandydant nr 1"
    document.getElementById("kandydaci").innerHTML = ""
    var info = document.createElement("h1")
    info.setAttribute("id", "info")
    info.innerHTML = "Zagłosowałeś na kandydata nr 1"
    kandydaci.appendChild(info)
    console.log(wybranyKandydat)
}
function wybor2() {
    wybranyKandydat = "Kandydant nr 2"
    document.getElementById("kandydaci").innerHTML = ""
    var info = document.createElement("h1")
    info.setAttribute("id", "info")
    info.innerHTML = "Zagłosowałeś na kandydata nr 2"
    kandydaci.appendChild(info)
    console.log(wybranyKandydat)
}
function wybor3() {
    wybranyKandydat = "Kandydant nr 3"
    document.getElementById("kandydaci").innerHTML = ""
    var info = document.createElement("h1")
    info.setAttribute("id", "info")
    info.innerHTML = "Zagłosowałeś na kandydata nr 3"
    kandydaci.appendChild(info)
    console.log(wybranyKandydat)
}

function wykresLink() {
    var info = document.createElement("a")
    info.href= '/wykres'
    info.innerText = "Zobacz wykres"
    body.appendChild(info)
    console.log('pokaz wykres')
}