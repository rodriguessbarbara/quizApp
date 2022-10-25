import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';

import './QuestionOptions.css';

const QuestionOptions = ( {option, selectedOption, answer } ) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="option" id='options'>
    <ul onClick={() => selectedOption()}>
      <li>{option}</li>
    </ul>
    </div>
  )
}

export default QuestionOptions