import Styles from './faq.module.css';
import Question from './Question';

const Faq = () => {

  const answer = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum nisi iure ratione hic. Distinctio eos possimus voluptatibus sed repellendus ea dolorem aperiam libero tempore repellat, ut ullam iusto dicta.'
  const questions = [
    { title: 'Vad är Swervice?', answer: answer, id: 1 },
    { title: 'Finns Swervice nära mig?', answer: answer, id: 2 },
    { title: 'Kan Swervice gå ut med min hund?', answer: answer, id: 3 },
    { title: 'Kan jag boka mer än en tjänst åt gången?', answer: answer, id: 4 },
    { title: 'Får man klappa er VD?', answer: answer, id: 5 },
    { title: 'Vad händer om jag inte är nöjd med ert arbete?', answer: answer, id: 6 },
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