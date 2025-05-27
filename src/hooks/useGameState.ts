import { IGameAnswers, TypeGameQuiz } from '@/types/game.types'
import { useState } from 'react'

export function UseGameState(quiz: TypeGameQuiz) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<IGameAnswers>({
    quizId: quiz.id,
    answers: []
  })
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const totalQuestions = quiz.questions.length

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      answers: [
        ...prev.answers.filter(a => a.questionId !== currentQuestion.id),
        {
          questionId: currentQuestion.id,
          answerId
        }
      ]
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setIsFinished(true)
    }
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswers,
    score,
    isFinished,
    handleAnswerSelect,
    handleNextQuestion
  }
}