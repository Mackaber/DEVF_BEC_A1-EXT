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
        return JSON.stringify(db[link.substr(12)]) // db["mackaber.json"] || db["ana.json"] || ...
    }

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let r = respond(link);
            resolve(r);
        },2000);
    })
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
const main = async() => {
    let json_response = await get("https://api/mackaber.json")
    console.log(json_response)
    let response = JSON.parse(json_response)
    console.log(response.nombre)
    container.innerHTML = render(response)
}

main()

//get("https://api/mackaber.json").then((response) => {
//    container.innerHTML =  render(response)
//})