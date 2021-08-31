import employees from '../../employees/employees.json';
import './about.css'

const About = () => {
    return(
        <main className="mainBox">
            <p>These are the warm and amazing staff of Swervice that makes this whole thing work</p>
            <h1>Our staff:</h1>
            <div className="container">
                {employees.map((employee) => {
                    return <div className="userBox" key={employee.id}>
                        <h1 className="name">{employee.name}</h1>
                        <h3 className="role">{employee.role}</h3>
                        <p className="interests">{employee.interests}</p>
                        <img className="userAvatar" src={`https://avatars.dicebear.com/api/croodles-neutral/${employee.name}.svg`} alt="headshot" />
                    </div>
                })}
            </div>
        </main>
    )
}

export default About;