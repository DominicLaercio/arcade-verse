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
                <p>{description}</p>
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default ContentCard