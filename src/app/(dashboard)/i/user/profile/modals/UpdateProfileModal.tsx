'use client'

import { useProfile } from '@/hooks/useProfile'
import { IUser } from '@/types/user.types'

type EditQuestionModalProps = {
	isOpen: boolean
	onClose: () => void
	initialData: IUser
}

export function UpdateProfileModal({
	isOpen,
	onClose,
}: EditQuestionModalProps) {
	const {data, isLoading} = useProfile()

	return (
		<>
			{data?.name}
			{data?.avatarPath}
		</>
	)
}