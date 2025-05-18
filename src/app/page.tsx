import { Home } from './Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Главная'
}

export default function HomePage() {
	return <Home></Home>
}
