import Post from './Post'
export default function TimeLine({posts}) {
    return (
    <div>
        { posts.map(
            ({id, content, userName}) => 
                <Post key={id} {...{id, content, userName}} />) 
        }
    </div>
    )
}   