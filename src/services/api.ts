import axios from 'axios'
import { IQuizServer, PostResponse, QuizRecordData } from '../models'

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
  return await api.get<QuizRecordData>('/quizzes.json')
}

export const getQuizById = async (id: number) => {
  return await api.get<QuizRecordData>(
    `/quizzes.json?orderBy="id"&equalTo=${id}`,
  )
}

export const postQuiz = async (quizList: IQuizServer[]) => {
  const arr = []
  for (const quiz of quizList) {
    const res = await api.post('/quizzes.json', quiz)
    arr.push(res.data as PostResponse)
  }
  return arr
}
