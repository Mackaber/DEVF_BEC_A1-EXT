import './Post.css'
export default function Post({ post, handleClick }) {
    const { userId, id, title, body } = post

    return (
        <p className="post" key={id} onClick={() => handleClick(id)}>{title}</p>
    )
}