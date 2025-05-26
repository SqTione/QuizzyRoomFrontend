import { axiosWithAuth } from '@/api/interceptors'
import { TypeAnswersResponse } from '@/types/answer.types'

class AnswersService {
	private BASE_URL = '/quizzes' 

	// Getting all question answers
	async getAllAnswers(quizId: string, questionId: string) {
		const response = await axiosWithAuth.get<TypeAnswersResponse>(`${this.BASE_URL}/${quizId}/questions/${questionId}`)
		return response.data
	}

	// Creating new answer
	async createAnswer() {}

	// Updating existing answer
	async updateAnswer() {}

	// Deleting answer
	async deleteAnswer() {}
}

export const answersService = new AnswersService()