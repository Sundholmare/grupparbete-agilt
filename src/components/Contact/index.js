import Styles from './contact.module.css';
import officeImg from './our-office.jpg';
import locationIcon from '../../images/loggor/map-marker-alt-solid.svg';
import phoneIcon from '../../images/loggor/phone-alt-solid.svg';
import emailIcon from '../../images/loggor/envelope-solid.svg';

const Contact = () => {
  return (
    <div className={Styles.background}>
      <div
        className={Styles.wrapper}
        style={{ backgroundImage: `url(${officeImg})` }}
      >
        <div className={Styles.opacity}>
          <div className={Styles.iconBox}>
            <img className={Styles.icon} src={locationIcon} alt="location" />

            <img className={Styles.icon} src={phoneIcon} alt="phone" />
            <img className={Styles.icon} src={emailIcon} alt="email" />
          </div>
          <div className={Styles.contactInfo}>
            <p>Knottvägen 24 Helsingborg</p>
            <p>+46 7 604 782 64</p>
            <p>swervice@service.com</p>
          </div>
          <div className={Styles.content}>
            <form>
              <label>Namn</label>
              <span>
                <input type="text" placeholder="Förnamn" />
                <input type="text" placeholder="Efternamn" />
              </span>
              <label>Email</label>
              <input type="text" placeholder="Email" />

              <label>Ämne</label>
              <select>
                <option>Fråga om tjänst</option>
                <option>Feedback</option>
                <option>Klagomål</option>
                <option>Generella frågor</option>
              </select>

              <label>Beskrivning</label>
              <textarea required></textarea>
              <button>SKICKA</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
