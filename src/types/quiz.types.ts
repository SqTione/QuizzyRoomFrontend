export interface IQuiz {
	id: string
	name: string;
  description: string;
  userId: string;
}

export type TypeQuizResponse = IQuiz
export type TypeUserQuizzesResponse = IQuiz[]
export type TypeUserFavoriteQuizzesResponse = IQuiz[]

export interface IQuizForm {
	name: string
	description: string
}