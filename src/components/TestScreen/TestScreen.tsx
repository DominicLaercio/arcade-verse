import GameDetailScreen from '../GameDetailScreen/GameDetailScreen'
import './TestScreen.scss'

const TestScreen = () => {
  return (
    <div className='testScreen'>
       <GameDetailScreen
            bgImageUrl="https://torrent4you.org/wp-content/uploads/call-of-duty-modern-warfare-2-2.jpg"
            coverUrl="https://static.posters.cz/image/1300/7151.jpg"
            title="Call of Duty"
            subtitle="Modern Warfare 2"
            description="<p>Long description here...</p>"
            releaseDate="2025-10-21"
            metacritic="88"
            platforms="PC, PS5"
        />
    </div>
  )
}

export default TestScreen