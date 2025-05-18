'use client'

import Link from 'next/link'
import { Logo } from '../logo/Logo'

export function Footer() {
	return (
		<footer className="container flex justify-between flex-wrap gap-8 !pt-16 !pb-10 bg-black text-lemon-100 text-sm">
			<div className='md:w-1/4 w-1/2'>
				<Logo className="block !mb-3" />
				<p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
				<a href="#" className='underline underline-offset-4'>Developed by SqTione</a>
			</div>
			<div>
				<h4 className="subtitle mb-3">Меню</h4>
				<nav>
					<ul className='flex flex-col gap-2 underline underline-offset-4'>
						<li><Link href='/'>Главная</Link></li>
						<li><Link href='/'>Вход</Link></li>
						<li><Link href='/'>Регистрация</Link></li>
					</ul> 
				</nav>
			</div>
			<div className='md:w-max w-full'>
				<h4 className="subtitle mb-3">Контактные данные</h4>
				<div className="md:flex-col flex justify-between flex-wrap gap-3 w-full">
					<div className='flex flex-col gap-2'>
						<Link href='mailto:quizzyroom@gmail.com' className='flex items-center gap-3'>
							<img src="/icons/email.svg" alt="" />
							quizzyroom@gmail.com
						</Link>
						<Link href='tel:89123456789' className='flex items-center gap-3'>
							<img src="/icons/phone.svg" alt="" />
							+7 (921) 345-67-89
						</Link>
					</div>
					<div className='flex items-center gap-3'>
						<Link href='vk.com'><img src="/icons/vk.svg" alt="Вконтакте" /></Link>
						<Link href='vk.com'><img src="/icons/vk.svg" alt="Вконтакте" /></Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
