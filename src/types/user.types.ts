export interface IUser {
	id: string
	name: string
	email: string
	avatarPath?: string
}

export interface IUserQuizzesResponse {
	
}

export type TypeUserForm = Omit<IUser, 'id'> & {password?: string}

export type TypeUpdateUserForm = {
	name?: string
	email?: string
	imageFile?: File
	oldPassword: string
	newPassword?: string
}