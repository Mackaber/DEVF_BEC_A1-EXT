import "./AlbumTitle.css"

export default function AlbumTitle({ imageUrl, title, duration }) {
    console.log(imageUrl)
    return (
        <div className="album-title">
            <img 
                src={imageUrl} 
                alt={title}
                className="album-title__image"
            />
            <h2 className="album-title__name">{title}</h2>
            <p className="album-title__duration">Duración total: {duration}</p>
        </div>
    )
}