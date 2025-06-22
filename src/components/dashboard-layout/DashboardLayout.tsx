import { PropsWithChildren } from 'react'
import { DashboardFooter } from './footer/DashboardFooter'
import { DashboardHeader } from './header/DashboardHeader'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<>
			<div className="w-full min-h-screen overflow-x-hidden">
					<DashboardHeader />
					{children}
			</div>
			<DashboardFooter />
		</>
	)
}