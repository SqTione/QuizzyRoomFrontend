'use client'

import { Loader } from '@/components/loader/Loader'
import { Button } from '@/components/ui/buttons/Button'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { UseGameState } from '@/hooks/useGameState'
import { UseQuizForGame } from '@/hooks/useQuizForGame'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import './game-question.scss'

export default function GameQuestion() {
	const params = useParams()
	const quizId = params.quizId as string
  const { data: quiz, isLoading } = UseQuizForGame(quizId)
  const router = useRouter()
  
  if (!quiz) {
    router.push(`${DASHBOARD_PAGES.QUIZZES}/${quizId}`)
    return null
  }

  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswers,
		score,
    handleAnswerSelect,
    handleNextQuestion,
    isFinished
  } = UseGameState(quiz)

  useEffect(() => {
    if (isFinished) {
			localStorage.setItem('quizAnswers', JSON.stringify(selectedAnswers))
      router.push(`${DASHBOARD_PAGES.QUIZZES}/${quizId}/game-end`)
    }
  }, [isFinished, quizId, router])

  // Show loader while data is loading
  if (isLoading) return <Loader isLoading={isLoading} />

  const selectedAnswerId = selectedAnswers.answers.find(
    a => a.questionId === currentQuestion.id
  )?.answerId

  return (
    <main className='container flex flex-col justify-between mt-8 gap-5 min-h-[92vh]'>
      <div>
        <div className='flex flex-col gap-5 mb-5'>
          <div className='game-question__top-bar flex justify-between items-center'>
            <h4 className="subtitle">Вопрос {currentQuestionIndex + 1}/{totalQuestions}</h4>
            <div className='status-bar'></div>
          </div>
          <hr className='relative z-10' />
          <h1 className='relative !text-xl z-10'>{currentQuestion.name}</h1>
        </div>
        
        <div className={`md:flex-row-reverse md:justify-between md:mt-15 flex flex-col ${!currentQuestion.imagePath && 'md:!flex-row'}`}>
          {currentQuestion.imagePath && (
            <div className="question__image lg:w-1/3 md:aspect-video md:w-1/2 relative w-auto h-auto aspect-square bg-gray-300 rounded-xl">
              <Image 
                src={`${process.env.NEXT_PUBLIC_API_URL_NO_PREFIX}/${currentQuestion.imagePath}`} 
                alt={currentQuestion.name} 
                width={1000}
                height={1000}
                className='w-full h-full aspect-square rounded-xl'
              />
            </div>
          )}
          
          <div className="question__answers md:mt-0 flex flex-col gap-5 mt-8">
            <AnimatePresence mode='wait'>
              {currentQuestion.answers.map(answer => (
                <motion.div
                  key={answer.id}
                  initial={{opacity: 0, y: 10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 10}}
                  transition={{duration: 0.2}}
                  className={`flex items-center gap-3 mb-3 p-3 rounded-lg cursor-pointer ${
                    selectedAnswerId === answer.id ? 'bg-primary/10' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleAnswerSelect(answer.id)}
                >
                  <button
                    type="button"
                    className={`flex justify-center items-center w-6 h-6 rounded-full border-2 transition-colors ${
                      selectedAnswerId === answer.id 
                        ? 'bg-primary border-primary' 
                        : 'border-black/40'
                    }`}
                  >
                    {selectedAnswerId === answer.id && (
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
                  <p>{answer.name}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-full">
        <Button 
          className="button--success md:self-end md:w-max mb-15"
          onClick={handleNextQuestion}
          disabled={!selectedAnswerId}
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'Далее' : 'Завершить'}
        </Button>
      </div>
    </main>
  )
}