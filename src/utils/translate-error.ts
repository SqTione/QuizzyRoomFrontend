export function translateErrorMessage(message: string): string {
	switch (message.toLowerCase()) {
		// Sign In Errors
		case 'email or password is invalid':
			return 'Неверный логин или пароль.'

		// Sign Up Errors
		case 'user is already exists':
			return 'Пользователь с таким Email уже существует.'
		case 'name should not be empty':
			return 'Поле "Имя" обязательно для заполнения'
		case 'email should not be empty':
			return 'Поле "Email" обязательно для заполнения'
		case 'email must be email':
			return 'Поле "Email" должно быть в формате электронной почты'
		case 'password should not be empty.':
			return 'Поле "Пароль" обязательно для заполнения'
		case 'password must include at least 1 number.':
			return 'Пароль должен содержать хотя бы 1 цифру'
		case 'password must include at least 1 number.':
			return 'Пароль должен содержать хотя бы 1 цифру'
		case 'password must include at least 1 lowercase character.':
			return 'Пароль должен содержать хотя бы 1 символ в нижнем регистре'
		case 'password must include at least 1 uppercase character.':
			return 'Пароль должен содержать хотя бы 1 символ в верхнем регистре'
		case 'password must include at least special character.':
			return 'Пароль должен содержать хотя бы 1 специальный символ'
		case 'password must be at least 6 characters long.':
			return 'Пароль должен содержать хотя бы 6 символов'

		// Update profile errors
		case 'oldpassword must be a string':
			return 'Поле "Пароль" обязательно для заполнения'
		case 'invalid password':
			return 'Неверный пароль'

		default:
			return 'Произошла непредвиденная ошибка. Попробуйте позже'
	}
	
}