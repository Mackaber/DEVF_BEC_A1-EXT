import axios from 'axios'
import insertCharacter from './insertCharacter'
const getCharacters = async () => {
    let characters = []
  
    for(let i=1;i<10;i++) {
      //await axios.request(config)
      const response = await axios.get(`https://swapi.tech/api/people/${i}`)
      insertCharacter(response.data.result.properties)
    }
    
    return characters
}

export default getCharacters