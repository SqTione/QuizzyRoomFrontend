import { questionService } from '@/services/question.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

// Hook for deleting quiz question
export function UseQuestionDelete() {
	const queryClient = useQueryClient()

	const {mutate: deleteQuestionMutate, isPending: isDeleting} = useMutation({
		mutationKey: ['delete-question'],
		mutationFn: ({quizId, questionId}: {quizId: string, questionId: string}) => 
			questionService.deleteQuestion(quizId, questionId),
		onSuccess() {
			// Show success toast
			toast.success('Вопрос успешно удалён')

			// Updating questions list
			queryClient.invalidateQueries({ queryKey: ['get-questions'] })
		},
		onError() {
			// Show error toast
			toast.error('Произошла ошибка при удалении вопроса!')
		}
	})

	return {
		mutate: deleteQuestionMutate,
		isPending: isDeleting
	}
}