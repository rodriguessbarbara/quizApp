import { createContext, useReducer } from "react";
import questions from '../data/questions'

const stages = ["start", "playing", "end"];

const initialState = {
  gameState: stages[0],
  questions
}

const quizReducer = (state, action) => {
  switch(action.type) {
    case "change_state":
      return state;
    
      default:
        return state;
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>
}