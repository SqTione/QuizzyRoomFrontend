import Link from 'next/link'

export function Logo(props: any) {
	return (
		<Link 
			href="/" 
			className={props.className + ' font-extrabold text-xl'}>
				Онлайн Квиз
		</Link>
	)
}