import './style.css'
import getCharacters from './getCharacters'
import table from './table'

const characters = await getCharacters()

document.querySelector('#app').innerHTML = `
  ${table(characters)}
`


