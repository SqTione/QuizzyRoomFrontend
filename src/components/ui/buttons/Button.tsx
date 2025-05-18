import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './button.scss'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
	<button className={className + ' px-8 py-2 font-bold text-base text-white text-center uppercase rounded-xl skew-x-[-20deg] cursor-pointer'} {...rest}>
		<div className='skew-x-[20deg]'>
			{children}
		</div>
	</button> )
}