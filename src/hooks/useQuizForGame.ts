import { gameService } from '@/services/game.service'
import { useQuery } from '@tanstack/react-query'

export function UseQuizForGame(quizId: string) {
	const {data, isLoading} = useQuery({
		queryKey: ['get-quiz-for-game', quizId],
		queryFn: () => gameService.getQuizById(quizId),
		enabled: !!quizId,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		staleTime: 5 * 60_000
	})

	return {data, isLoading}
}