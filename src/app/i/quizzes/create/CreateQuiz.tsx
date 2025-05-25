'use client'
import { Button } from '@/components/ui/buttons/Button'
import { GoBackButton } from '@/components/ui/buttons/GoBackButton'
import { Field } from '@/components/ui/fields/Field'
import { Textarea } from '@/components/ui/fields/Textarea'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { quizService } from '@/services/quiz.service'
import { IQuizForm } from '@/types/quiz.types'
import { translateErrorMessage } from '@/utils/translate-error'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function CreateQuiz() {
	const {register, handleSubmit, reset} = useForm<IQuizForm>({
		mode: 'onChange'
	})

	const {push} = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['create-quiz'],
		mutationFn: (data:IQuizForm) => quizService.createQuiz(data),
		onSuccess(response) {
			// Show success toats
			toast.success('Квиз успешно создан')
			reset()

			// Redirect to created quiz page
			// TODO: Сделать редирект на страницу квиза
			push(DASHBOARD_PAGES.HOME)
		},
		onError: (error: any) => {
			const serverMessage = error?.response?.data?.message
			const message = typeof serverMessage === 'string'
				? translateErrorMessage(serverMessage)
				: 'Произошла ошибка при создании квиза'

			toast.error(message);
  	}
	})

	// Form submit function
	const onSubmit:SubmitHandler<IQuizForm> = data => {
		mutate(data)
	}
	
	return (
		<main className="container md:w-1/2 flex flex-col mt-8 w-full">
			<div className='md:w-1/2 relative w-full z-20'>
				<div className='mb-5 w-max'>
					<GoBackButton />
					<hr className='my-5' />
					<h1 className='mb-5'>Создание квиза</h1>
					<hr />
				</div>
				<p>На этой странице вы можете создать свой собственный квиз.</p>
				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<div className="form__body">
						<Field
							id='name'
							label='Название квиза:'
							placeholder='Название'
							type='text'
							extra='mb-4'
							{...register('name', {
								required: '"Имя квиза" является обязательным полем'
							})} />
						<Textarea
							id='description'
							label='Описание квиза:'
							placeholder='Описание'
							extra='mb-4'
							{...register('description')} />
					</div>
					<div className="form__footer mt-8">
						<Button className='button--success w-full'>Создать</Button>
					</div>
				</form>
			</div>
			<div id='main-bottom'>
				<div className="image-block">
					<img src="/notebook.png" alt="" className=''/>
				</div>
			</div>
		</main>
	)
}