//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import imgLogga from '../../images/loggor/logga.png';
import Styles from './navbar.module.css';
import { useDispatch } from 'react-redux';
import { flip } from '../../actions/index';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={Styles.wrapper}>
      <nav className={Styles.content}>
        <NavLink to="/">
          <img src={imgLogga} alt="" className={Styles.logo} />
        </NavLink>
        <div className={Styles.links}>
          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: 'bold',
              color: ' #F39077',
              fontSize: '24px',
            }}
          >
            OM OSS
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{
              fontWeight: 'bold',
              color: ' #F39077',
              fontSize: '24px',
            }}
          >
            KONTAKT
          </NavLink>
          <NavLink
            to="/faq"
            activeStyle={{
              fontWeight: 'bold',
              color: ' #F39077',
              fontSize: '24px',
            }}
          >
            FAQ
          </NavLink>
          <NavLink to="#">LOGGA IN</NavLink>
          <NavLink to="#">REGISTRERA DIG</NavLink>
        </div>

        <div className={Styles.langBtns}>
          <button
            onClick={() => dispatch(flip(false))}
            className={Styles.svBtn}
          >
            SV
          </button>
          <button onClick={() => dispatch(flip(true))} className={Styles.enBtn}>
            EN
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
