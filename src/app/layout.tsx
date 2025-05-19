import { FooterGuest } from '@/components/guest-layout/footer/FooterGuest'
import { HeaderGuest } from '@/components/guest-layout/header/HeaderGuest'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { Providers } from './providers'

const zen = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Учитесь весело вместе с QuizzyRoom!'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${zen.variable}`}>
				<Providers>
				<HeaderGuest />
				{children}
					<Toaster
						theme='light'
						position='bottom-right'
						duration={1500}
					/>
				<FooterGuest />
				</Providers>
			</body>
		</html>
	)
}
