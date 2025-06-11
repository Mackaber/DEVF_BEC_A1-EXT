import { useEffect, useState, useMemo } from "react"
import AlbumTitle from "./AlbumTitle"
import AlbumTracks from "./AlbumTracks"
import "./Container.css"

export default function Container() {
    const [tracks, setTracks] = useState([])
    const [title, setTitle] = useState("")

    useEffect(() => {
        async function fetchData()  {
            const responseJSON = await fetch("https://www.theaudiodb.com/api/v1/json/2/track.php?m=2430940")
            const { track } = await responseJSON.json()
            setTracks(track)
            setTitle(track[0].strAlbum)
            console.log(track)
        }
        fetchData()
    },[])

    const duration = useMemo(() => {
        // for, forEach, reduce
        let totalDuration = 0;
        tracks.forEach((track) => {
            totalDuration += Number(track.intDuration)
        })

        // Formatear a HH:MM:SS
        const totalSeconds = Math.floor(totalDuration / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        console.log(totalDuration)
        return formatted
    }, [tracks])

    return (
        <div className="container-spotify">
            <AlbumTitle 
                imageUrl="https://www.theaudiodb.com/images/media/album/thumb/rawssi1719748609.jpg/small"
                title={title}
                duration={duration}
            />
            <div className="container-tracks">
                <AlbumTracks tracks={tracks}/>
            </div>
        </div>
    )
}