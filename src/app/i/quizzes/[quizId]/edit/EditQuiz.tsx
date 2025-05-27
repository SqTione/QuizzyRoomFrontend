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
import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { QuizQuestions } from './components/QuizQuestions'

export function EditQuiz() {
	const params = useParams()
	const quizId = params.quizId as string

	const {register, handleSubmit, reset} = useForm<IQuizForm>({
		mode: 'onChange'
	})

	const {push} = useRouter()

	const { mutate } = useMutation({
  mutationKey: ['edit-quiz'],
  mutationFn: ({ data, quizId }: { data: IQuizForm, quizId: string }) =>
    quizService.updateQuiz(data, quizId),
  onSuccess(response) {
    toast.success('Квиз успешно изменён')
    reset()
    push(DASHBOARD_PAGES.HOME)
  },
  onError: (error: any) => {
    const serverMessage = error?.response?.data?.message
    const message = typeof serverMessage === 'string'
      ? translateErrorMessage(serverMessage)
      : 'Произошла ошибка при редактировании квиза'

    toast.error(message);
  }
})


	// Form submit function
	const onSubmit:SubmitHandler<IQuizForm> = data => {
		mutate({data, quizId})
	}
	
	return (
		<>
			<main className="container flex flex-col mt-8 w-full">
				<div className='relative w-full z-20'>
					<div className='lg:w-1/2 w-full mb-5'>
						<GoBackButton />
						<hr className='my-5' />
						<h1 className='mb-5'>Редактирование квиза</h1>
						<hr />
					</div>
					<p>На этой странице вы можете настроить ваш квиз.</p>

					{/* Edit quiz form */}
					<form 
						action="" 
						onSubmit={handleSubmit(onSubmit)} 
						className='lg:w-2/3 w-full'>
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
							<Button className='md:w-max button--success w-full' type='submit'>Обновить</Button>
						</div>
					</form>

					{/* Quiz questions list */}
					<QuizQuestions />
				</div>
				{/* <div id='main-bottom'>
					<div className="image-block">
						<img src="/notebook.png" alt="" className=''/>
					</div>
				</div> */}
			</main>
		</>
	)
}