import { useProfile } from './useProfile'
import { useUserFavoriteQuizzes } from './useUserFavoriteQuizzes'
import { useUserQuizzes } from './useUserQuizzes'

// Hook for uniting all user profile data
export function UseProfilePageData() {
	const profile = useProfile()
	const userQuizzes = useUserQuizzes()
	const userFavoriteQuizzes = useUserFavoriteQuizzes()

	return {
		profile,
		userQuizzes,
		userFavoriteQuizzes,
		isLoading: profile.isLoading || userQuizzes.isLoading || userFavoriteQuizzes.isLoading
	}
}