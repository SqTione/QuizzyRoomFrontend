import { IUser } from './user.types'

export interface ISignInForm {
	email: string
	password: string
}

export interface ISignUpForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
