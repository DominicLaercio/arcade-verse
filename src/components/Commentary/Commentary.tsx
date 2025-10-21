import './Commentary.scss'
import type { CommentaryProps } from './Commentary.types'

const Commentary = ({
    username,
    avatar,
    content,
    date,
    likes = 0,
    replies = []
}: CommentaryProps) => {
    return (
        <div className="commentary">
            <div className="comment-header">
                <div className="avatar">
                    {avatar ? (
                        <img src={avatar} alt={`${username}'s avatar`} />
                    ) : (
                        <div className="placeholder-avatar" />
                    )}
                </div>
                <div className="user-info">
                    <div className="username">{username}</div>
                    <div className="date">{date}</div>
                </div>
            </div>

            <div className="comment-content">
                {content}
            </div>

            <div className="comment-footer">
                <div className="likes">
                    <i className="bi bi-heart"></i>
                    <span>{likes}</span>
                </div>
            </div>

            {replies.length > 0 && (
                <div className="replies">
                    {replies.map((reply, index) => (
                        <Commentary key={index} {...reply} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Commentary