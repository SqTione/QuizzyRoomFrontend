import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { CreateQuiz } from './CreateQuiz'

export const metadata: Metadata = {
	title: 'Создание квиза',
	...NO_INDEX_PAGE
}

export default function CreateQuizPage() {
	return (
		<CreateQuiz />
	)
}