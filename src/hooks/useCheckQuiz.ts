import { gameService } from '@/services/game.service'
import { IGameAnswers } from '@/types/game.types'
import { useMutation } from '@tanstack/react-query'

export function UseCheckQuiz() {
	return useMutation({
    mutationKey: ['check-quiz'],
    mutationFn: (data: IGameAnswers) => gameService.checkQuiz(data)
  })
}