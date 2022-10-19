import { createContext, useReducer } from "react";
import questions from '../data/questions'

const stages = ["start", "playing", "end"];

const initialState = {
  gameState: stages[0],
  questions,
  currentQuestion: 0,
}

const quizReducer = (state, action) => {
  switch(action.type) {
    case "change_state":
      return {
        ...state,
        gameState: stages[1],
      };
    
    case "reorder_questions":
      console.log('foi pora');
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - .5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      }

      case "change_question":
        const nextQuestion = state.currentQuestion + 1;
      
        return {
          ...state,
          currentQuestion: nextQuestion,
        };

      case "back_question":
        const backQuestion = state.currentQuestion - 1;
        // const checkQuestion = (state.currentQuestion === 0) ? 'alo' : backQuestion; 
        
        return {
          ...state,
          currentQuestion: backQuestion,
        };

      default:
        return state;
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
}