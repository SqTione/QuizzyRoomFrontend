'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { UseCheckQuiz } from '@/hooks/useCheckQuiz'
import { UseQuizForGame } from '@/hooks/useQuizForGame'
import { IGameAnswers } from '@/types/game.types'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import './game-end.scss'

export default function GameEnd() {
	const params = useParams()
  const quizId = params.quizId as string
  const { data: quiz } = UseQuizForGame(quizId)
  const router = useRouter()
  const { mutate, data: resultData, isPending } = UseCheckQuiz()

	console.log('quiz', quiz)
	console.log('stored answers', localStorage.getItem('quizAnswers'))

  useEffect(() => {
    if (!quiz) {
      router.push(`${DASHBOARD_PAGES.QUIZZES}/${quizId}`)
      return
    }

    const stored = localStorage.getItem('quizAnswers')
    if (stored) {
      try {
        const parsedAnswers: IGameAnswers = JSON.parse(stored)
        mutate(parsedAnswers)
      } catch (err) {
        console.error('Ошибка парсинга ответов из localStorage', err)
      }
    }
  }, [quiz])

  if (!quiz || isPending || !resultData) return <div>Загрузка результатов...</div>

  const totalQuestions = quiz.questions.length
  const correctAnswers = resultData.correct
  const score = Math.round((correctAnswers / totalQuestions) * 100)

  return (
    <main className="relative mt-8 min-h-[92vh]">
      <div className="container mb-8">
        <div className="winner__info flex flex-col gap-5">
          <div className='flex justify-between items-center gap-5'>
            <h4 className="subtitle">Ваш результат</h4>
            <h4 className="subtitle">Очки</h4>
          </div>
          <hr />
          <div className='flex justify-between gap-5'>
            <h1 className="text-xl">{quiz.name}</h1>
            <h2>{score}</h2>
          </div>
          <div className='flex gap-5'>
            <div>
              <p>Ответы:</p>
              <h4 className="subtitle">{correctAnswers}/{totalQuestions}</h4>
            </div>
          </div>
        </div>
      </div>
      
      <div className="leaderboard">
        <div className="container relative grid grid-cols-2 gap-5 z-10">
          <div>
            <div className="flex flex-col gap-3 mb-2">
              <h4 className='subtitle'>Лучший результат</h4>
              <hr />
              <h3>Иван Иванов</h3>
            </div>
            <div className='flex gap-8'>
              <div>
                <p>Ответы:</p>
                <h4 className='subtitle'>12/12</h4>
              </div>
              <div>
                <p>Очки:</p>
                <h4 className='subtitle'>100</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}