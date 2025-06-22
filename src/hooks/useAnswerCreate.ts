import { answersService } from '@/services/answers.service'
import { IAnswerField } from '@/types/answer.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function UseAnswerCreate() {
	const queryClient = useQueryClient()

	const {mutate: createAnswerMutate, isPending: isCreating} = useMutation({
		mutationKey: ['create-answer'],
		mutationFn: (
			{
				quizId, 
				questionId, 
				data
		}: {
			quizId: string, 
			questionId: string, 
			data: IAnswerField
		}) => answersService.createAnswer(quizId, questionId, data),
		onSuccess() {
			// Show success toast
			toast.success('Ответ успешно создан')

			// Updating answers list
			queryClient.invalidateQueries({ queryKey: ['get-answers'] })
		},
		onError() {
			// Show error toast
			toast.error('Произошла ошибка при создании ответа!')
		}
	})

	return {
		mutate: createAnswerMutate,
		isPending: isCreating
	}
}