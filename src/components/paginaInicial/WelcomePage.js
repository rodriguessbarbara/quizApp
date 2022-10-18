import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './WelcomePage.css'
import Quiz from '../../img/undraw_quiz_re_aol4.svg'

const WelcomePage = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div id='welcome'>
      <h2>Bem-Vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "change_state"})}>
        Iniciar
      </button>
      <img src={Quiz} alt='inicio do quiz'/>

    </div>
    )
}

export default WelcomePage;