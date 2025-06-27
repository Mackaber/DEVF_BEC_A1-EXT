import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SongTable from '../component/SongTable'
export default function Album() {
    const [songs, setSongs] = useState([])
    const [name, setName] = useState("")

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            let response = await axios.get(`https://osdb-api.confidence.sh/rest/_mBYU3KJtOQNY6oY17dpq/album/${id}/song`)

            console.log(id)
            console.log(response)

            setSongs(response.data.data.song)
            setName(response.data.data.name)

        }

        fetchData()
    },[id])

    return(
    <>
        <h1>{name}</h1>
        <SongTable {...{songs}} />
    </>)
}