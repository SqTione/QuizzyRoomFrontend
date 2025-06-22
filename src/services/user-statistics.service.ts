import { axiosWithAuth } from '@/api/interceptors'
import { IUserStatistics, TypeUserStatisticsResponse } from '@/types/user-statistics.types'

class UserStatisticsService {
	private BASE_URL = '/user/profile/statistics'

	// Update user statistics
	async updateStatistics(data: IUserStatistics) {
		const response = await axiosWithAuth.put<TypeUserStatisticsResponse>(this.BASE_URL)
		return response.data
	}
}