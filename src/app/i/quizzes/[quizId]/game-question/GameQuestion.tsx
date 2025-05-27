'use client'

import { Button } from '@/components/ui/buttons/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './game-question.scss'

export function GameQuestion() {
	return (
		<main className='container flex flex-col justify-between mt-8 min-h-[92vh]'>
			<div>
				{/* Question Header */}
				<div className='flex flex-col gap-5 mb-5'>
					<div className='game-question__top-bar flex justify-between items-center'>
						<h4 className="subtitle">Вопрос 1/12</h4>
						<div className='status-bar'></div>
					</div>
					<hr className='relative z-10' />
					<h1 className='relative !text-xl z-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
				</div>
				{/* Question Body */}
				<div className='md:flex-row-reverse md:justify-between md:mt-15 flex flex-col'>
					<div className="question__image md:aspect-video md:w-1/2 relative w-full h-full aspect-video bg-gray-300 rounded-xl">
						{/* {question.imagePath && (
							<img src={`http://localhost:3001/${question.imagePath}`} alt="" className='w-full rounded-xl'/>
						)} */}
					</div>
					<div className="question__answers md:mt-0 flex flex-col gap-5 mt-8">
						<AnimatePresence mode='wait'>
							<motion.div
								initial={{opacity: 0, y: 10}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: 10}}
								transition={{duration: 0.2}}
								className="flex items-center gap-3 mb-3">
								<button
									type="button"
									className={`flex justify-center items-center w-6 h-6 rounded-full border-2 border-black/40 transition-color`}
									title="Отметить как правильный"
								>
									<motion.div
										initial={{opacity: 0, y: 5}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, y: 5}}
										transition={{duration: 0.3}}
									>
										<Check color="white" size={16} />
									</motion.div>
								</button>
								<p>Ответ</p>
							</motion.div>
							<motion.div
								initial={{opacity: 0, y: 10}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: 10}}
								transition={{duration: 0.2}}
								className="flex items-center gap-3 mb-3">
								<button
									type="button"
									className={`flex justify-center items-center w-6 h-6 rounded-full border-2 border-black/40 transition-color`}
									title="Отметить как правильный"
								>
									<motion.div
										initial={{opacity: 0, y: 5}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, y: 5}}
										transition={{duration: 0.3}}
									>
										<Check color="white" size={16} />
									</motion.div>
								</button>
								<p>Ответ</p>
							</motion.div>
							<motion.div
								initial={{opacity: 0, y: 10}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: 10}}
								transition={{duration: 0.2}}
								className="flex items-center gap-3 mb-3">
								<button
									type="button"
									className={`flex justify-center items-center w-6 h-6 rounded-full border-2 border-black/40 transition-color`}
									title="Отметить как правильный"
								>
									<motion.div
										initial={{opacity: 0, y: 5}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, y: 5}}
										transition={{duration: 0.3}}
									>
										<Check color="white" size={16} />
									</motion.div>
								</button>
								<p>Ответ</p>
							</motion.div>
							<motion.div
								initial={{opacity: 0, y: 10}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: 10}}
								transition={{duration: 0.2}}
								className="flex items-center gap-3 mb-3">
								<button
									type="button"
									className={`flex justify-center items-center w-6 h-6 rounded-full border-2 border-black/40 transition-color`}
									title="Отметить как правильный"
								>
									<motion.div
										initial={{opacity: 0, y: 5}}
										animate={{opacity: 1, y: 0}}
										exit={{opacity: 0, y: 5}}
										transition={{duration: 0.3}}
									>
										<Check color="white" size={16} />
									</motion.div>
								</button>
								<p>Ответ</p>
							</motion.div>
					</AnimatePresence>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<Button className="button--success md:self-end md:w-max mb-15">Далее</Button>
			</div>
		</main>
	)
}