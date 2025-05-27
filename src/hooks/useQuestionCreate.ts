import { questionService } from '@/services/question.service'
import { IQuestionForm } from '@/types/question.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function UseQuestionCreate(onSuccessCallback?: (question: any) => void) {
	const { register, handleSubmit, reset, setValue } = useForm<IQuestionForm>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: ['create-question'],
		mutationFn: ({ data, quizId }: { data: IQuestionForm, quizId: string }) => {
			const formData = new FormData()
			formData.append('name', data.name)

			if (data.imageFile) {
				formData.append('image', data.imageFile)
			}

			return questionService.createQuestion(formData, quizId)
		},
		onSuccess(question) {
			toast.success('Вопрос успешно создан')
			queryClient.invalidateQueries({ queryKey: ['get-questions'] })
			reset()
			if (onSuccessCallback) onSuccessCallback(question)
		},
		onError(error: any) {
			const serverMessage = error?.response?.data?.message
			const message =
				typeof serverMessage === 'string'
					? translateErrorMessage(serverMessage)
					: 'Произошла ошибка при создании вопроса'
			toast.error(message)
		}
	})

	return {
		...mutation,
		register,
		handleSubmit,
		setValue,
		reset,
	}
}