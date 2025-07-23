const express = require('express')
const server = express()
const PORT = 3000

server.use(express.json()) // middleware

function calcular(operation, A, B) {
    switch(operation) {
        case "restar":
            return  A - B
        case "sumar":
            return A + B
        case "multiplicar":
            return A * B
        case "dividir":
            return A / B
    }
}

server.get('/', (req, res) => {
    res.send("Probando...")
})

// URL params
server.get('/:operation/:valA/:valB',(req, res) => {
    const operation = req.params.operation
    const A = Number(req.params.valA)
    const B = Number(req.params.valB)

    res.send(`El resultado de ${operation} de ${A} y ${B} es ${calcular(operation, A, B)} `)
})


// POST params (JSON data)
// { "operation" : "suma", valA: 1, valB: 2 }
server.post("/calcular", (req, res) => {
    const operation = req.body.operation
    const A = Number(req.body.valA)
    const B = Number(req.body.valB)

    res.send(`El resultado de ${operation} de ${A} y ${B} es ${calcular(operation, A, B)}`)
})

// Query params
server.get("/calcular",(req, res) => {
    const operation = req.query.operation
    const A = Number(req.query.valA)
    const B = Number(req.query.valB)

    res.send(`El resultado de ${operation} de ${A} y ${B} es ${calcular(operation, A, B)}`)
})

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})