import { useContext, useEffect } from 'react';
import { QuizContext } from '../src/context/quiz';

import WelcomePage from './components/paginaInicial/WelcomePage';
import Question from './components/paginaPerguntas/Question'

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "reorder_questions"});
  }, [dispatch])

  return (
    <div className="App">
      <h1> Quiz de Programação Front-End</h1>
      {quizState.gameState === 'start' && <WelcomePage/>}
      {quizState.gameState === 'playing' && <Question/>}
    </div>
  );
}

export default App;
