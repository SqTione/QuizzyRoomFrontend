import { questionService } from '@/services/question.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

// Hook for getting all questions from quiz
export function UseQuizQuestions() {
	// Getting quiz id from Query params
	// TODO: remove getting quiz id from query params
	const params = useParams()
	const quizId = params.quizId as string

	const {data, isLoading} = useQuery({
		queryKey: ['get-questions', quizId],
		queryFn: () => questionService.getQuizQuestions(quizId)
	})

	return {data, isLoading}
}