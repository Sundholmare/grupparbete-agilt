import { useState } from 'react';
import Styles from './faq.module.css';
import Question from './Question';

const Faq = () => {

  const answer = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum nisi iure ratione hic. Distinctio eos possimus voluptatibus sed repellendus ea dolorem aperiam libero tempore repellat, ut ullam iusto dicta.'
  const questions = [
    { title: 'Lorem ipsum dolor, adipisicing elit. Recusandae, dolores?', answer: answer, id: 1 },
    { title: 'Lorem ipsum dolor sit amet?', answer: answer, id: 2 },
    { title: 'Lorem ipsum dolor sit dalia domor ipsa?', answer: answer, id: 3 },
    { title: 'Random placeholder, kan du stå på 2 ben?', answer: answer, id: 4 },
    { title: 'vem var när hur varför hallå?', answer: answer, id: 5 },
    { title: 'Random ord som kan bli en fråga kanske?', answer: answer, id: 6 },
  ]

  return (
    <div className={Styles.background}>
      <main className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1 className={Styles.mainHeading}>FAQ's</h1>
          <div className={Styles.questions}>
            {questions.map((question) => (
              <Question title={question.title} answer={question.answer} key={question.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )

}

export default Faq
