import { EnumTokens } from '@/types/token.types'
import Cookies from 'js-cookie'

// Get access token
export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

// Save token in storage
export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.NEXT_PUBLIC_DOMAIN,
		sameSite: 'strict',
		expires: 1
	})
}

// Remove token from storage
export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}