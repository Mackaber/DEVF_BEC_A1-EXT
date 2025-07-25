function addRoutes(api, data) {
    // Métodos

    function obtenerRestaurante(id) {
        return data.find((restaurant) => restaurant.id == id)
    }

    function borrarRestaurante(id) {
        data = data.filter((restaurant) => restaurant.id != id)
        console.log(data)
    }

    // Obtener todos los restaurantes
    api.get('/restaurants', (req, res) => {
        // res.send("Obtener todos los restaurantes")
        res.json(data)
    })

    // Crear un nuevo restaurante
    api.post('/restaurants', (req, res) => {
        let restaurant = req.body
        restaurant.id = data[data.length - 1].id + 1 // Checar el id del último restaurant + 1

        data.push(restaurant)
        res.json(restaurant)
    })

    // Obtener un restaurant específico
    api.get('/restaurants/:id', (req, res) => {
        //res.send(`Obtener el restaurante ${req.params.id}`)

        const restaurant = obtenerRestaurante(req.params.id)
        //data.fiter((restaurant) => restaurant.id == req.params.id -1)[0]

        res.json(restaurant)
    })

    // Modificar un restaurant específico
    api.put('/restaurants/:id', (req, res) => {
        // res.send(`Modificar el restaurante ${req.params.id}`)
        
        let restaurant = obtenerRestaurante(req.params.id)

        //restaurant.address = req.data.address
        //restaurant.name = req.data.name

        console.log(req.body)

        const attributes = Object.keys(restaurant) // Obtener todos los attributos
        attributes.forEach((attr) => {
            restaurant[attr] = req.body[attr]
        })

        res.json(restaurant)
    })

    // Modificar un atributo específico del restaurant específico
    api.patch('/restaurants/:id', (req, res) => {
       //  res.send(`Modificar el atributo del restaurante ${req.params.id}`)

       let restaurant = obtenerRestaurante(req.params.id)

        const attributes = Object.keys(req.body)
        attributes.forEach((attr) => {
            restaurant[attr] = req.body[attr]
        })

       restaurant
    })

    // Borrar un restaurant específico
    api.delete('/restaurants/:id', (req, res) => {
        borrarRestaurante(req.params.id)
        // res.send(`Borrar el restaurante ${req.params.id}`)
        res.send(`Se borró correctamente el restaurant ${req.params.id}`)
    })
}


module.exports = addRoutes