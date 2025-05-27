import { gameService } from '@/services/game.service'
import { useQuery } from '@tanstack/react-query'

export function UseQuizForGame(quizId: string) {
	const {data, isLoading} = useQuery({
		queryKey: ['get-quiz-for-game'],
		queryFn: () => gameService.getQuizById(quizId),
		enabled: !!quizId
	})

	return {data, isLoading}
}