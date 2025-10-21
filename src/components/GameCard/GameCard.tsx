import './GameCard.scss'
import type { GameCardProps } from './GameCard.types'

const GameCard = ({
    imageUrl,
    title,
    subtitle,
    description,
    releaseDate,
    metacritic,
    rating,
    platforms
}: GameCardProps) => {
  return (
    <div className='game-card'>
        <div className='cover-image'>
            <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className='title'>
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
        </div>
        <div className='info'>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Release date: </strong>{releaseDate}</p>
            <div className='ratings'>
                <p><strong>Metacritic: </strong>{metacritic}</p>
                <p><strong>Rating: </strong>{rating}</p>
            </div>
            <p><strong>Platforms: </strong>{platforms}</p>
        </div>
    </div>
  )
}

export default GameCard