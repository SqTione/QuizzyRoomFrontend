export interface IQuestion {
	id: string
	name: string
	imagePath?: string
	quizId: string
}

export type TypeQuestionResponse = IQuestion
export type TypeQuestionsResponse = {
	quizId: string
	questions: {
		id: string,
		name: string,
		imagePath?: string
	}[]
}

export interface IQuestionForm {
	name: string
	imageFile?: File
}