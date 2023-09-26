import {Link} from 'react-router-dom'

import './Navbar.sass'

const Navbar: React.FC = (
  ) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Products</Link>
      </li>
    </ul>
  );
};

export default Navbar;