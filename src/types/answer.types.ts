export interface IAnswer {
	id: string
	name: string
	isCorrect: boolean
	questionId: string
}

export type TypeAnswerResponse = IAnswer
export type TypeAnswersResponse = {
	questionId: string,
	answers: {
		id: string
		name: string
		isCorrect: boolean
		questionId: string
	}[]
}
