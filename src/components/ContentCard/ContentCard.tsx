import type React from 'react'
import './ContentCard.scss'
import type CardProps from './ContentCard.types'

const ContentCard: React.FC<CardProps> = ({title, description, imageUrl}) => {
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
    };

    return (
        <div className='content-card' style={cardStyle}>
            <div className="card">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ContentCard