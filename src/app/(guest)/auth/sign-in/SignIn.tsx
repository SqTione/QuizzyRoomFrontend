'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Field } from '@/components/ui/fields/Field'
import { DASHBOARD_PAGES, GUEST_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { ISignInForm } from '@/types/auth.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'


export function SignIn() {
	// Getting data from form
	const {register, handleSubmit, reset} = useForm<ISignInForm>({
		mode: 'onChange'
	})

	const {push} = useRouter()

	// Sending request to server
	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data:ISignInForm) => authService.login(data),
		// On success response
		onSuccess(response) {
			toast.success('Успешный вход в аккаунт')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		// On error response
		onError: (error: any) => {
			const serverMessage = error?.response?.data?.message
			const message = typeof serverMessage === 'string'
				? translateErrorMessage(serverMessage)
				: 'Произошла ошибка при входе в аккаунт'

			toast.error(message);
  	}
	})

	// Form submit function
	const onSubmit:SubmitHandler<ISignInForm> = data => {
		mutate(data)
	}

	return (
		<main className="container flex flex-col justify-between min-h-[92vh]">
			<form className="md:mt-8 md:w-1/2 relative w-full z-20" onSubmit={handleSubmit(onSubmit)}>
				<div className='form__header mb-8 w-max'>
					<h1 className='pb-5'>Вход</h1>
					<hr className='pb-5'/>
					<p className='flex flex-col'>
						У вас нет аккаунта? 
						<Link 
							href={GUEST_PAGES.SIGN_UP}
							className='font-medium text-primary underline underline-offset-4'>Зарегистрируйтесь!</Link>
					</p>
				</div>
				<div className="form__body w-full">
					<Field 
						id='email'
						label='Email:'
						placeholder='Логин'
						type='email'
						extra='mb-4' 
						{...register('email', {
							required: 'Email является обязательным полем'
						})}/>
					<Field 
						id='password'
						label='Password:'
						placeholder='Пароль'
						type='password'
						extra='mb-4' 
						{...register('password', {
							required: 'Пароль является обязательным полем'
						})}/>
					<Checkbox id='remember' label='Запомнить меня' />
				</div>
				<div className="form__footer flex flex-col gap-3 mt-8">
					<Button type='submit' className='button--success'>Войти</Button>
					<Button className='button--bordered' href={GUEST_PAGES.SIGN_UP}>К регистрации</Button>
				</div>
			</form>
			<div id='main-bottom'>
				<div className="image-block">
					<img src="/notebook.png" alt="" className=''/>
				</div>
			</div>
		</main>
	)
}