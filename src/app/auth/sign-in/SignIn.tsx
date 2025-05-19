'use client'

import { Button } from '@/components/ui/buttons/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Field } from '@/components/ui/fields/Field'
import { DASHBOARD_PAGES, GUEST_PAGES } from '@/config/pages-url.config'
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
					<Button className='button--success'>Войти</Button>
					<Button className='button--bordered' href={GUEST_PAGES.SIGN_UP}>К регистрации</Button>
				</div>
			</form>
			<div className="2xl:-bottom-40 xl:-bottom-1/4 md:-bottom-20 absolute bottom-0 flex justify-center items-end w-full z-0">
				<img src={'/notebook.png'} alt="" className='2xl:!w-[700px] lg:!w-[550px] lg:-translate-y-1/4 md:!w-[450px] md:-translate-y-1/3 md:left-1/5 relative bottom-0 right-5 z-10'/>
				<div className="2xl:h-[400px] md:h-[350px] md:rotate-[-11deg] absolute -left-1/2 w-[200%] h-[175px] bg-primary"></div>
			</div>
		</main>
	)
}