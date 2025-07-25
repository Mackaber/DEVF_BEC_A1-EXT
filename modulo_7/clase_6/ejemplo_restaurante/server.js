const express = require('express')
const api = express()

api.use(express.json()) // middleware

let data = 
[
    {
        "name": "Starbucks",
        "address": "La calle de las sirenas",
        "id": 1
    },
    {
        "name": "McDowell",
        "address": "Queens, NYC",
        "id": 2
    },
    {
        "name": "El Crustaceo Cascarudo",
        "address": "Fondo de Bikini",
        "id": 3
    }
]

// Esto se puede remplazar con express Router
const addRestaurantsEndpoints = require('./endpoints/restaurants')
addRestaurantsEndpoints(api, data)

const addProductsEndpoint = require('./endpoints/products')
addProductsEndpoint(api, data)

api.listen(3000, () => {
    console.log("Escuchando en el puerto 3000")
})