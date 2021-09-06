import employees from '../../employees/employees.json';
import Styles from './about.module.css'
import bosse from './20200807_203247_2.jpg';
import logga from '../../images/loggor/logganamn.png';

const About = () => {

    return (
        <div className={Styles.wrapper}>
            <main className={Styles.mainBox}>
                <section className={Styles.hero}>
                    <h1 className={Styles.logo}>Swervice</h1>
                    <h1 className={Styles.catch}>ABNORMAL IS THE NEW NORMAL</h1>
                    <p className={Styles.desc}>We are here to help you with your day-to-day chores.
                        Don't have time to mow the lawn? We got you!
                        Can't be bothered to clean up after last nights celebration? We're on it!
                        No task is too odd and no request too large.
                        We at Swervice got your back seven days a week.
                    </p>
                    <div className={Styles.dividerBar}>
                        <h2 className={Styles.divider}>This is us</h2>
                    </div>
                </section>
                <div className={Styles.container}>
                    <div className={Styles.userBox}>
                    <h2 className={Styles.name}>Bosse Waldt</h2>
                            <h4 className={Styles.role}>Chief Executive Officer</h4>
                            <p className={Styles.email}>bosse.waldt@swervice.com</p>
                            <img className={`${Styles.userAvatar} ${Styles.bosse}`} src={bosse} alt="headshot" />
                            <p className={Styles.shortDesc} >Our big chief in command! The only CEO in town that cuddles ALL of his employees. Kind and gentle but might leave a little too much hair around the place.</p>
                    </div>
                    {employees.map((employee) => {
                        return <div className={Styles.userBox} key={employee.id}>
                            <h2 className={Styles.name}>{`${employee.firstName} ${employee.lastName}`}</h2>
                            <h4 className={Styles.role}>{employee.role}</h4>
                            <p className={Styles.email}>{employee.email}</p>
                            <img className={Styles.userAvatar} src={`https://avatars.dicebear.com/api/croodles-neutral/${employee.firstName}.svg?scale=120`} alt="headshot" />
                            <p className={Styles.shortDesc} >{employee.desc}</p>
                        </div>})}
                </div>
            </main>
        </div>
    )
}

export default About;

