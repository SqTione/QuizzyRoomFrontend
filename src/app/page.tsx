import { Metadata } from 'next'
import { Home } from './Home'

// Metadata settings
export const metadata: Metadata = {
	title: 'Главная'
}

// Rendering Home page
export default function HomePage() {
	return <Home></Home>
}
