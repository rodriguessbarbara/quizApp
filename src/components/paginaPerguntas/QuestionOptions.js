import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './QuestionOptions.css';

const QuestionOptions = ( {option, selectedOption, answer } ) => {
    const [quizState, dispatch] = useContext(QuizContext);
  const questaoAtual = quizState.questions[quizState.currentQuestion];
  answer= questaoAtual.answer

  const OnSelectedOption = (option) => {
    // const lis = document.querySelectorAll('li');
    //   lis.forEach((li) => {
    //     // li.style.pointerEvents = 'none';
    //     li.style.opacity = '0.75';
    //   })

    dispatch({
      type:"check_answer",
      payload: {answer: questaoAtual.answer, option}
    })
  }

  return (
    <ul id='options'>

      {questaoAtual.options.map((option) => (
        <li key={option} onClick={() => OnSelectedOption(option)} className={`option
          ${quizState.answerSelected && option === answer ? 'correct' : ''}
          ${quizState.answerSelected && option !== answer ? 'wrong' : ''}
          `}
        >
          {option}
        </li>
        ))}
    </ul>
  )
}

export default QuestionOptions;