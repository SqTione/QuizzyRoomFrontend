import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { EditQuiz } from './EditQuiz'

export const metadata: Metadata = {
	title: 'Редактирование квиза',
	...NO_INDEX_PAGE
}

export default function EditQuizPage() {
	return (
		<EditQuiz />
	)
}