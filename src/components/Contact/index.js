import Styles from './contact.module.css';
import officeImg from './our-office.jpg';
const Contact = () => {
  return (
    <div className={Styles.background}>
      <div
        className={Styles.wrapper}
        style={{ backgroundImage: `url(${officeImg})` }}
      >
        <div className={Styles.opacity}>
          <div className={Styles.content}>
            <form>
              <label>Namn</label>
              <span>
                <input type="text" required value />
                <input type="text" required value />
              </span>
              <label>Email</label>
              <input type="text" required value />

              <label>Ämne</label>
              <select value>
                <option value="Macke">Fråga om tjänst</option>
                <option value="Filip">Feedback</option>
                <option value="Filip">Klagomål</option>
                <option value="Filip">Generella frågor</option>
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
