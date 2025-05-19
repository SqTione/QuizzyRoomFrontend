import Link from 'next/link'
import { IMenuItem } from './menu-item.interface'

// Menu Item Props
type TypeMenuItem = {
	item: IMenuItem,
	onClick?: () => void
}

export function MenuItem({item, onClick}: TypeMenuItem) {
	return (
		<Link 
			href={item.link} 
			className='flex items-center gap-2 text-base text-black'
			onClick={onClick}>
			<span>{item.name}</span>
		</Link>
	)
}