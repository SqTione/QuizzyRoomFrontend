import { axiosWithAuth } from '@/api/interceptors'
import { TypeQuestionResponse, TypeQuestionsResponse } from '@/types/question.types'

class QuestionService {
	private BASE_URL = '/quizzes'

	// Getting all quiz questions
	async getQuizQuestions(quizId: string) {
		const response = await axiosWithAuth.get<TypeQuestionsResponse>(`${this.BASE_URL}/${quizId}/questions`)
		return response.data
	}

	// Creating question
	async createQuestion(data: FormData, quizId: string) {
		return axiosWithAuth.post<TypeQuestionResponse>(`/quizzes/${quizId}/questions`, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	// Updating question
	async updateQuestion(data: FormData, quizId: string, questionId: string) {
		return axiosWithAuth.put<TypeQuestionResponse>(`/quizzes/${quizId}/questions/${questionId}`, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}

	// Deleting Question
	async deleteQuestion(quizId: string, questionId: string) {
		const response = await axiosWithAuth.delete<TypeQuestionResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}`)
		return response.data
	}
}

export const questionService = new QuestionService()