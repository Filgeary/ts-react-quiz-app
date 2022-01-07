import axios from 'axios'
import { IQuizServer } from '../models'

type QuizData = Record<string, IQuizServer>

const BASE_URL =
  'https://ts-react-quiz-app-default-rtdb.europe-west1.firebasedatabase.app'
const REQUEST_TIMEOUT = 5000

const createAPI = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  })
}

const api = createAPI()

export const getAllQuizzes = async () => {
  return await api.get<QuizData>('/quizzes.json')
}
export const getQuizById = async (id: number) => {
  return await api.get<QuizData>(`/quizzes.json?orderBy="id"&equalTo=${id}`)
}
export const postQuiz = async (quiz: IQuizServer[]) => {
  return await api.post('/quizzes.json', quiz)
}
