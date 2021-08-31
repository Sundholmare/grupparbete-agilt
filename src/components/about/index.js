import employees from '../../employees/employees.json';
import Styles from './about.module.css'
import bosse from './20200807_203247_2.jpg';
import logga from '../../images/loggor/logga.png';

const About = () => {
    return(
        <main className={Styles.mainBox}>
            <section className={Styles.hero}>
                <img className={Styles.logo} src={logga} alt="logo" />
                <h1 className={Styles.catch}>Abnormal is the new normal</h1>
                <p className={Styles.desc}>We are here to help you with your day-to-day chores.
                    Don't have time to mow the lawn? We got you!
                    Can't be bothered to clean up after last nights celebration? We're on it!
                    No task is too odd and no request too large.
                    We at Swervice got your back seven days a week.
                </p>
            </section>
            <div className={Styles.container}>
                <div className={Styles.userBox}>
                <h2 className={Styles.name}>Bosse</h2>
                        <h4 className={Styles.role}>Chief Executive Officer</h4>
                        <img className={`${Styles.userAvatar} ${Styles.bosse}`} src={bosse} alt="headshot" />
                </div>
                {employees.map((employee) => {
                    return <div className={Styles.userBox} key={employee.id}>
                        <h2 className={Styles.name}>{employee.name}</h2>
                        <h4 className={Styles.role}>{employee.role}</h4>
                        {/* <p className="interests">{employee.interests}</p> */}
                        <img className={Styles.userAvatar} src={`https://avatars.dicebear.com/api/croodles-neutral/${employee.name}.svg?scale=120`} alt="headshot" />
                    </div>
                    
                })}
            </div>
        </main>
    )
}

export default About;