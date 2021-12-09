interface IQuizAnswer {
  title: string
  isValid: boolean
}

export interface IQuiz {
  id: number
  question: string
  answers: IQuizAnswer[]
}
