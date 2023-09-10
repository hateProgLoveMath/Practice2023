import Logo from '../../components/Logo/Logo'

import './Header.sass'

const Header = () => {

    return (
        <div className="header">
            <nav className="header-nav">
                <Logo />
                <span>SBH</span>
            </nav>
        </div>
    );
};

export default Header;