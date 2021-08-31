import { Link } from 'react-router-dom';
import imgLogga from '../../images/loggor/logga.png';
import Styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={Styles.wrapper}>
      <nav className={Styles.content}>
        <img src={imgLogga} alt="" className={Styles.logo} />
        <div className={Styles.links}>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Login</Link>
          <Link to="/">Sign up</Link>
        </div>

        <div className={Styles.langBtns}>
          <button className={Styles.svBtn}>SV</button>
          <button className={Styles.enBtn}>EN</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
