import axios from 'axios'
import { IQuiz } from '../models'

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

// TODO: add Adapter & returned Types
export const getAllQuizzes = async () => {
  return await api.get('/quizzes.json')
}
export const getQuizById = async (id: number) => {
  return await api.get(`/quizzes.json?orderBy="id"&equalTo=${id}`)
}
export const postQuiz = async (quiz: IQuiz | IQuiz[]) => {
  return await api.post('/quizzes.json', quiz)
}
