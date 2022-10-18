import { useContext } from 'react';
import WelcomePage from './components/paginaInicial/WelcomePage';
import QuestionPage from './components/paginaPerguntas/QuestionPage'
import { QuizContext } from '../src/context/quiz';

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1> Quiz de Programação Front-End</h1>
      {quizState.gameState === 'start' && <WelcomePage/>}
      {quizState.gameState === 'playing' && <QuestionPage/>}
    </div>
  );
}

export default App;
