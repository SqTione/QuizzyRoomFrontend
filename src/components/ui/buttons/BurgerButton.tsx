'use client'

import './burger-button.scss'

export function BurgerButton({ onClick }: { onClick: () => void }) {
	return (
		<button className='burger-menu__button px-2 py-2 w-[2.5rem] h-[2rem] aspect-square rounded-md skew-x-[-20deg] cursor-pointer' onClick={onClick}>
			<div className='flex flex-col justify-between gap-[2px] w-full h-full'>
				<span className='block w-full h-[2px] bg-white rounded-full' />
				<span className='block w-full h-[2px] bg-white rounded-full' />
				<span className='block w-full h-[2px] bg-white rounded-full' />
			</div>
		</button>
	)
}