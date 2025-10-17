import './Home.scss'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import ContentCard from '../ContentCard/ContentCard'
import GameCardImage from '../../assets/placeholders/bg-img-ph3.png'
import ReviewCardImage from '../../assets/placeholders/bg-img-ph1.png'
import NewsCardImage from '../../assets/placeholders/bg-img-ph2.png'


const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="home">
            <div className={`menu-area ${menuOpen ? 'open' : ''}`}>
                <Menu />
            </div>

            <div className="header-area">
                <div className="menu-button" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </div>
                <Header />
            </div>

            <div className="content-area">
                <div className="content">
                    <p>Content</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nihil rem quaerat laudantium dolores vitae, ex culpa qui magnam commodi cum porro pariatur modi minus magni iure velit excepturi recusandae.</p>
                </div>

                <div className="content-cards">
                    <div className='gameCard'>
                        <ContentCard
                            title='Games'
                            description='Search for information on thousands of games.'
                            imageUrl={GameCardImage}
                        />
                    </div>
                    <div className='reviewsCard'>
                        <ContentCard
                            title='Reviews'
                            description='Our reviews.'
                            imageUrl={ReviewCardImage}
                        />
                    </div>
                    <div className='newsCard'>
                        <ContentCard
                            title='News'
                            description='Latest news in of the game universe.'
                            imageUrl={NewsCardImage}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home