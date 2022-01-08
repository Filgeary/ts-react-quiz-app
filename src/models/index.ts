export interface IQuizAnswer {
  id: number
  title: string
}

export interface IQuizServer {
  id: number
  question: string
  correctAnswerID: number
  answers: IQuizAnswer[]
}

export interface IQuiz extends IQuizServer {
  hashKey: string
}

export type QuizRecordData = Record<string, IQuizServer>
export type PostResponse = Record<'name', string>
