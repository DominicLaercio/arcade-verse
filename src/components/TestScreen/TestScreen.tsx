import GameCard from '../GameCard/GameCard'
import './TestScreen.scss'

const TestScreen = () => {
  return (
    <div className='testScreen'>
        <GameCard
            imageUrl={'https://i.redd.it/steam-grid-set-for-karlach-lovers-v0-fylu9lkhwvnb1.png?width=600&format=png&auto=webp&s=33da27f328c85e43f2661fd51724240aa38a3408'}
            title={'Baldur\'s Gate III'}
            subtitle={''}
            description={'Third tittle of the Baldur\'s Gate series.'}
            releaseDate={'08/03/2023'}
            metacritic={'96'}
            rating={'9.2'}
            platforms={'PlayStation 5, Xbox Series X and Series S, GeForce Now, Microsoft Windows, Mac operating systems'}
        />
    </div>
  )
}

export default TestScreen