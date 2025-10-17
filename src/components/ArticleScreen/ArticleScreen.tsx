import './ArticleScreen.scss'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Article from '../Article/Article'
import Footer from '../Footer/Footer'
import { useState } from 'react'

const ArticleScreen = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className='articleScreen'>
        <div className={`menu-area ${menuOpen ? 'open' : ''}`}>
            <Menu />
        </div>

        <div className="header-area">
            <div className="menu-button" onClick={toggleMenu}>
                <i className="bi bi-list"></i>
            </div>
            <Header />
        </div>

        <div className='content-area'>
            <Article
                articleTitle="Article example"
                mainImageUrl="https://bolojawan.com/wp-content/uploads/2021/01/BeFunky-collage-1-8.jpg"
                authorName="John Doe"
                publishDate="10/17/2025"
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim dolores, obcaecati doloremque reiciendis, quasi omnis, cum nulla nostrum sequi voluptas! Reiciendis mollitia reprehenderit aspernatur nostrum illum neque quam omnis.</p>
            </Article>
        </div>

        <Footer />
    </div>
  )
}

export default ArticleScreen