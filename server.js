const express = require("express")
const server = express() 

server.get("/", function(req, res) { //pega a barra, e executa uma serie de funcionalidades.
    return res.send("ok. Chegue aqui!")
})

server.listen(3000) //servidor.
