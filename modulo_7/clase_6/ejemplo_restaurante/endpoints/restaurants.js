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
        res.status(200) // 200: OK
        res.json(data)
    })

    // Crear un nuevo restaurante
    api.post('/restaurants', (req, res) => {
        let restaurant = req.body
        restaurant.id = data[data.length - 1].id + 1 // Checar el id del último restaurant + 1
        data.push(restaurant)
        
        // Validación: Nombre Restaurante > 10 caracteres
        const valid = restaurant.name.length < 10

        if(valid) {
            res.status(201) // 201: Created
            res.json(restaurant)
        } else {
            res.status(400)
            res.send("El nombre del restaurante es muy largo")
        }

    })

    // Obtener un restaurant específico
    api.get('/restaurants/:id', (req, res) => {
        //res.send(`Obtener el restaurante ${req.params.id}`)

        const restaurant = obtenerRestaurante(req.params.id)
        //data.fiter((restaurant) => restaurant.id == req.params.id -1)[0]
        if(restaurant) {
            res.status(200)
            res.json(restaurant)
        } else {
            res.status(404)
            res.send("No se encontro el restaurante")
        }

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

        if(restaurant) {
            res.status(202) // 202: Accepted
            res.json(restaurant)
        } else {
            res.status(404)
            res.send("No se encontro el restaurante")
        }
    })

    // Modificar un atributo específico del restaurant específico
    api.patch('/restaurants/:id', (req, res) => {
       //  res.send(`Modificar el atributo del restaurante ${req.params.id}`)

       let restaurant = obtenerRestaurante(req.params.id)

        const attributes = Object.keys(req.body)
        attributes.forEach((attr) => {
            restaurant[attr] = req.body[attr]
        })

        if(restaurant) {
            res.status(202) // 202: Accepted
            res.json(restaurant)
        } else {
            res.status(404)
            res.send("No se encontro el restaurante")
        }
    })

    // Borrar un restaurant específico
    api.delete('/restaurants/:id', (req, res) => {
        borrarRestaurante(req.params.id)
        // res.send(`Borrar el restaurante ${req.params.id}`)

        if(restaurant) {
            res.status(204) // 204: No content
            res.send()
        } else {
            res.status(404)
            res.send("No se encontro el restaurante")
        }

        // res.send(`Se borró correctamente el restaurant ${req.params.id}`)
    })
}


module.exports = addRoutes