import './GameDetailScreen.scss'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import type { GameDetailScreenProps } from './GameDetailScreen.types'

const GameDetailScreen = ({
    bgImageUrl = '',
    coverUrl = '',
    title = 'TITLE',
    subtitle = 'Subtitle',
    description = 'No description yet',
    releaseDate = '',
    metacritic = '',
    platforms = ''
}: GameDetailScreenProps) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(prev => !prev)

    return (
        <div className="game-detail-page">
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
                <main className="game-detail-screen">
                    <section className="bg" style={{ backgroundImage: `url(${bgImageUrl})` }}>
                        <div className="content-box">
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </section>

                    <div className='side-card-wrapper'>
                        <aside className="side-card">
                            <div className="title">
                                <h2>{title}</h2>
                                <h4>{subtitle}</h4>
                            </div>

                            <div className="cover">
                                {coverUrl ? <img src={coverUrl} alt={title} /> : <div>no cover</div>}
                            </div>

                            <div className="meta">
                                <p><strong>Release date:</strong> {releaseDate}</p>
                                <p><strong>Metacritic:</strong> {metacritic}</p>
                                <p><strong>Platforms:</strong> {platforms}</p>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default GameDetailScreen
