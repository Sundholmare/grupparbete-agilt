import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="" alt="" className="logo" />
      <div className="links">
        <Link to="/">Login</Link>
        <Link to="/">Sign up</Link>
      </div>
      <button></button>
      <button></button>
    </nav>
  );
};

export default Navbar;
