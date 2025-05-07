// Simulador de API's

// 2. Simulador de peticiones
const get = (link, callback) => {
    const respond = () => {
        console.log("Respondiendo a la petición...")
        return "data"
    }

    setTimeout(() => {
      let r = respond();
      callback(r);
    },2000);
} 


// 1. Función de render
const render = (data) => { // es como se vería ya en la página
    console.log("----------------")
    console.log(`|  ${data}   |`)
    console.log("----------------")
}

// 3. Mandarlo a llamar
get("https://api/3.json",(resp) => {
    render(resp)
})

