import { questionService } from '@/services/question.service'
import { IQuestionForm } from '@/types/question.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function UseQuestionUpdate(onSuccessCallback?: (question: any) => void) {
	const { register, handleSubmit, reset, setValue } = useForm<IQuestionForm>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['update-question'],
		mutationFn: ({ 
			data, 
			quizId, 
			questionId 
		}: { 
			data: IQuestionForm, 
			quizId: string, 
			questionId: string
		}) => {
			const formData = new FormData()
			formData.append('name', data.name)

			if (data.imageFile) {
				formData.append('image', data.imageFile)
			}

			return questionService.updateQuestion(formData, quizId, questionId)
		},
		onSuccess(question) {
			toast.success('Вопрос успешно обновлён')
			queryClient.invalidateQueries({ queryKey: ['get-questions'] })
			reset()
			if (onSuccessCallback) onSuccessCallback(question)
		},
		onError(error: any) {
			const serverMessage = error?.response?.data?.message
			const message =
				typeof serverMessage === 'string'
					? translateErrorMessage(serverMessage)
					: 'Произошла ошибка при обновлении вопроса'
			toast.error(message)
		}
	})

	const update = (data: IQuestionForm, quizId: string, questionId: string) =>
		mutation.mutateAsync({ data, quizId, questionId })

	return {
		...mutation,
		update,
		register,
		handleSubmit,
		setValue,
		reset,
	}
}