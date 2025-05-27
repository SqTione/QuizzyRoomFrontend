import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { SignIn } from './SignIn'

export const metadata: Metadata = {
	title: 'Вход',
	...NO_INDEX_PAGE
}

export default function SignInPage() {
	return (
		<SignIn />
	)
}