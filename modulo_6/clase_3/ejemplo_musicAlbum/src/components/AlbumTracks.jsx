import "./AlbumTracks.css"

export default function AlbumTracks({ tracks }) {

    // Formatear a MM:SS
    const tracksWithMins = tracks.map((track) => {
        const totalSeconds = Math.floor(track.intDuration / 1000);
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return { ...track, intDuration: formatted };
    });

    return (
        <div className="album-tracks">
            {tracksWithMins.map(({idTrack, strTrack, intDuration}, idx) => 
                <div 
                    key={idTrack}
                    className="album-tracks__track"
                >
                    <span className="album-tracks__name">{strTrack}</span>
                    <span className="album-tracks__duration">{intDuration}</span>
                </div>
            )}
        </div>
    )
}