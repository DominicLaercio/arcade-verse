import './Menu.scss';

const Menu = () => {
    return (
        <menu className="menu">
            <h1>Menu</h1>
            <div className="menu-items">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Services</h4>
                <h4>Contact</h4>
            </div>
            <div className="menu-info">
                <p>Some information at the end of the menu.</p>
            </div>
        </menu>
    );
};

export default Menu;