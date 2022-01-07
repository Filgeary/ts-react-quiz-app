import { IQuiz, IQuizServer } from '../models'

type QuizData = Record<string, IQuizServer>

export const adaptQuizDataToClient = (quiz: QuizData): IQuiz[] => {
  return Object.keys(quiz).map(quizKey => {
    return {
      ...quiz[quizKey],
      hashKey: quizKey,
    }
  })
}
