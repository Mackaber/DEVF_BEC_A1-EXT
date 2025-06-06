import './SearchBar.css'
export default function SearchBar({ handleSearch }) {
    return (
        <input
            className="spotify-search-input"
            type="text"
            placeholder="Search for a song..."
            onChange={handleSearch}
        />
    )
}