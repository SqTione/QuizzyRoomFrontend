'use client'

import { UploadCloud } from 'lucide-react'
import { forwardRef, useRef, useState } from 'react'

interface FileFieldProps {
	id: string
	label: string
	placeholder?: string
	extra?: string
	accept?: string
	disabled?: boolean
	state?: 'error' | 'success'
	onFileChange?: (file: File | null) => void
}

export const FileField = forwardRef<HTMLInputElement, FileFieldProps>(
	(
		{
			id,
			label,
			placeholder = 'Перетащите файл или кликните для выбора',
			extra,
			accept,
			disabled,
			state,
			onFileChange,
			...rest
		},
		ref
	) => {
		const inputRef = useRef<HTMLInputElement>(null)
		const [dragging, setDragging] = useState(false)
		const [fileName, setFileName] = useState<string | null>(null)

		const handleDrop = (e: React.DragEvent) => {
			e.preventDefault()
			e.stopPropagation()
			setDragging(false)

			const file = e.dataTransfer.files[0]
			if (file) {
				setFileName(file.name)
				onFileChange?.(file)
			}
		}

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0] || null
			setFileName(file?.name || null)
			onFileChange?.(file)
		}

		return (
			<div className={`relative ${extra}`}>
				<label htmlFor={id} className="hidden text-sm text-black/60 font-medium">
					{label}
				</label>

				<div
					onDragOver={e => {
						e.preventDefault()
						setDragging(true)
					}}
					onDragLeave={() => setDragging(false)}
					onDrop={handleDrop}
					onClick={() => inputRef.current?.click()}
					className={`mt-2 flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed p-6 text-center transition-colors cursor-pointer ${
						disabled
							? '!border-black/60 text-black/60 cursor-not-allowed'
							: state === 'error'
							? 'border-danger text-danger'
							: state === 'success'
							? 'border-success text-suborder-success'
							: dragging
							? 'border-blue-500 bg-blue-50'
							: 'border-black/30 hover:border-black/60'
					}`}
				>
					<UploadCloud className="mb-2 h-6 w-6" />
					<p className="text-sm text-black/70">
						{fileName || placeholder}
					</p>
				</div>

				<input
					ref={ref || inputRef}
					type="file"
					id={id}
					disabled={disabled}
					accept={accept}
					onChange={handleChange}
					className="hidden"
					{...rest}
				/>
			</div>
		)
	}
)

FileField.displayName = 'FileField'
