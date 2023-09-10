import { Link } from "react-router-dom";

import logo from '../../assets/images/dharma.svg';

import './Logo.sass';

const Logo = () => {
  return (
    <Link to="/">
      <div id="logo" className="logo">
        <img className="logo-img" src={logo}/>
      </div>
    </Link>
  );
};

export default Logo;