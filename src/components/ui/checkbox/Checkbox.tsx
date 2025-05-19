import { ChangeEvent, forwardRef } from 'react'

interface CheckboxProps {
  id: string
  label: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  name?: string
  className?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
		{ 
			id, 
			label, 
			disabled, 
			className, 
			...rest 
		},
		ref
	) => {
    return (
      <label
        htmlFor={id}
        className={`inline-flex items-center gap-2 select-none ${
          disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
        } ${className ?? ''}`}
      >
        {/* Visually hidden native checkbox */}
        <input
          type="checkbox"
          id={id}
          ref={ref}
          disabled={disabled}
          className="peer sr-only"
          {...rest}
        />

        {/* Custom checkbox */}
				<span
          className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded border border-black transition-colors
            peer-checked:border-transparent
            peer-checked:bg-black
            peer-focus-visible:ring-2 peer-focus-visible:ring-black/50`}
        >
          {/* animated checkmark */}
          <svg
            className="pointer-events-none h-3 w-3 stroke-lemon-100 transition-all duration-200 scale-100 peer-checked:scale-100"
            fill="none"
            viewBox="0 0 12 10"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 5.2 4.333 9 11 1" />
          </svg>
        </span>

        <span>{label}</span>
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
