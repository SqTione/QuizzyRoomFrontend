'use client'

import { Button } from '@/components/ui/buttons/Button'
import { UseQuestionDelete } from '@/hooks/useQuestionDelete'
import { Edit, Trash } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

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

	return (
		<>
			<div className="question md:flex-row flex flex-col gap-5">
				<div className="question__image xl:w-1/5 lg:w-1/4 md:aspect-square md:w-1/3 relative w-full h-auto aspect-video bg-gray-300 rounded-xl">
					{question.imagePath && (
						<img src={`http://localhost:3001/${question.imagePath}`} alt="" className='w-fit h-fit rounded-xl'/>
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
				<div className="question__body flex justify-between gap-5">
					<div className='flex flex-col gap-3'>
						<h3>{question.name}</h3>
						<hr className='w-full' />
					</div>
				</div>
			</div>

			{/* Modal for Editing Question */}
			{/* <EditQuestionModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				defaultValues={question}
				onSave={(values) => {
					updateQuestion(selectedQuestion.id, values)
				}}
			/> */}
		</>
	)
}