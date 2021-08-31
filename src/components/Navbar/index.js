import { Link } from 'react-router-dom';
import imgLogga from '../../images/loggor/logga.png';
import Styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={Styles.wrapper}>
      <nav className={Styles.content}>
        <img src={imgLogga} alt="" className={Styles.logo} />
        <div className={Styles.links}>
          <Link to="/">ABOUT</Link>
          <Link to="/">CONTACT</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">LOGIN</Link>
          <Link to="/">SIGN UP</Link>
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
