import { useState } from 'react';
import Styles from './faq.module.css';

const Faq = () => {

  const answer = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum nisi iure ratione hic. Distinctio eos possimus voluptatibus sed repellendus ea dolorem aperiam libero tempore repellat, ut ullam iusto dicta.'
  const questions = [
    { title: 'Hur många knott finns det i ett knotthål?', answer: answer, id: 1 },
    { title: 'Hur mår Tim idag, är han lite sjuk?', answer: answer, id: 2 },
    { title: 'Jag vill verkligen spela idag, får jag göra det när jag är klar?', answer: answer, id: 3 },
    { title: 'Kan du köpa en Monster energy till Mirwais?', answer: answer, id: 4 },
    { title: 'Varför är Tara kvar i klassen?', answer: answer, id: 5 },
    { title: 'Finns Tomten på riktigt, eller ljuger Filip för mig?', answer: answer, id: 6 },
  ]

  const [active, setActive] = useState(false);

  const handelClick = () => setActive(!active)

  return (
    <div className={Styles.background}>
      <main className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1 className={Styles.mainHeading}>FAQ's</h1>
          <div className={Styles.questions}>
            {questions.map((question) => (
              <div onClick={handelClick} className={Styles.questionBox} key={question.id}>
                <div className={Styles.qHeading}>
                  <span className={Styles.icon}>+</span>
                  <h3 className={Styles.question}>{question.title}</h3>
                </div>
                <p className={active ? `${Styles.answer} ${Styles.active}` : `${Styles.answer}`}>{question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )

}

export default Faq