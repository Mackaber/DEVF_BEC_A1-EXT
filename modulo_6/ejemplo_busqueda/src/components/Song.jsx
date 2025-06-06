import './Song.css'
export default function Song({id, title, artist, album}) {
    return (
        <div className="song-item">
            <p className="song-title">{title}</p>
            <p className="song-artist">{artist}</p>
            <p className="song-album">{album}</p>
        </div>
    )
}