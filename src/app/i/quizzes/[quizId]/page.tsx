import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { Quiz } from './Quiz'

export const metadata: Metadata = {
	title: 'Квиз',
	...NO_INDEX_PAGE
}

export default function QuizPage() {
	return (
		<Quiz />
	)
}