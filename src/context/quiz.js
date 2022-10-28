import { createContext, startTransition, useReducer } from "react";
// import EndGame from "../components/paginaFim/EndGame";
import questions from '../data/questions'

const stages = ["start", "playing", "end"];

const initialState = {
  gameState: stages[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
}

const quizReducer = (state, action) => {
  switch(action.type) {
    case "change_state":
      return {
        ...state,
        gameState: stages[1],
      };
    
    case "reorder_questions":
      console.log('foi o reorder');
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - .5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      }

    case "change_question":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) endGame = true;
      
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame === true ? stages[2] : state.gameStage,
        answerSelected : false,
      };

    case "back_question":
      const backQuestion = state.currentQuestion - 1;
      return {
        ...state,
        currentQuestion: backQuestion,
      };

    case "end_stage":
      return {
        ...state,
        gameState: stages[2],
      };
    
    case "new_game":
      return initialState;

    case "check_answer":
      if (state.answerSelected) return state;

      console.log(action);
      const answer = action.payload.answer
      const option = action.payload.option
      let correctAnswer = 0
      
      if (answer === option) {
        console.log('pontuou');
        correctAnswer = 1;
      }

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      }
           
      default:
        return state;
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
}