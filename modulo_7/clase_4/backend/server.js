const http = require("http") // import http from http

const server = http.createServer((request, response) => { // petición, respuesta

    request.on("data", (chunk) => {
        console.log("chunk", chunk)
    })


    obj = {
        id: 1,
        name: "Mackaber",
        age: 34
    }

    response.writeHead(200, { 'content-type': 'application/json'})
    response.end(JSON.stringify(obj))
})

server.listen(3000, () => {
    console.log("Servidor ejecutándose en el puerto 3000")
})