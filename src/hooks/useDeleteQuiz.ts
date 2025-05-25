import { quizService } from '@/services/quiz.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function UseDeleteQuiz() {
	const queryClient = useQueryClient()

	const {mutate: deleteQuizMutate, isPending: isDeleting} = useMutation({
		mutationKey: ['delete-quiz'],
		mutationFn: (quizId: string) => quizService.deleteQuiz(quizId),
		onSuccess() {
			// Show success toast
			toast.success('Квиз удалён')

			// Updating quizzes list
			queryClient.invalidateQueries({ queryKey: ['user-quizzes'] })
			queryClient.invalidateQueries({ queryKey: ['user-favorite-quizzes'] })
		},
		onError() {
			toast.error('Произошла ошибка при удалении квиза!')
		}
	})

	return {
		mutate: deleteQuizMutate, 
		isPending: isDeleting
	}
}