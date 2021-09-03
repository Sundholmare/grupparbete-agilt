import { Link } from 'react-router-dom';
import imgLogga from '../../images/loggor/logga.png';
import Styles from './navbar.module.css';
import {useDispatch} from 'react-redux';
import { flip } from '../../actions/index';


const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <div className={Styles.wrapper}>
      <nav className={Styles.content}>
        <Link to="/">
          <img src={imgLogga} alt="" className={Styles.logo} />
        </Link>
        <div className={Styles.links}>
          <Link to="/about">OM OSS</Link>
          <Link to="/contact">KONTAKT</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="#">LOGGA IN</Link>
          <Link to="#">REGISTRERA DIG</Link>
        </div>

        <div className={Styles.langBtns}>
          <button onClick={() => dispatch(flip(false))} className={Styles.svBtn}>SV</button>
          <button onClick={() => dispatch(flip(true))} className={Styles.enBtn}>EN</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
