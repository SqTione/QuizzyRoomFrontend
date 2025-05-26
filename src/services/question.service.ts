import { axiosWithAuth } from '@/api/interceptors'
import { IQuestionForm, TypeQuestionResponse, TypeQuestionsResponse } from '@/types/quetion.types'

class QuestionService {
	private BASE_URL = '/quizzes'

	// Getting all quiz questions
	async getQuizQuestions(quizId: string) {
		const response = await axiosWithAuth.get<TypeQuestionsResponse>(`${this.BASE_URL}/${quizId}/questions`)
		return response.data
	}

	// Creating question
	async createQuestion(data: FormData, quizId: string) {
  return axiosWithAuth.post(`/quizzes/${quizId}/questions`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

	// Updating question
	async updateQuestion(data: IQuestionForm, quizId: string, questionId: string) {
		const response = await axiosWithAuth.put<TypeQuestionResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}`, data)
		return response.data
	}

	// Deleting Question
	async deleteQuestion(quizId: string, questionId: string) {
		const response = await axiosWithAuth.delete<TypeQuestionResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}`)
		return response.data
	}
}

export const questionService = new QuestionService()