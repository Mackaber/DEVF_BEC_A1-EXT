import React, { useCallback, useEffect, useState } from "react"
import TimeLine from "../common/TimeLine"
import NewPost from "./NewPost"

const previousPosts =  [
    {
        id: 1,
        content: "Que bonito día para programar",
        userName: "Mackaber",
    },
    {
        id: 2,
        content: "Hoy aprendí algo nuevo sobre React 🚀",
        userName: "AnaDev",
    },
    {
        id: 3,
        content: "¿Alguien tiene tips para mejorar en JavaScript?",
        userName: "CodeMaster",
    },
    {
        id: 4,
        content: "Nada como un café y buen código por la mañana ☕",
        userName: "Juanito",
    },
    {
        id: 5,
        content: "¡Feliz viernes a todos! ¿Qué planes tienen?",
        userName: "LuzEstrella",
    },
    {
        id: 6,
        content: "Me encanta resolver bugs difíciles, ¡es como un reto!",
        userName: "DebugQueen",
    },
    {
        id: 7,
        content: "Hoy toca deploy, crucen los dedos 🤞",
        userName: "DeployGuy",
    },
    {
        id: 8,
        content: "¿Cuál es su editor de código favorito?",
        userName: "Techie",
    },
    {
        id: 9,
        content: "Aprender nunca termina, siempre hay algo nuevo.",
        userName: "Sofia",
    },
    {
        id: 10,
        content: "¿Ya probaron la nueva actualización de Node.js?",
        userName: "NodeFan",
    },
]

export default function Content() {
    const [posts, setPosts] = useState([])

    const setNewPosts = useCallback((posts) => {
        const postsJSON = JSON.stringify(posts)
        localStorage.setItem('posts', postsJSON)
    }, [posts])

    useEffect(() => {
        if(localStorage.getItem('posts')) {
            const postsJSON = localStorage.getItem('posts')
            const parsedPosts = JSON.parse(postsJSON) 
            setPosts(parsedPosts)
        } else {
            setPosts([])
        }

    }, [])

    return (
        <div className="home-content">
            <NewPost {...{posts, setPosts, setNewPosts}} />
            <TimeLine posts={posts} />
        </div>
    )
}