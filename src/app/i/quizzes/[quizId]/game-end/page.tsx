import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { GameEnd } from './GameEnd'

export const metadata: Metadata = {
	title: 'Результаты',
	...NO_INDEX_PAGE
}

export default function GameEndPage() {
	return (
		<GameEnd />
	)
}