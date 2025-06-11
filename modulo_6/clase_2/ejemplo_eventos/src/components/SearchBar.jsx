export default function SearchBar() {

    function handleInput(e) {
        console.log(e.target.value)
    }

    function handleClick() {
        console.log("Se hizo click en el botón de Buscar")
    }


    return (
        <>
            <input onChange={handleInput} />
            <button onClick={handleClick} >Buscar</button>
        </>
    )
}