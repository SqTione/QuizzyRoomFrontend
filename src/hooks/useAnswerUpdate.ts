import { answersService } from '@/services/answers.service'
import { IAnswerField } from '@/types/answer.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function UseAnswerUpdate() {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['create-answer'],
		mutationFn: (
			{
				quizId, 
				questionId, 
				answerId,
				data
		}: {
			quizId: string, 
			questionId: string, 
			answerId: string
			data: IAnswerField
		}) => answersService.updateAnswer(quizId, questionId, answerId, data),
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
		...mutation
	}
}