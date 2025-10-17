import './Home.scss'
import Menu from '../Menu/Menu'
import { useState } from 'react'


const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <div className="home">
            <div className="menu-button" onClick={toggleMenu}>
                <i className="bi bi-list"></i>
            </div>

            <div className={`menu-area ${menuOpen ? 'open' : ''}`}>
                <Menu />
            </div>

            <div className="content-area">
                <div className="content">
                    <p>Content</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nihil rem quaerat laudantium dolores vitae, ex culpa qui magnam commodi cum porro pariatur modi minus magni iure velit excepturi recusandae.</p>
                </div>
            </div>
        </div>
    )
}

export default Home