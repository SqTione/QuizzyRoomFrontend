'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { FileField } from '@/components/ui/fields/FileField'
import { Modal } from '@/components/ui/modal/Modal'
import { questionService } from '@/services/question.service'
import { IQuestionForm } from '@/types/question.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

type TypesCreateQuestionModal = {
	isOpen: boolean,
	onClose: () => void
}

export function CreateQuestionModal({
	isOpen,
	onClose
}: TypesCreateQuestionModal) {
	// Getting quiz id from query params
	const params = useParams()
	const quizId = params.quizId as string

	const {register, handleSubmit, reset, setValue, watch} = useForm<IQuestionForm>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const {mutate} = useMutation({
		mutationKey: ['create-question'],
		mutationFn: (data: IQuestionForm) => {
			const formData = new FormData()
			formData.append('name', data.name)

			if (data.imageFile) {
				formData.append('image', data.imageFile)
		  }

  		return questionService.createQuestion(formData, quizId)
		},
		onSuccess() {
			// Show success toast
			toast.success('Вопрос успешно создан')

			// Resetting form
			reset()

			// Closing popup and updating questions list
			queryClient.invalidateQueries({ queryKey: ['get-questions'] })
		},
		onError(error: any) {
			// Translating server error to Russian language
			const serverMessage = error?.response?.data?.message
				const message = typeof serverMessage === 'string'
					? translateErrorMessage(serverMessage)
					: 'Произошла ошибка при создании вопроса'
			
			toast.error(message);
		}
	})

	const onSubmit:SubmitHandler<IQuestionForm> = data => {
		mutate(data)
	}
	
	const handleFileChange = (file: File | null) => {
		if (file) {
			setValue('imageFile', file, { shouldValidate: true })
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__header flex flex-col gap-5 mb-8 w-full">
					<h2>Создание квиза</h2>
					<hr />
				</div>
				<div className="form__body">
					<FileField
						id="questionImage"
						label="Изображение вопроса"
						placeholder='Перетащите или выберите изображение для вопроса'
						accept="image/*"
						onFileChange={handleFileChange}
					/>
					<Field
						id='name'
						label='Вопрос:'
						placeholder='Вопрос'
						type='text'
						extra='mb-4'
						{...register('name', {
							required: '"Вопрос" является обязательным полем'
						})} 
					/>
				</div>
				<div className="form__footer">
					<Button className="button--success" type="submit">Создать</Button>
				</div>
			</form>
		</Modal>
	)
}