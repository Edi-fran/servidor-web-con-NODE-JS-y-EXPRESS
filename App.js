const express = require('express')
const app = express()

app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendFile("C:/Users/sombr/OneDrive/Escritorio/Servidor express/index.html")
})

app.listen(8080, () =>{
    console.log("Servidor  corriendo",8080)
}) 