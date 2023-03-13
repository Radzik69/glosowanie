const express = require('express')
const cors = require('cors')
const mysql=require('mysql')
const port = 3000
const app=express()

app.get("/",(req,res)=>{
    res.send("wlaczono strone")
})
function przesylDanych(){
    console.log("bazadanych")
    const sql = `INSERT INTO glosujacy(pesel,imie,nazwisko,wiek) VALUES`
}

//w bazie danych nazwa glosowanie tabela glosujacy w tabeli pesel,imie,nazwisko,wiek