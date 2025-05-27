'use client'

import { Button } from '@/components/ui/buttons/Button'
import { FavoriteButton } from '@/components/ui/buttons/FavoriteButton'
import { GoBackButton } from '@/components/ui/buttons/GoBackButton'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { UseQuizForGame } from '@/hooks/useQuizForGame'
import { useParams, useRouter } from 'next/navigation'

export function Quiz() {
	const params = useParams()
	const quizId = params.quizId as string

  const { data: quiz, isLoading } = UseQuizForGame(quizId)
  const router = useRouter()

  if (isLoading) return <div>Loading...</div>
  if (!quiz) return <div>Квиз не найден</div>

  const handleStartGame = () => {
    router.push(`${DASHBOARD_PAGES.QUIZZES}/${quizId}/game-question`)
  }

  return (
    <main className='container flex flex-col justify-between mt-8'>
      <div className="flex gap-5">
        <div className='flex flex-col gap-5 xl:w-1/3 md:w-1/2'>
          <GoBackButton />
          <hr />
          <h1>{quiz.name}</h1>
          <hr />
          <p>{quiz.description}</p>
          <Button onClick={handleStartGame}>Начать</Button>
        </div>
        <div className='flex flex-col pl-5 border-l'>
          <div className='mb-8'>
            <FavoriteButton quizId={quiz.id} />
          </div>
          <div>
            <p>Вопросы:</p>
            <h4 className="subtitle">{quiz.questions.length}</h4>
          </div>
        </div>
      </div>
      <div id='main-bottom'>
        <div className="image-block">
          <img src="/notebook.png" alt="" className=''/>
        </div>
      </div>
    </main>
  )
}