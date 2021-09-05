import { useState } from 'react';
import Styles from './faq.module.css';

const Question = (props) => {

  const [active, setActive] = useState(false);

  const handelClick = (e) => {
    setActive(!active)
  }

  return (
    <div onClick={handelClick} className={Styles.questionBox}>
      <div className={Styles.qHeading}>
        <span className={Styles.icon}>{active ? <p>-</p> : <p>+</p>}</span>
        <h3 className={Styles.question}>{props.title}</h3>
      </div>
      <p className={active ? `${Styles.answer} ${Styles.active}` : `${Styles.answer}`}>{props.answer}</p>
    </div>
  )
}

export default Question