import { useState } from "react";
import axios from 'axios';
import SongTable from "../component/SongTable";
import SearchBar from "../component/SearchBar";

export default function Home() {
    const [songName, setSongName] = useState("")
    const [songs, setSongs] = useState([])

    async function handleSearch() {
        let response = await axios.get(`https://osdb-api.confidence.sh/rest/_mBYU3KJtOQNY6oY17dpq/search/song?query=${songName}&limit=10`)
        setSongs(response.data.data)
    }

    return(
    <>
        <SearchBar {...{songName, setSongName, handleSearch}} />
        <SongTable {...{songs}} />
    </>)
}