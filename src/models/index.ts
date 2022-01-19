export interface IQuizAnswer {
  id: number
  title: string
}

export interface IQuizPostToServer {
  id: number
  question: string
  correctAnswerID: number
  answers: IQuizAnswer[]
}

export interface IQuiz extends IQuizPostToServer {
  hashKey: string
}

export type QuizRecordData = Record<string, IQuizPostToServer>
export type PostResponse = Record<'name', string>
