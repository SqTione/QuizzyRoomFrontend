import { IUser } from './user.types'

export interface ISignInForm {
	email: string
	password: string
}

export interface IRegisterForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
