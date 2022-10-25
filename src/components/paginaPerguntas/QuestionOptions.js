import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './QuestionOptions.css';

const QuestionOptions = ( {option, selectedOption, answer } ) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const questaoAtual = quizState.questions[quizState.currentQuestion];
  answer= questaoAtual.answer

  const OnSelectedOption = (option) => {
    // quizState.answerSelected = true;
    dispatch({
      type:"check_answer",
      payload: {answer: questaoAtual.answer, option}
    })
  }

  return (
    <div id='options' className='options'>

    <ul>
      {questaoAtual.options.map((option) => (
        <li key={option} onClick={() => OnSelectedOption(option)}>
          {option}
        </li>
        ))}
    </ul>

    </div>
  )
}

export default QuestionOptions