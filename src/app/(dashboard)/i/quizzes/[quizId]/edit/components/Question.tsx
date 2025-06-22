'use client'

import { Loader } from '@/components/loader/Loader'
import { Button } from '@/components/ui/buttons/Button'
import { UseQuestionAnswers } from '@/hooks/useQuestionAnswers'
import { UseQuestionDelete } from '@/hooks/useQuestionDelete'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { EditQuestionModal } from '../modals/EditQuestionModal'

type TypeQuestionProps = {
	question: {
		id: string
		name: string,
		imagePath?: string,
	}
}

export function Question({question}: TypeQuestionProps) {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	const {mutate: deleteQuestionMutate, isPending: isDeleting} = UseQuestionDelete()

	// Getting quiz id from query params
	const params = useParams()
	const quizId = params.quizId as string

	// Getting answers
	const {data, isLoading} = UseQuestionAnswers(quizId, question.id)

	// Returning Loader if data is loading
	if (isLoading) return <Loader isLoading={isLoading} />
	
	return (
		<>
			<div className="question md:flex-row flex flex-col gap-5">
				<div className="question__image xl:w-1/2 md:aspect-square md:w-1/3 relative w-full h-full aspect-square bg-gray-300 rounded-xl">
					{question.imagePath && (
						<Image
							src={`${process.env.NEXT_PUBLIC_API_URL_NO_PREFIX}/${question.imagePath}`}
							alt={`${question.name}`}
							width={400}
							height={400}
							className="w-full h-full aspect-square rounded-xl"
						/>
					)}
					
					<div className='absolute top-2 right-2 flex flex-col gap-1'>
						<Button 
							className="button--capsule button--warning"
							onClick={() => {setIsEditModalOpen(true)}}>
							<Edit size={16} />
						</Button>
						<Button 
							className="button--capsule button--danger"
							onClick={() => {
								if (confirm('Вы уверены, что хотите удалить вопрос?')) {
									deleteQuestionMutate({quizId, questionId: question.id})
								}
							}}
							disabled={isDeleting}
						>
							<Trash size={16} />
						</Button>
					</div>
				</div>
				<div className="question__body flex justify-between w-full gap-5">
					<div className='flex flex-col gap-3 w-full'>
						<h3>{question.name}</h3>
						<hr className='w-full' />
						<div className='flex items-center w-full h-full'>
							{data?.answers?.length === 0 ? (
								<p className='self-start mt-5 mx-auto text-center'>На этот вопрос нет ответов. Пора исправить это.</p>
							): (
								<div className='md:grid-cols-2 grid grid-cols-1 gap-3 mt-5 w-full h-full'>
								{data?.answers?.map(answer => (
									<div key={answer.id}
										className={`question__answer px-2 py-1 w-full h-max font-bold text-center text-white bg-danger rounded-sm ${answer.isCorrect && 'text-white border-none bg-success'}`}
									>
										{answer?.name}
									</div>
							))}
							</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Modal for Editing Question */}
			{data && (
			<EditQuestionModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				questionId={question.id}
				initialData={{
					name: question.name,
					imageFile: undefined
				}}
				initialAnswers={data.answers.map(answer => ({
					name: answer.name,
					isCorrect: answer.isCorrect,
					id: answer.id
				}))}
			/>
		)}
		</>
	)
}