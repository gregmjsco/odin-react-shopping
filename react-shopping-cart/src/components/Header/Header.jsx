import './Header.css'

function Header() {
    return (
        <header>
            <div className='header__left'>
                <img className='header__left__logo' src="" alt="header logo" />
                <h1 className='header__left__title'>monogram</h1>
            </div>
            <nav className='header__right'>
                <a className='header__right__link' href="">How it works</a>
                <a className='header__right__link' href="">Workflows</a>
                <a className='header__right__link' href="">Download</a>
                <a className='header__right__link' href="">Blog</a>
            </nav>
            <div className='header__button__container'>
                <button className='btn'>Cart</button>
                <button className='btn'>USD</button>
            </div>
        </header>
    )
}

export default Header;