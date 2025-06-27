import './Post.css';

export default function Post({id, content, userName}) {
    return (
        <div className="post-container">
            {/* Avatar */}
            <div className="post-avatar">
                <img
                    src={`https://api.dicebear.com/7.x/personas/svg?seed=${userName}`}
                    alt="avatar"
                    className="post-avatar-img"
                />
            </div>
            {/* Post content */}
            <div className="post-content">
                <div className="post-username">
                    {userName}
                </div>
                <div className="post-text">
                    {content}
                </div>
            </div>
        </div>
    )
}