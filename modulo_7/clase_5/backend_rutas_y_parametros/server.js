const express = require('express')
const server = express()
const PORT = 3000

server.use(express.json()) // middleware

server.get('/', (req, res) => {
    res.send("Bienvenido a express")
})

server.post('/mensaje', (req, res) => {
    res.json({mensaje: `Recibí ${req.body.text}`})
})


server.delete('/productos/:id', (req, res) => { // Route param /ruta/:param
    res.send(`Se eliminó correctamente el producto ${req.params.id}`)
})

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})