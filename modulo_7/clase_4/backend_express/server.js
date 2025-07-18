const express = require('express')
const app = express()

// Elemento intermediario que se ejecuta antes de la ruta
app.use(express.json()) // middleware


app.post('/', (req, res) => {

    // print request query params
    console.log(req.query)

    // print request body JSON
    console.log(req.body)

    res.send('Hello World!')
})

app.post('/echo', (req, res) => {
    res.send({
        headers: req.headers,
        query: req.query,
        body: req.body
    })
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})
