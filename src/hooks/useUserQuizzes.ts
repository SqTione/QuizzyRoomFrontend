import { quizService } from '@/services/quiz.service'
import { useQuery } from '@tanstack/react-query'

export function useUserQuizzes() {
	const {data, isLoading} = useQuery({
		queryKey: ['user-quizzes'],
		queryFn: () => quizService.getUserQuizzes()
	})

	return {data, isLoading}
}