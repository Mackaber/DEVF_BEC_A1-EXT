import tableRow from './tableRow'
const table = (characters) => {
    return `
    <table>
        <thead>
            <th>
            Name
            </th>
            <th>
            Gender
            </th>
            <th>
            Birthday
            </th>
        </thead>
        <tbody>
            ${characters.map((characters) => tableRow(characters)).join("") }
        </tbody>
    </table>
    `
}

export default table