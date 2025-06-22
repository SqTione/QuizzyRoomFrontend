'use client'

import { Loader } from '@/components/loader/Loader'
import { Button } from '@/components/ui/buttons/Button'
import { UseQuizQuestions } from '@/hooks/useQuizQuestions'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CreateQuestionModal } from '../modals/CreateQuestionModal'
import { Question } from './Question'


export function QuizQuestions() {
	const {data, isLoading} = UseQuizQuestions()
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

	if (isLoading) return <Loader isLoading={isLoading} />

	return (
		<>
			<div className='my-15 w-full'>
				<div className="lg:w-1/2 w-full">
					<hr />
					<h2 className='my-5'>Вопросы</h2>
					<hr />
					<p className='mt-5'>Создавайте и редактируйте вопросы в вашем квизе</p>
					<Button 
						className='md:w-max mt-5 w-full'
						onClick={() => {setIsCreateModalOpen(true)}}>Создать вопрос</Button>
				</div>
				<div className="quiz__questions xl:grid-cols-2 grid grid-cols-1 gap-5 mt-6 w-full">
					{ data?.questions?.length === 0 && (
						<p className='mx-auto w-1/2 text-center'>В этом квизе пока нет вопросов, но вы можете создать новый прямо сейчас.</p>
					)}
					
					<AnimatePresence mode='wait'>
						{ data?.questions?.map(question => (
							<motion.div
								key={question.id}
								initial={{opacity: 0, y: 10}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: 10}}
								transition={{duration: 0.2}}
							>
								<Question key={question.id} question={question} />
							</motion.div>
						))}
					</AnimatePresence>
					
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