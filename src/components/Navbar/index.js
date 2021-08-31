import { Link } from 'react-router-dom';
import imgLogga from '../../images/loggor/logga.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <img src={imgLogga} alt="" className="logo" />
        <div className="links">
          <Link to="/">Om oss</Link>
          <Link to="/">Kontakt</Link>
          <Link to="/">Vanliga frågor</Link>
          <Link to="/">Login</Link>
          <Link to="/">Sign up</Link>
        </div>
        <button>SV</button>
        <button>EN</button>
      </nav>
    </div>
  );
};

export default Navbar;
