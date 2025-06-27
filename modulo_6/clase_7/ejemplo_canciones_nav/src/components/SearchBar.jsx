export default function SearchBar({ songName, setSongName, handleSearch}) {

    return(<>
        <input value={songName} onChange={(e) => setSongName(e.target.value)} />
        <button onClick={handleSearch}>search</button>
    </>
    )
}