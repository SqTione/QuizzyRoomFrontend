export interface IGameAnswers {
	quizId: string
	answers: {
		questionId: string
		answerId: string
	}[]
}

export type TypeGameQuiz = {
	id: string,
	name: string,
	description: string,
	questions: {
		id: string,
		name: string,
		imagePath?: string,
		answers: {
			id: string
			name: string
		}[]
	}[]
}