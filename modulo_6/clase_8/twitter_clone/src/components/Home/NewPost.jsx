import { useState } from "react"
import './NewPost.css'

export default function NewPost({posts, setPosts, setNewPosts}) {
    const [content, setContent] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const post = {
            id: posts.length + 1,
            content,
            userName: 'Mackaber',
        }

        setPosts([post,...posts])
        setNewPosts(posts)
        setContent('')
    }

    return (
        <form className="newpost-container" onSubmit={handleSubmit}>
            <input
                className="newpost-input"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="¿Qué está pasando?"
                autoComplete="off"
            />
            <button className="newpost-button" type="submit">Publicar</button>
        </form>
    )
}