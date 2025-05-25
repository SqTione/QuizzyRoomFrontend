import { axiosWithAuth } from '@/api/interceptors'
import { IQuizForm, TypeQuizResponse, TypeUserFavoriteQuizzesResponse, TypeUserQuizzesResponse } from '@/types/quiz.types'

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

	// Adding quiz to favorites
	async addToFavorites(quizId: string) {
		const response = await axiosWithAuth.post<TypeUserFavoriteQuizzesResponse>(`${this.BASE_URL}/favorite/${quizId}`)
		return response.data
	}

	// Removing quiz from favorites
	async removeFromFavorites(quizId: string) {
		const response = await axiosWithAuth.delete<TypeUserFavoriteQuizzesResponse>(`${this.BASE_URL}/favorite/${quizId}`)
		return response.data
	}

	// Creating Quiz
	async createQuiz(data: IQuizForm) {
		const response = await axiosWithAuth.post<TypeQuizResponse>(`${this.BASE_URL}`, data)
		return response.data
	}

	// Updating Quiz
	async updateQuiz(data: IQuizForm, quizId: string) {
		const response = await axiosWithAuth.put<TypeQuizResponse>(`${this.BASE_URL}/${quizId}`, data)
		return response.data
	}

	// Deleting Quiz
	async deleteQuiz(quizId: string) {
		const response = await axiosWithAuth.delete<TypeQuizResponse>(`${this.BASE_URL}/${quizId}`)
		return response.data
	}
}

export const quizService = new QuizService()