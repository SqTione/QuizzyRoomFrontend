import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import { SignUp } from './SignUp'

export const metadata: Metadata = {
	title: 'Регистрация',
	...NO_INDEX_PAGE
}

export default function SignInPage() {
	return (
		<SignUp />
	)
}