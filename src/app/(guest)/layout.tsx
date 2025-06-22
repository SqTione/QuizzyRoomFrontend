import GuestLayout from '@/components/guest-layout/GuestLayout'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <GuestLayout>{children}</GuestLayout>
}