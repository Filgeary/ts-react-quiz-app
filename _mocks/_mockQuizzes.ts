import { IQuiz } from '../src/models'

export const _mockQuizzes: IQuiz[] = [
  {
    hashKey: 'hash-1',
    id: 1,
    question: 'Mock Question 1',
    correctAnswerID: 1.1,
    answers: [
      { id: 1.1, title: 'answer 1.1' },
      { id: 1.2, title: 'answer 1.2' },
      { id: 1.3, title: 'answer 1.3' },
      { id: 1.4, title: 'answer 1.4' },
    ],
  },
  {
    hashKey: 'hash-2',
    id: 2,
    question: 'Mock Question 2',
    correctAnswerID: 2.2,
    answers: [
      { id: 2.1, title: 'answer 2.1' },
      { id: 2.2, title: 'answer 2.2' },
      { id: 2.3, title: 'answer 2.3' },
      { id: 2.4, title: 'answer 2.4' },
    ],
  },
  {
    hashKey: 'hash-3',
    id: 3,
    question: 'Mock Question 3',
    correctAnswerID: 3.3,
    answers: [
      { id: 3.1, title: 'answer 3.1' },
      { id: 3.2, title: 'answer 3.2' },
      { id: 3.3, title: 'answer 3.3' },
      { id: 3.4, title: 'answer 3.4' },
    ],
  },
]
