export interface IQuiz {
	id: string
	name: string;
  description: string;
  userId: string;
}

export type TypeUserQuizzesResponse = IQuiz[]
export type TypeUserFavoriteQuizzesResponse = IQuiz[]