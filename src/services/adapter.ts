import { IQuiz, QuizRecordData } from '../models'

// prettier-ignore
export const adaptQuizToClient = (quiz: QuizRecordData): IQuiz[] | undefined => {
  if (!quiz) return

  return Object.keys(quiz).map(quizKey => {
    return {
      ...quiz[quizKey],
      hashKey: quizKey,
    }
  })
}
