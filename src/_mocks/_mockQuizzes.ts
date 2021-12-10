import { IQuiz } from '../models'

export const _mockQuizzes: IQuiz[] = [
  {
    id: 1,
    question: 'Mock Question 1',
    answers: [
      { title: 'option1', isValid: true },
      { title: 'option2', isValid: false },
      { title: 'option3', isValid: false },
      { title: 'option4', isValid: false },
    ],
  },
  {
    id: 2,
    question: 'Mock Question 2',
    answers: [
      { title: 'option1', isValid: false },
      { title: 'option2', isValid: true },
      { title: 'option3', isValid: false },
      { title: 'option4', isValid: false },
    ],
  },
  {
    id: 3,
    question: 'Mock Question 3',
    answers: [
      { title: 'option1', isValid: false },
      { title: 'option2', isValid: false },
      { title: 'option3', isValid: true },
      { title: 'option4', isValid: false },
    ],
  },
]
