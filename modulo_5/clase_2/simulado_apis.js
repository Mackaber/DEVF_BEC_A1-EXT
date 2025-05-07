// Simulador de API's

// 2. Simulador de peticiones
const get = (link, callback) => {
    const respond = (link) => {
        console.log("Respondiendo a la petición...")
        const db = {
            "mackaber.json" : {
                nombre: "Mackaber",
                edad: 33,
                curso: "Programación"
            },
            "ana.json" : {
                nombre: "Ana",
                edad: 28,
                curso: "Matematicas"
            },
            "luis.json" : {
                nombre: "Luis",
                edad: 25,
                curso: "Fisica"
            },
            "juan.json" : {
                nombre: "Juan",
                edad: 30,
                curso: "Historia"
            }
        }
        return db[link.substr(12)] // db["mackaber.json"] || db["ana.json"] || ...
    }

    setTimeout(() => {
      let r = respond(link);
      callback(r);
    },2000);
} 


// 1. Función de render
const render = (usuario) => { // es como se vería ya en la página
    console.log("----------------")
    console.log(`|  ${usuario.nombre}   |`)
    console.log("----------------")
    console.log(`|  ${usuario.edad}   |`)
    console.log(`|  ${usuario.curso}   |`)
    console.log("----------------")
}

// 3. Mandarlo a llamar
get("https://api/mackaber.json",(resp) => {
    // console.log(resp)
    render(resp)
})

get("https://api/ana.json",(resp) => {
    // console.log(resp)
    render(resp)
})