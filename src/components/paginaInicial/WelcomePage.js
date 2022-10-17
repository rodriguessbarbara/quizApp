import React from 'react'
import './WelcomePage.css'
import Quiz from '../../img/undraw_quiz_re_aol4.svg'

const WelcomePage = () => {
  return (
    <div id='welcome'>
      <h2>Bem-Vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt='inicio do quiz'/>

    </div>
    )
}

export default WelcomePage;