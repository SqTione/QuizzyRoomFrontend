import { answersService } from '@/services/answers.service'
import { useQuery } from '@tanstack/react-query'

// Hook for getting all question answers
export function UseQuestionAnswers(quizId: string, questionId: string) {
	const {data, isLoading} = useQuery({
		queryKey: ['get-answers', questionId],
		queryFn: () => answersService.getAllAnswers(quizId, questionId),
		enabled: !!quizId && !!questionId
	})

	return {data, isLoading}
}