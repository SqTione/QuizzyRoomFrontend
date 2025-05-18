'use client'

import { ISignInForm } from '@/types/auth.types'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'


export function SignIn() {
	const {register, handleSubmit, reset} = useForm<ISignInForm>({
		mode: 'onChange'
	})

	const {push} = useRouter()

	// const {} = useMutation({
	// 	mutationKey: ['auth']
	// })

	return (<div>Auth</div>)
}