import Song from './Song'
export default function SongList({ songs }) {
    return (
        <div>
            {songs.map((song) => <Song key={song.id} {...song} />)}
        </div>
    )
}