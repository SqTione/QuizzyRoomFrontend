export interface IUserStatistics {
	id: string;
	createdAt: string;
	updatedAt: string;
	totalPassed: number;
	totalWins: number;
	userId: string;
}

export type TypeUserStatisticsResponse = IUserStatistics