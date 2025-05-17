'use client'

import { PropsWithChildren, useState } from 'react'
import './style.scss'

type TypeAccordion = {title: string, className?: string}

export function Accordion({
	title,
	children,
	className,
	...rest
}: PropsWithChildren<TypeAccordion>) {
		const [isActive, setIsActive] = useState(false)

		const handleAccordionHeaderClick = () => {
			setIsActive(!isActive)
		}

	return (
		<div className={isActive ? 'accordion active' : 'accordion'}>
			<div className="accordion-header" onClick={handleAccordionHeaderClick}>
				{title}
				<button><img src="/icons/arrow_down.svg" alt="" /></button>	
			</div>
			<div className={isActive ? 'accordion-body active' : 'accordion-body'}>
				{children}
			</div>
		</div>
	)
}