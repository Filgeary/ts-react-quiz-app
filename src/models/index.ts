export interface IQuizAnswer {
  id: number
  title: string
}

export interface IQuiz {
  id: number
  question: string
  correctAnswerID: number
  answers: IQuizAnswer[]
}
