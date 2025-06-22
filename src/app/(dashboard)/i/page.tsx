import { Metadata } from 'next'
import { Profile } from './user/profile/Profile'

export const metadata: Metadata = {
	title: 'Профиль'
}

export default function DashboardPage() {
	return <Profile/>
}
