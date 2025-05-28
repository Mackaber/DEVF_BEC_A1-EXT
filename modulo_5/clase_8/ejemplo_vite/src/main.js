import './style.css'
import javascriptLogo from './javascript.svg'
// const javascriptLogo = r
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import render from './render.js'
import usuarios from './usuarios.js'
import table from './table.js'

document.querySelector('#app').innerHTML = `
  <div>
    ${render({
      nombre: "Mackaber",
      edad: 33,
      profesion: "Programador"
    })}
  </div>

  <h2>Tabla de registros<h2>

  ${table(usuarios)}
`