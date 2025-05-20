import { quizService } from '@/services/quiz.service'
import { useQuery } from '@tanstack/react-query'

export function useUserFavoriteQuizzes() {
	const {data, isLoading} = useQuery({
		queryKey: ['user-favorite-quizzes'],
		queryFn: () => quizService.getUserFavoriteQuizzes()
	})

	return {data, isLoading}
}