import { forwardRef } from 'react'

interface TextareaTypes {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	rows?: number
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaTypes>(
	(
		{ 
			label, 
			id, 
			extra, 
			placeholder, 
			state, 
			disabled, 
			rows = 4,
			...rest 
		},
		ref
	) => {		
		return (
			<div className={`relative ${extra}`}>
				<label
					htmlFor={id}
					className={`hidden text-sm text-black/6 font-medium`}
				>
					{label}
				</label>
				<textarea
					ref={ref}
					disabled={disabled}
					id={id}
					placeholder={placeholder}
					rows={rows}
					className={`mt-2 flex w-full items-center justify-center border rounded-sm p-3 text-base outline-none placeholder:text-black placeholder:font-light duration-500 transition-colors ${
						disabled === true
							? '!border-black/60 !text-black/60'
							: state === 'error'
								? 'border-danger text-danger placeholder:text-danger'
								: state === 'success'
									? 'border-success text-suborder-success placeholder:text-suborder-success'
									: ''
					}`}
					{...rest}
				/>
			</div>
		)
	}
)

Textarea.displayName = 'textarea'