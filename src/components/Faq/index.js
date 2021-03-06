import Styles from './faq.module.css';
import Question from './Question';

const Faq = () => {

  const answer = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum nisi iure ratione hic. Distinctio eos possimus voluptatibus sed repellendus ea dolorem aperiam libero tempore repellat, ut ullam iusto dicta.'
  const questions = [
    { title: 'What is Swervice', answer: answer, id: 1 },
    { title: 'Is Swervice available near me?', answer: answer, id: 2 },
    { title: 'Can Swervice take my dog for walks?', answer: answer, id: 3 },
    { title: 'Can I book more than one service at a time?', answer: answer, id: 4 },
    { title: 'Can I pet your CEO?', answer: answer, id: 5 },
    { title: 'What happens if I am not satified with the service?', answer: answer, id: 6 },
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
