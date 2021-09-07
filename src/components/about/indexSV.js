import employees from '../../employees/employees.json';
import Styles from './about.module.css'
import bosse from './20200807_203247_2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const About = () => {


    return (
        <div className={Styles.wrapper}>
            <main className={Styles.mainBox}>
                <section className={Styles.hero}>
                    <h1 className={Styles.logo}>Swervice</h1>
                    <h1 className={Styles.catch}>ONORMAL ÄR DET NYA NORMALA</h1>
                    <p className={Styles.desc}>
                        Vi är här för att hjälpa dig med dina dagliga sysslor.
                        Har du inte tid att klippa gräset? Vi löser det!
                        Orkar inte städa upp från gårdagens firande? Vi sätter igång direkt!
                        Ingen syssla är för udda och ingen förfrågan för stor.
                        Vi här på Swervice har din rygg sju dagar i veckan.
                    </p>
                    <div className={Styles.dividerBar}>
                        <h2 className={Styles.divider}>Detta är vårt team</h2>
                        <a href="#anchor"><FontAwesomeIcon icon={faChevronDown} size="4x" className={Styles.icon} /></a>
                    </div>
                </section>
            <div className={Styles.container} id="anchor" >
                <div className={Styles.userBox}>
                <h2 className={Styles.name}>Bosse Waldt</h2>
                <h4 className={Styles.role}>Chief Executive Officer</h4>
                            <p className={Styles.email}>bosse.waldt@swervice.com</p>
                            <img className={`${Styles.userAvatar} ${Styles.bosse}`} src={bosse} alt="headshot" />
                            <p className={Styles.shortDesc} >Våran stora hövding! Den enda chefen i staden som gosar med ALLA sina anställda. Snäll och varm men kan även lämna lite väl med hår runt vår arbetsplats.</p>
                </div>
                {employees.map((employee) => {
                    return <div className={Styles.userBox} key={employee.id}>
                        <h2 className={Styles.name}>{`${employee.firstName} ${employee.lastName}`}</h2>
                            <h4 className={Styles.role}>{employee.role}</h4>
                            <p className={Styles.email}>{employee.email}</p>
                            <img className={Styles.userAvatar} src={`https://avatars.dicebear.com/api/croodles-neutral/${employee.firstName}.svg?scale=120`} alt="headshot" />
                            <p className={Styles.shortDesc} >{employee.descSV}</p>
                    </div>})}
                </div>
            </main>
        </div>
    )
}

export default About;