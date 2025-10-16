import ContentCard from '../ContentCard/ContentCard'
import './TestScreen.scss'
import BgImage from '../../assets/placeholders/bg-img-ph1.png';

const TestScreen = () => {
  return (
    <div className="testScreen">
        <ContentCard
            title='Test'
            description='Description of the content the card leads to'
            imageUrl={BgImage}
            //imageUrl='https://catnessgames.com/wp-content/uploads/2024/12/tipos-videojuegos-consolas-y-plataformas.jpg'
        />
    </div>
  )
}

export default TestScreen