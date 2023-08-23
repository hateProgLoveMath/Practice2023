import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src="/assets/images/dharma.svg"/>
      </div>
    </Link>
  );
};

export default Logo;