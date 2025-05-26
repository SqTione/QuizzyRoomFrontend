'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Edit, Trash } from 'lucide-react'
import { useState } from 'react'

type TypeQuestionProps = {
	question: {
		name: string,
		imagePath?: string,
	}
}

export function Question({question}: TypeQuestionProps) {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	console.log(question)

	return (
		<>
			<div className="question md:flex-row flex flex-col gap-5">
				<div className="question__image xl:w-1/5 lg:w-1/4 md:aspect-square md:w-1/3 relative w-full h-auto aspect-video bg-gray-300 rounded-xl">
					{question.imagePath && (
						<img src={`http://localhost:3001/${question.imagePath}`} alt="" className='w-fit h-fit'/>
					)}
					
					<div className='absolute top-2 right-2 flex flex-col gap-1'>
						<Button 
							className="button--capsule button--warning"
							onClick={() => {setIsEditModalOpen(true)}}>
							<Edit size={16} />
						</Button>
						<Button className="button--capsule button--danger">
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