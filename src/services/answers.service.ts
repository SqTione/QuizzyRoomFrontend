import { axiosWithAuth } from '@/api/interceptors'
import { IAnswerField, TypeAnswerResponse, TypeAnswersResponse } from '@/types/answer.types'

class AnswersService {
	private BASE_URL = '/quizzes' 

	// Getting all question answers
	async getAllAnswers(quizId: string, questionId: string) {
		const response = await axiosWithAuth.get<TypeAnswersResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}`)
		return response.data
	}

	// Creating new answer
	async createAnswer(quizId: string, questionId: string, data: IAnswerField) {
		const response = await axiosWithAuth.post<TypeAnswerResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}`, data)
		return response.data
	}

	// Updating existing answer
	async updateAnswer(quizId: string, questionId: string, answerId: string,  data: IAnswerField) {
		const response = await axiosWithAuth.put<TypeAnswerResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}/${answerId}`, data)
		return response.data
	}

	// Deleting answer
	async deleteAnswer(quizId: string, questionId: string, answerId: string) {
		const response = await axiosWithAuth.delete<TypeAnswerResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}/${answerId}`)
		return response.data
	}
}

export const answersService = new AnswersService()