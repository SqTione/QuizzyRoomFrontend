'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Field } from '@/components/ui/fields/Field'
import { DASHBOARD_PAGES, GUEST_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { ISignUpForm } from '@/types/auth.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function SignUp() {
	const {register, handleSubmit, reset} = useForm<ISignUpForm>({
		mode: 'onChange'
	})

	const {push} = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data:ISignUpForm) => authService.register(data),
		onSuccess() {
			toast.success('Успешная регистрация')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		onError: (error: any) => {
			const serverMessage = error?.response?.data?.message
			let messages: string[] = []

			if (Array.isArray(serverMessage)) {
				messages = serverMessage.map(msg => translateErrorMessage(msg))
			} else if (typeof serverMessage === 'string') {
				messages = [translateErrorMessage(serverMessage)]
			} else {
				messages = ['Произошла ошибка при входе']
			}

			messages.forEach(msg => toast.error(msg))
		}
	})

	// Form submit function
	const onSubmit:SubmitHandler<ISignUpForm> = data => {
		mutate(data)
	}

	return (
		<main className="container flex flex-col justify-between">
			<form 
				className="md:mt-8 md:w-1/2 relative w-full z-20" 
				onSubmit={handleSubmit(onSubmit)}>
				<div className='form__header w-max'>
					<h1 className='pb-5'>Регистрация</h1>
					<hr className='pb-5'/>
					<p className='flex flex-col'>
						Уже зарегистрированы?
						<Link 
							href={GUEST_PAGES.SIGN_IN}
							className='font-medium text-primary underline underline-offset-4'>Войдите!</Link>
					</p>
				</div>
				<div className="form__body w-full">
					<Field 
						id='name'
						label='Name:'
						placeholder='Имя'
						type='text'
						extra='mb-4' 
						{...register('name', {
							required: 'Имя является обязательным полем'
						})}/>
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
					<p className='mt-5'>
						Регистрируясь вы соглашаетесь с 
						<Link 
							href='/' 
							className='font-medium text-primary underline underline-offset-4'> пользовательским соглашением</Link>
					</p>
				</div>
				<div className="form__footer flex flex-col gap-3 mt-8">
					<Button className='button--success'>Зарегистрироваться</Button>
					<Button className='button--bordered' href={GUEST_PAGES.SIGN_IN}>К входу</Button>
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