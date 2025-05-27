import { answersService } from '@/services/answers.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function UseAnswerDelete() {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['delete-answer'],
		mutationFn: ({quizId, questionId, answerId}: {quizId: string, questionId: string, answerId: string}) =>
			answersService.deleteAnswer(quizId, questionId, answerId),
		onSuccess() {
			// Show success toast
			toast.success('Вопрос удалён')

			// Updating answers list
			queryClient.invalidateQueries({ queryKey: ['get-answers'] })
		},
		onError(error: any) {
			toast.error(`Произошла ошибка при удалении вопроса! ${error}`)
		}
	})

	return {
		...mutation
	}
}