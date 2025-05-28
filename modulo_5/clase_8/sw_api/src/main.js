import './style.css'
import getCharacters from './getCharacters'
import table from './table'


document.querySelector('#app').innerHTML = `
  ${table()}
`
const characters = await getCharacters()

