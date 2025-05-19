'use client'

import { Field } from '@/components/ui/fields/Field'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { ISignInForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'


export function SignIn() {
	const {register, handleSubmit, reset} = useForm<ISignInForm>({
		mode: 'onChange'
	})

	const {push} = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data:ISignInForm) => authService.login(data),
		onSuccess() {
			toast.success('Успешный вход в аккаунт')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	// Form submit function
	const onSubmit:SubmitHandler<ISignInForm> = data => {
		mutate(data)
	}

	return (
		<main className="container flex min-h-screen">
			<form className="" onSubmit={handleSubmit(onSubmit)}>
				<div className='form__header'>
					<h1>Вход</h1>
					<hr />
					<p>У вас нет аккаунта? <Link href='/auth/sign-up'></Link></p>
				</div>
				<div className="form__body">
					<Field 
						id='email'
						label='Email:'
						placeholder='Введите Email'
						type='email'
						extra='mb-4' 
						{...register('email', {
							required: 'Email является обязательным полем'
						})}/>
					<Field 
						id='password'
						label='Password:'
						placeholder='Введите пароль'
						type='password'
						extra='mb-4' 
						{...register('password', {
							required: 'Пароль является обязательным полем'
						})}/>
				</div>
			</form>
		</main>
	)
}