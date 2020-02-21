//configurar o servidor
const express = require("express")
const server = express() 

//configurar o servidor para apresentar arquivos extras/ css
server.use(express.static('maratonaDev'))


//configurando a template engine (chPamar o index.html)
const nunjucks = require("nunjucks")
nunjucks.configure("./maratonaDev", {
    express: server
})

const donors = [
    {

    }
    ]

//Configurar a apresentação da página / render: renderizar, contruir alguma coisa.
server.get("/", function(req, res) { //pega a barra, e executa uma serie de funcionalidades.
    return res.render("index.html")
})

//Ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("Iniciei o servidor.")
}) 
