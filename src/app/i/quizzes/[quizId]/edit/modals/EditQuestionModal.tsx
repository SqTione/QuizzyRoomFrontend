'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { FileField } from '@/components/ui/fields/FileField'
import { Modal } from '@/components/ui/modal/Modal'
import { UseAnswerDelete } from '@/hooks/useAnswerDelete'
import { UseAnswerUpdate } from '@/hooks/useAnswerUpdate'
import { UseQuestionUpdate } from '@/hooks/useQuestionUpdate'
import { IAnswerField } from '@/types/answer.types'
import { IQuestionForm } from '@/types/question.types'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { QuestionAnswers } from '../components/QuestionAnswers'

type EditQuestionModalProps = {
	isOpen: boolean
	onClose: () => void
	questionId: string
	initialData: IQuestionForm
	initialAnswers: IAnswerField[]
}

export function EditQuestionModal({
	isOpen,
	onClose,
	questionId,
	initialData,
	initialAnswers
}: EditQuestionModalProps) {
	const [answers, setAnswers] = useState<IAnswerField[]>([])

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { isSubmitting }
	} = useForm<IQuestionForm>({
		defaultValues: initialData
	})

	const { update: updateQuestion } = UseQuestionUpdate()
	const { mutateAsync: updateAnswer } = UseAnswerUpdate()
	const { mutateAsync: deleteAnswer } = UseAnswerDelete()

  const params = useParams()
  const quizId = params.quizId as string

	useEffect(() => {
		reset(initialData)
		setAnswers(initialAnswers)
	}, [initialData, initialAnswers, reset])

	const onSubmit: SubmitHandler<IQuestionForm> = async (data) => {
		await updateQuestion(data, quizId, questionId)

		// Updating all answers
		await Promise.all(
			answers.map(answer =>
				answer.id
					? updateAnswer({quizId, questionId, answerId: answer.id, data: answer })
					: Promise.resolve()
			)
		)

		onClose()
	}

	const handleFileChange = (file: File | null) => {
		if (file) {
			setValue('imageFile', file, { shouldValidate: true })
		}
	}

	const handleAddAnswer = (answer: IAnswerField) => {
		setAnswers(prev => [...prev, answer])
	}

	const handleUpdateAnswer = (index: number, updated: IAnswerField) => {
		setAnswers(prev => {
			const copy = [...prev]
			copy[index] = updated
			return copy
		})
	}

	const handleRemoveAnswer = async (index: number) => {
		const answerToDelete = answers[index]
		if (answerToDelete?.id) {
			await deleteAnswer({quizId, questionId, answerId: answerToDelete.id })
		}
		setAnswers(prev => prev.filter((_, i) => i !== index))
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__header flex flex-col gap-5 mb-8 w-full">
					<h2>Редактирование вопроса</h2>
					<hr />
				</div>
				<div className="form__body">
					<FileField
						id="questionImage"
						label="Изображение вопроса"
						accept="image/*"
						placeholder="Перетащите или выберите изображение"
						onFileChange={handleFileChange}
					/>
					<Field
						id="name"
						label="Вопрос:"
						type="text"
						extra="mb-4"
						placeholder="Введите текст вопроса"
						{...register('name', { required: 'Поле обязательно' })}
					/>
					<QuestionAnswers
						answers={answers}
						onAddAnswer={handleAddAnswer}
						onUpdateAnswer={handleUpdateAnswer}
						onRemoveAnswer={handleRemoveAnswer}
					/>
				</div>
				<div className="form__footer mt-5">
					<Button
						className="button--success"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
					</Button>
				</div>
			</form>
		</Modal>
	)
}
