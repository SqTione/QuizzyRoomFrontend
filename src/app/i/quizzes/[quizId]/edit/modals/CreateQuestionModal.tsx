'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { FileField } from '@/components/ui/fields/FileField'
import { Modal } from '@/components/ui/modal/Modal'
import { UseAnswerCreate } from '@/hooks/useAnswerCreate'
import { UseQuestionCreate } from '@/hooks/useQuestionCreate'
import { IAnswerField } from '@/types/answer.types'
import { IQuestionForm } from '@/types/question.types'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { QuestionAnswers } from '../components/QuestionAnswers'

type TypesCreateQuestionModal = {
	isOpen: boolean
	onClose: () => void
}

export function CreateQuestionModal({
	isOpen,
	onClose
}: TypesCreateQuestionModal) {
	const params = useParams()
	const quizId = params.quizId as string

	const [answers, setAnswers] = useState<IAnswerField[]>([])

	const {
		register,
		handleSubmit,
		setValue,
		mutateAsync: createQuestionAsync,
		isPending: isCreatingQuestion
	} = UseQuestionCreate(async (question) => {
		if (!question?.id) return

		// Sending of all answers
		await Promise.all(
			answers.map(answer =>
				createAnswer({
					quizId,
					questionId: question?.id,
					data: answer
				})
			)
		)

		// Set answers and close popup
		setAnswers([])
		onClose()
	})

	const { mutate: createAnswer } = UseAnswerCreate()

	const onSubmit: SubmitHandler<IQuestionForm> = async (data) => {
		const createdQuestionResponse = await createQuestionAsync({ data, quizId })
		const createdQuestion = createdQuestionResponse.data

		if (!createdQuestion?.id) return

		await Promise.all(
			answers.map(answer =>
				createAnswer({
					quizId,
					questionId: createdQuestion.id,
					data: answer,
				})
			)
		)

		setAnswers([])
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

	const handleRemoveAnswer = (index: number) => {
		setAnswers(prev => prev.filter((_, i) => i !== index))
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__header flex flex-col gap-5 mb-8 w-full">
					<h2>Создание вопроса</h2>
					<hr />
				</div>
				<div className="form__body">
					<FileField
						id="questionImage"
						label="Изображение вопроса"
						placeholder="Перетащите или выберите изображение для вопроса"
						accept="image/*"
						onFileChange={handleFileChange}
					/>
					<Field
						id="name"
						label="Вопрос:"
						placeholder="Вопрос"
						type="text"
						extra="mb-4"
						{...register('name', {
							required: '"Вопрос" является обязательным полем',
						})}
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
						disabled={isCreatingQuestion}
					>
						{isCreatingQuestion ? 'Создание...' : 'Создать'}
					</Button>
				</div>
			</form>
		</Modal>
	)
}
