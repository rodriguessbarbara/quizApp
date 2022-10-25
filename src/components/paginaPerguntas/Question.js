import React, { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import QuestionOptions from './QuestionOptions';
import data from '../../data/questions';

import './Question.css';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const questaoAtual = quizState.questions[quizState.currentQuestion];

  const OnSelectedOption = (option) => {
    console.log(option)
    quizState.answerSelected = true;
    dispatch({
      type:"check_answer",
      payload: {answer: questaoAtual.answer, option}
    })
  }

  const handleClick = () => {
      if (quizState.currentQuestion + 1 === data.length) dispatch({type: "end_stage"})
      else dispatch({type: "change_question"})
    }

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {data.length}</p>
      <h3>{questaoAtual.question}</h3>

      <div id='options-container'>
        <p>Opções</p>

        {questaoAtual.options.map((option) => (
            <QuestionOptions
              option={option}
              key={option}
              answer={questaoAtual.answer}
              selectedOption={() => OnSelectedOption(option)}
            />
        ))}
      </div>

      <button disabled={quizState.currentQuestion === 0} onClick={() => dispatch({type: "back_question"})}>Voltar</button>
      {quizState.answerSelected && (
        <button onClick={handleClick}>
          Próxima
        </button>
      )}

    </div>
  )
}

export default Question;