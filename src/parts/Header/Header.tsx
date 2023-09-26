import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'

import './Header.sass'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-board">
        <Logo />
        <span>SBH</span>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;