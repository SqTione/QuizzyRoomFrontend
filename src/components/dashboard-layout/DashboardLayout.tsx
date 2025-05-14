import { Header } from './header/Header'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr] shrink-0'>
			<main>
				<Header></Header>
				{children}
			</main>
		</div>
	)
}
