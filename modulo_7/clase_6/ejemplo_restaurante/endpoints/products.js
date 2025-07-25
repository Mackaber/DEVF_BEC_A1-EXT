function addProductsEndpoint(api) {

    // Obtener todos los productos del restaurante :id
    api.get('/restaurants/:id/products',(req, res) => {
        res.send(`Obtener todos los productos del restaurante ${req.params.id}`)
    })

    // Crear un nuevo producto en el restaurante :id
    api.post('/restaurants/:id/products',(req, res) => {
        res.send(`Crear un nuevo producto en el restaurante ${req.params.id}`)
    })

    // Obtener un producto en especifico con un id en especifico
    api.get('/restaurants/:restauntId/products/:productId', (req, res) => {
        res.send(`Obtener el producto ${req.params.productId} del restaurante ${req.params.restauntId}`)
    })

    // Modificar un producto en específico
    api.put('/restaurants/:restauntId/products/:productId', (req, res) => {
        res.send(`Modificar el producto ${req.params.productId} del restaurante ${req.params.restauntId}`)
    })

    // Modificar un atributo específico del restaurant específico
    api.patch('/restaurants/:restauntId/products/:productId', (req, res) => {
        res.send(`Modificar el atributo del producto ${req.params.productId} del restaurante ${req.params.restauntId}`)
    })

    // Borrar un producto en específico
    api.delete('/restaurants/:restauntId/products/:productId', (req, res) => {
        res.send(`Borrar el producto ${req.params.productId} del restaurante ${req.params.restauntId}`)
    })
}

module.exports = addProductsEndpoint