const container = document.getElementById("container")
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

const render = (user) => {
    return `
    <div>
        <p>${user.nombre}</p>
        <hr>
        <p>${user.edad}<p>
        <p>${user.curso}<p>
    </div>
    `
} 

get("https://api/mackaber.json",(resp) => {
    // console.log(resp)
    container.innerHTML = render(resp)

    let nombre_usuario = prompt() // interacción del usuario

    get(`https://api/${nombre_usuario}.json`,(resp) => {
        // console.log(resp)
        container.innerHTML = render(resp)
        nombre_usuario = prompt()

        let nombre_usuario = prompt() // interacción del usuario

        get(`https://api/${nombre_usuario}.json`,(resp) => {
            // console.log(resp)
            container.innerHTML = render(resp)
            nombre_usuario = prompt()

            let nombre_usuario = prompt() // interacción del usuario

            get(`https://api/${nombre_usuario}.json`,(resp) => {
                // console.log(resp)
                container.innerHTML = render(resp)
                nombre_usuario = prompt()

                let nombre_usuario = prompt() // interacción del usuario

                get(`https://api/${nombre_usuario}.json`,(resp) => {
                    // console.log(resp)
                    container.innerHTML = render(resp)
                    nombre_usuario = prompt()
                })
            })
        })
    })
})

