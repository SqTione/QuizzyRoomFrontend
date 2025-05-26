'use client'

import { Button } from '@/components/ui/buttons/Button'
import { UseQuizQuestions } from '@/hooks/useQuizQuestions'
import { useState } from 'react'
import { CreateQuestionModal } from './CreateQuestionModal'
import { Question } from './Question'


export function QuizQuestions() {
	const {data, isLoading} = UseQuizQuestions()
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

	return (
		<>
			<div className='mt-15'>
				<div className="w-full">
					<hr />
					<h2 className='my-5'>Вопросы</h2>
					<hr />
					<p className='mt-5'>Создавайте и редактируйте вопросы в вашем квизе</p>
					<Button 
						className='md:w-max mt-5 w-full'
						onClick={() => {setIsCreateModalOpen(true)}}>Создать вопрос</Button>
				</div>
				<div className="quiz__questions flex flex-col gap-5 mt-6">
					{ data?.questions?.length === 0 && (
						<p className='mx-auto w-1/2 text-center'>В этом квизе пока нет вопросов, но вы можете создать новый прямо сейчас.</p>
					)}

					{ data?.questions?.map(question => (
						<Question key={question.id} question={question} />
					))}
					
				</div>
			</div>
			
			{/* Modal for Creating Question */}
			<CreateQuestionModal 
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
			/>
		</>
	)
}