import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import GameQuestion from './GameQuestion'

export const metadata: Metadata = {
	title: 'Вопрос',
	...NO_INDEX_PAGE
}

export default function EditQuizPage() {
	return (
		<GameQuestion />
	)
}