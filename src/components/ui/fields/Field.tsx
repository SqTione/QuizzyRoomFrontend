import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ 
			label, 
			id, 
			extra, 
			type, 
			placeholder, 
			state, 
			disabled, 
			isNumber, 
			...rest 
		},
		ref
	) => {
		const [showPassword, setShowPassword] = useState(false)
		const isPassword = type === 'password'
		
		return (
			<div className={`relative ${extra}`}>
				<label
					htmlFor={id}
					className={`hidden text-sm text-black/6 font-medium`}
				>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={isPassword && showPassword ? 'text' : type}
					id={id}
					placeholder={placeholder}
					className={`mt-2 flex w-full items-center justify-center border-b p-3 text-base outline-none placeholder:text-black placeholder:font-light duration-500 transition-colors ${
						disabled === true
							? '!border-black/60 !text-black/60'
							: state === 'error'
								? 'border-danger text-danger placeholder:text-danger'
								: state === 'success'
									? 'border-success text-suborder-success placeholder:text-suborder-success'
									: ''
					}`}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>

				{/* Show/Hide password button */}
				{isPassword && (
					<button
						type="button"
						className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-black transition-all"
						onClick={() => setShowPassword(prev => !prev)}
						tabIndex={-1}
					>
						<div className="relative w-5 h-5">
							{/* Глаз */}
							{showPassword ? <Eye className="w-5 h-5" color='black' /> : <EyeOff className="w-5 h-5" color='black' /> }
						</div>
					</button>
				)}
			</div>
			
		)
	}
)

Field.displayName = 'field'