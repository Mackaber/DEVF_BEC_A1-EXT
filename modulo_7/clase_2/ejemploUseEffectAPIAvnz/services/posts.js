const API_ENDPOINT = "https://jsonplaceholder.typicode.com"

async function fetchPosts() {
      const json_data = await fetch(`${API_ENDPOINT}/posts`) // Obtener el JSON
      const data = await json_data.json() // Extraer el json de data y parserarlo como Objeto
      console.log(data)

      return data
}

async function fetchPost(id) {
      const json_data = await fetch(`${API_ENDPOINT}/posts/${id}`) // Obtener el JSON
      const data = await json_data.json() // Extraer el json de data y parserarlo como Objeto
      console.log(data)

      return data
}

export { fetchPosts, fetchPost }