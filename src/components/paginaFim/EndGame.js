import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'
import data from '../../data/questions';

import Congrats from '../../img/congrats.svg'
import './EndGame.css'

const EndGame = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='endgame'>
      <h3>Fim de jogo</h3>
      <p>Pontuação: {quizState.score} pontos</p>
      <p>Você acertou {quizState.score} de {data.length} perguntas</p>
      
      <img src={Congrats} alt='Imagem comemorativa de fim de Quiz'/>
      <button onClick={
        (() => {
        dispatch({type: 'new_game'})
      })
      }>Reiniciar</button>
    </div>
  )
}

export default EndGame