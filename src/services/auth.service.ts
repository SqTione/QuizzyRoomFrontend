import { axiosClassic } from '@/api/interceptors'
import { IAuthResponse, IRegisterForm, ISignInForm } from '@/types/auth.types'
import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	// Login function
	async login(data: ISignInForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login',
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	// Register function
	async register(data: IRegisterForm) {
		const response = await axiosClassic.post<IAuthResponse>(
				'auth/register',
				data
		)

		return response
	},

	// Function for getting new tokens
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	// Logout function
	async logout() {
		const response = await axiosClassic.post<boolean>('auth/logout')

		if (response.data) removeFromStorage
	}
}