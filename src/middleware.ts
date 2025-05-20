import { DASHBOARD_PAGES, GUEST_PAGES } from '@/config/pages-url.config'
import { EnumTokens } from '@/types/token.types'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(
	request: NextRequest,
	response: NextResponse
) {
	// Getting url and cookies from request
	const {url, cookies} = request

	// Getting refresh token from cookies
	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isDashboardPage = url.includes('/i')
	const isAuthPage = url.includes('/auth')

	// Redirect authenticated user when trying to access auth pages to profile
	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	}

	// Redirect unauthenticated user when trying to access protected pages
	if (!refreshToken) {
		return NextResponse.redirect(new URL(GUEST_PAGES.SIGN_IN, request.url))
	}

	return NextResponse.next()

	console.log(url, cookies)
}

export const config = {
	matcher: ['/i/:path*', '/auth/:path']
}