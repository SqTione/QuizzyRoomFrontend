'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { FileField } from '@/components/ui/fields/FileField'
import { Modal } from '@/components/ui/modal/Modal'
import { userService } from '@/services/user.service'
import { IUser, TypeUpdateUserForm } from '@/types/user.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

type EditQuestionModalProps = {
	isOpen: boolean
	onClose: () => void
	initialData?: IUser
}

export function UpdateProfileModal({
	isOpen,
	onClose,
	initialData
}: EditQuestionModalProps) {
	// Getting data from form
	const {
		register, 
		handleSubmit, 
		reset, 
		setValue} = useForm<TypeUpdateUserForm>({
		mode: 'onChange'
	})

	// Getting Query Client
	const queryClient = useQueryClient()

	// Mutation for profile updating
	const {mutate} = useMutation({
		mutationKey: ['profile'],
		mutationFn: (data: TypeUpdateUserForm) => {
			const formData = new FormData()
			
			// Getting data from form
			data.name && formData.append('name', data.name)
			data.email && formData.append('email', data.email)
			data.newPassword && formData.append('newPassword', data.newPassword)
			data.imageFile && formData.append('image', data.imageFile)
			formData.append('oldPassword', data.oldPassword)

			return userService.update(formData)
		},
		// On success response 
		onSuccess() {
			toast.success('Успешное обновление профиля')
			reset()

			// Updating profile data on page
			queryClient.invalidateQueries({queryKey: ['profile']})
		},
		onError: (error: any) => {
			const serverMessage = error?.response?.data?.message
				const message = typeof serverMessage === 'string'
					? translateErrorMessage(serverMessage)
					: 'Произошла ошибка при обновлении профиля'
			
			toast.error(message);
			console.log(serverMessage)
		}
	})

	const handleFileChange = (file: File | null) => {
		if (file) {
			setValue('imageFile', file, { shouldValidate: true })
		}
	}

	const onSubmit: SubmitHandler<TypeUpdateUserForm> = data => {
		mutate(data)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}> 
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__header flex flex-col gap-5 mb-8 w-full">
					<h2>Обновление профиля</h2>
					<hr />
				</div>
				<div className="form__body">
					<Field
						id="name"
						label="Имя:"
						placeholder={initialData?.name || ''}
						autocomplete='off'
						type="text"
						extra="mb-4"
						{...register('name')}
					/>
					<Field
						id="email"
						label="Email:"
						placeholder={initialData?.email || ''}
						autocomplete='off'
						type="text"
						extra="mb-4"
						{...register('email')}
					/>
					<FileField
						id="avatarImage"
						label="Фото профиля"
						placeholder="Перетащите или выберите изображение для вопроса"
						accept="image/*"
						onFileChange={handleFileChange}
					/>
					<Field
						id="oldPassword"
						label="Пароль(обязательно):"
						placeholder='Пароль (обязательно)'
						autocomplete='off'
						type="password"
						extra="mb-4"
						{...register('oldPassword', {
							required: 'Пароль является обязательным полем'
						})}
					/>
					<Field
						id="newPassword"
						label="Новый пароль:"
						placeholder={'Новый пароль'}
						autocomplete='off'
						type="password"
						extra="mb-4"
						{...register('newPassword')}
					/>
				</div>
				<div className="form__footer mt-5">
					<Button
						className="button--success"
						type="submit"
					>
						Обновить
					</Button>
				</div>
			</form>
		</Modal> 
	)
}