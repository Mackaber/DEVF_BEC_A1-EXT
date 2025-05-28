const tableRow = (usuario) => {
    return `
    <tr>
        <td>
            ${usuario.nombre}
        </td>
        <td>
            ${usuario.edad}
        </td>
        <td>
            ${usuario.profesion}
        </td>
    </tr>
    `
}

export default tableRow