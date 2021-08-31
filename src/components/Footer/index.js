import Styles from './footer.module.css';
import Logo from '../../images/loggor/logga.png'
import facebook from '../../images/loggor/facebook-square-brands.svg'
import instagram from '../../images/loggor/instagram-brands.svg'
import twitter from '../../images/loggor/twitter-brands.svg'
import snapchat from '../../images/loggor/snapchat-square-brands.svg'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerTop}>
        <div className={Styles.logoBox}>
          <img className={Styles.logo} src={Logo} alt="logo" />
        </div>
        <div className={Styles.contactInfo}>
          <p>+46 7 604 782 64</p>
          <p>Knottvägen 24 Helsingborg</p>
        </div>
        <div className={Styles.iconBox}>
          <img className={Styles.icon} src={snapchat} alt="snapchat" />
          <img className={Styles.icon} src={twitter} alt="twitter" />
          <img className={Styles.icon} src={facebook} alt="facebook" />
          <img className={Styles.icon} src={instagram} alt="instagram" />
        </div>
      </div>

      <div className={Styles.footerBottom}>
        <ul className={Styles.footerMenu}>
          <li>
            <a className={Styles.link} href="#">OM OSS</a>
          </li>
          <li>
            <a className={Styles.link} href="#">KONTAKT</a>
          </li>
          <li>
            <a className={Styles.link} href="#">VANLIGA FRÅGOR</a>
          </li>
          <li>
            <a className={Styles.link} href="#">LOGGA IN</a>
          </li>
          <li>
            <a className={Styles.link} href="#">REGISTRERA DIG</a>
          </li>
        </ul>

        <span className={Styles.copyright}>© Copyright Delux 2021</span>
      </div>
    </footer>
  )
}

export default Footer