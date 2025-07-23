// Paso 2. importar express
const express = require('express') // import express from 'express'
const PORT = 3000

// Paso 3. Instanciar el servidor
const server = express()

// Paso 4. Definir rutas
server.get('/', (request, response) => {
    response.send("Bienvenido a Express JS")
})

// Paso 5. Iniciar el servidor (ponernlo a la escucha)
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})