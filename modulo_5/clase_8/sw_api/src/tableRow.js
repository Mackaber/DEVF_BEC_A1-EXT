const tableRow = (character) => {
    return `
    <tr>
        <td>
            ${character.name}
        </td>
        <td>
            ${character.gender}
        </td>
        <td>
            ${character.birth_year}
        </td>
    </tr>
    `
}

export default tableRow