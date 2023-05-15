//nazwa bazy danych:glosowanie      nazwa tabeli:glosujacy:   w srodku:     pesel:varchar(11znakow)     imie:text(20znakow)     nazwisko:text(30znakow)     wiek:int(3znaki)       kandydat

const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const chart = require('chart.js')
const app = express()
const PORT = 3000
app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  passworld: "",
  database: "glosowanie"
})

con.connect(function (err) {
  if (err) console.log(err)
  else console.log("poloczono z baza danych")
})

app.use(cors())
app.use(express.static(__dirname))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/", (req, res) => {
  const sql = "SELECT * FROM glosujacy"
  con.query(sql, function (err, result, fields) {
    if (err) console.log(err)
    else res.send(result)
  })
})

app.get("/add", (req, res) => {
  var { pesel, imie, nazwisko, wiek, kandydat } = req.query
  console.log(' pesel:', `${req.query.pesel}`)
  console.log(' imie:', `${req.query.imie}`)
  console.log(' nazwisko:', `${req.query.nazwisko}`)
  console.log(' wiek:', `${req.query.wiek}`)
  console.log(' kandydat:', `${req.query.kandydat}`)
  const sql = `INSERT INTO glosujacy(pesel,imie,nazwisko,wiek,kandydat) VALUES( '${pesel}','${imie}','${nazwisko}','${wiek}','${kandydat}')`
  console.log('------------')
  con.query(sql)
})

app.get("/getdata1", (req, res) => {
  const sql = 'SELECT count(kandydat) AS "liczba" FROM glosujacy where kandydat="Kandydant nr 1"'
  con.query(sql,function(err,result,fields){
      if(err) console.log(err)
      else res.send(`${result[0].liczba};`)
  })
})

app.get("/getdata2", (req, res) => {
  const sql = 'SELECT count(kandydat) AS "liczba" FROM glosujacy where kandydat="Kandydant nr 2"'
  con.query(sql,function(err,result,fields){
      if(err) console.log(err)
      else res.send(`${result[0].liczba};`)
  })
})

app.get("/getdata3", (req, res) => {
  const sql = 'SELECT count(kandydat) AS "liczba" FROM glosujacy where kandydat="Kandydant nr 3"'
  con.query(sql,function(err,result,fields){
      if(err) console.log(err)
      else res.send(`${result[0].liczba};`)
  })
})

app.get("/wykres", (req, res) => {
  console.log("wykres")
  res.sendFile(__dirname + "/wykres.html")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
