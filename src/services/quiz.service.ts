import { axiosWithAuth } from '@/api/interceptors'
import { TypeUserFavoriteQuizzesResponse, TypeUserQuizzesResponse } from '@/types/quiz.types'

class QuizService {
	private BASE_URL = '/quizzes'

	// Getting user quizzes
	async getUserQuizzes() {
		const response = await axiosWithAuth.get<TypeUserQuizzesResponse>(this.BASE_URL)
		return response.data
	}

	// Getting user favorite quizzes
	async getUserFavoriteQuizzes() {
		const response = await axiosWithAuth.get<TypeUserFavoriteQuizzesResponse>(`${this.BASE_URL}/favorite`)
		return response.data
	}
}

export const quizService = new QuizService()