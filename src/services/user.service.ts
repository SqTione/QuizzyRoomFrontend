import { axiosWithAuth } from '@/api/interceptors'
import { TypeUserForm } from '@/types/user.types'

export interface IProfileResponse {
	id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  roleId: string;
  userStatistics: {
    id: string;
    createdAt: string;
    updatedAt: string;
    totalPassed: number;
    totalWins: number;
    userId: string;
  }[];
}

class UserService {
	private BASE_URL = '/user/profile'

	// Get user profile data
	async getProfile() {
		const response = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL)
		return response.data
	}

	// Updating user profile data
	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}

	// Delete user profile
	async delete(password: string) {
		const response = await axiosWithAuth.put(this.BASE_URL, password)
		return response.data
	}
}

export const userService = new UserService()