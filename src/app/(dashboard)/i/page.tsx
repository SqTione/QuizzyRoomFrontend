import { Metadata } from 'next'
import { Profile } from './user/profile/Profile'

export const metadata: Metadata = {
	title: 'Главная'
}

export default function HomePage() {
	return <Profile/>
}
