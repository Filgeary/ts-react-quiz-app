import axios from 'axios'
import { IQuizPostToServer, PostResponse } from '../models'

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

export const postQuiz = async (quizList: IQuizPostToServer[]) => {
  const arr = []
  for (const quiz of quizList) {
    const res = await api.post('/quizzes.json', quiz)
    arr.push(res.data as PostResponse)
  }
  return arr
}
