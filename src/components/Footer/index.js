import Styles from './footer.module.css';
import Logo from '../../images/loggor/logga.png'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerTop}>
        <img src={Logo} alt="logo" />
        <div className={Styles.contactInfo}>
          <p>+46 7 604 782 64</p>
          <p>Knottvägen 24 Helsingborg</p>
        </div>
        <img src="https://worldofprintables.com/wp-content/uploads/2020/12/Social-Icons-01-Free-SVG.png" alt="social-media" />
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

        <span>© Copyright Delux 2021</span>
      </div>
    </footer>
  )
}