import tableRow from "./tableRow"
const insertCharacter = (character) => {
    const tbody = document.getElementById("tbody")
    const temp = document.createElement("tbody")
    temp.innerHTML = tableRow(character)
    const node = temp.firstElementChild

    tbody.appendChild(node)
}

export default insertCharacter