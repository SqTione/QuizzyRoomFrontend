'use client'

import { Button } from '@/components/ui/buttons/Button'
import { IAnswerField } from '@/types/answer.types'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Trash } from 'lucide-react'

type QuestionAnswersProps = {
	answers: IAnswerField[]
	onAddAnswer: (answer: IAnswerField) => void
	onUpdateAnswer: (index: number, updated: IAnswerField) => void
	onRemoveAnswer: (index: number) => void
}

export function QuestionAnswers({
	answers,
	onAddAnswer,
	onUpdateAnswer,
	onRemoveAnswer
}: QuestionAnswersProps) {
	// Adding new answer
	const handleAddAnswer = () => {
		onAddAnswer({ name: '', isCorrect: false })
	}

	// Updating text
	const handleTextChange = (index: number, name: string) => {
		const updated = { ...answers[index], name }
		onUpdateAnswer(index, updated)
	}

	// Checkmark handler
	const handleMarkCorrect = (index: number) => {
		answers.forEach((answer, i) => {
			const updated = {
				...answer,
				isCorrect: i === index
			}
			onUpdateAnswer(i, updated)
		})
	}

	return (
		<div className="mt-8">
			<div className="flex flex-col gap-5 mb-6">
				<h3 className="text-lg font-semibold">Варианты ответов</h3>
				<hr />
				<Button type="button" className="button--bordered w-max" onClick={handleAddAnswer}>
					Добавить ответ
				</Button>
			</div>

			<AnimatePresence mode='wait'>
				{answers.map((answer, index) => (
					<motion.div 
						key={index} 
						initial={{opacity: 0, y: 10}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: 10}}
						transition={{duration: 0.2}}
						className="flex items-center gap-3 mb-3">
						<button
							type="button"
							onClick={() => handleMarkCorrect(index)}
							className={`flex justify-center items-center w-6 h-6 rounded-full border-2 border-black/40 transition-color ${
								answer.isCorrect && 'bg-success border-none'
							}`}
							title="Отметить как правильный"
						> 
							{answer.isCorrect && (
								<motion.div
									initial={{opacity: 0, y: 5}}
									animate={{opacity: 1, y: 0}}
									exit={{opacity: 0, y: 5}}
									transition={{duration: 0.3}}
								>
									<Check color="white" size={16} />
								</motion.div>
							)}
						</button>
						<input
							type="text"
							value={answer.name}
							onChange={(e) => handleTextChange(index, e.target.value)}
							placeholder="Ответ"
							className="flex-1 px-3 py-2 border-b-1 outline-none"
						/>
						<Button
							type="button"
							className="button--capsule button--danger"
							onClick={() => onRemoveAnswer(index)}
						>
							<Trash color='white' size={16} />
						</Button>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}
