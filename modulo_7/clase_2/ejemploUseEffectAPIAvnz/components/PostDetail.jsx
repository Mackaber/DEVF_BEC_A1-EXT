import './PostDetail.css'

export default function PostDetail({ post }) {
    const { title , body } = post 

    return (
        <div className="detail">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}