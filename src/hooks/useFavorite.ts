import { quizService } from '@/services/quiz.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useUserFavoriteQuizzes } from './useUserFavoriteQuizzes'

export function UseFavorite() {
	const queryClient = useQueryClient()

	const { data: favorite } = useUserFavoriteQuizzes()

	const isFavorite = (quizId: string) => {
    return favorite?.some((q: { id: string }) => q.id === quizId) || false;
  };

	// Mutation for adding quiz to favorites
	const addFavorite = useMutation({
		mutationKey: ['make-quiz-favorite'],
		mutationFn: (quizId: string) => quizService.addToFavorites(quizId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['user-favorite-quizzes'] });
			queryClient.invalidateQueries({ queryKey: ['user-quizzes'] });
			toast.success('Квиз добавлен в избранное')
		},
		onError() {
			toast.error('Не удалось добавить квиз в избранное')
		}
	})

	// Mutation for removing quiz from favorites
	const removeFavorite = useMutation({
		mutationKey: ['delete-quiz-from-favorites'],
		mutationFn: (quizId: string) => quizService.removeFromFavorites(quizId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['user-favorite-quizzes'] });
			queryClient.invalidateQueries({ queryKey: ['user-quizzes'] });
			toast.success('Квиз удален из избранного')
		},
		onError() {
			toast.error('Не удалось удалить квиз из избранного')
		}
	})

	return {
		isFavorite, 
		addFavorite, 
		removeFavorite
	}
}
