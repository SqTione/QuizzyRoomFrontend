import { axiosWithAuth } from '@/api/interceptors'
import { IGameAnswers, TypeGameQuiz } from '@/types/game.types'

class GameService {
	private BASE_URL = '/quizzes'

	// Getting quiz with questions and answers
	async getQuizById(quizId: string) {
		const response = await axiosWithAuth.get<TypeGameQuiz>(`${this.BASE_URL}/${quizId}`)
		return response.data
	}

	// Checking quiz validity
	async checkQuiz(data: IGameAnswers) {
		const response = await axiosWithAuth.post(`${this.BASE_URL}/${data.quizId}/submit`, data)
		return response.data
	}
}

export const gameService = new GameService()