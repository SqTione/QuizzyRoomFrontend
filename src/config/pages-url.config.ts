// Protected routes
class DASHBOARD {
	private root = '/i'

	// TODO: Add pages for authenticated user
	HOME = `${this.root}/user/profile`
	QUIZZES = `${this.root}/quizzes`
	CREATE_QUIZ=`${this.root}/quizzes/create`
}

export const DASHBOARD_PAGES = new DASHBOARD()

// Guest routes
class GUEST {
	private root = '/'

	HOME = this.root
	SIGN_IN = `${this.root}auth/sign-in`
	SIGN_UP = `${this.root}auth/sign-up`
}

export const GUEST_PAGES = new GUEST()
