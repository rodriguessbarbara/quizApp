import React, { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import data from '../../data/questions';

import './Question.css';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const questaoAtual = quizState.questions[quizState.currentQuestion];

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {data.length}</p>
      <h3>{questaoAtual.question}</h3>

      <div id='options-container'>
        <p>Opções</p>
      </div>
      <button disabled={quizState.currentQuestion === 0} onClick={() => dispatch({type: "back_question"})}>Voltar</button>
      <button onClick={() => dispatch({type: "change_question"})}>Próxima</button>

    </div>
  )
}

export default Question;