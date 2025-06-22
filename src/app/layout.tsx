import { PageTransitionEffect } from '@/components/page-transition-effect/PageTransitionEffect'
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
			<body className={`${zen.variable} flex flex-col min-h-full overflow-x-hidden`}>
				<Providers>
					<PageTransitionEffect>
						{children}
					</PageTransitionEffect>

					<Toaster 
						theme='light'
						position='bottom-right'
						duration={1500}/>
				</Providers>
			</body>
		</html>
	)
}
