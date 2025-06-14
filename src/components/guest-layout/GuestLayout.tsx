import { PropsWithChildren } from 'react'
import { GuestFooter } from './footer/GuestFooter'
import { GuestHeader } from './header/GuestHeader'


export default function GuestLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<>
			<div className="w-full min-h-screen">
					<GuestHeader />
					{children}
			</div>
			<GuestFooter />
		</>
	)
}