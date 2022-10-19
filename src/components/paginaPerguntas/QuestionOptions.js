import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './QuestionOptions.css';

const QuestionOptions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const questaoAtual = quizState.questions[quizState.currentQuestion];

  return (
    <div id='options'>
    <ul>
      {questaoAtual.options.map((option) => (
        <li>
          {option}
        </li>
        ))}
    </ul>
    </div>
  )
}

export default QuestionOptions