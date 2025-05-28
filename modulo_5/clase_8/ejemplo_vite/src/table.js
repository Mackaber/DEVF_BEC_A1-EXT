import tableRow from './tableRow.js'
const table = (usuarios) => {
    return `
    <table>
    <thead>
      <th>
        Nombre
      </th>
      <th>
        Edad
      </th>
      <th>
        Profesion
      </th>
    </thead>
    <tbody>
      ${""/* usuarios.map(tableRow).join("") */}
      ${usuarios.map((usuario) => tableRow(usuario)).join("") }
    </tbody>
  </table>
    `
}

export default table