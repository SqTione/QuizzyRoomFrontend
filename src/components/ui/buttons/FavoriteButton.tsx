import { UseFavorite } from '@/hooks/useFavorite'
import { Heart } from 'lucide-react'
import { Button } from './Button'

export function FavoriteButton({
	quizId,
}: {
	quizId: string,
}) {
	const {isFavorite, addFavorite, removeFavorite} = UseFavorite()

	// Button click handler
	const handleClick = () => {
		if (isFavorite(quizId)) {
      removeFavorite.mutate(quizId);
    } else {
      addFavorite.mutate(quizId);
    }
	}

	return (
		<Button 
			className={`button--capsule ${isFavorite(quizId) ? 'button--danger' : 'button--bordered'}`}
			onClick={handleClick}
			aria-label={isFavorite(quizId) ? 'Удалить из избранного' : 'Добавить в избранное'}>
			<Heart 
        size={14}
        fill={isFavorite(quizId) ? 'currentColor' : 'none'}
      />
		</Button>
	)
}