'use client'

import { useState } from 'react'
import { Logo } from '../../logo/Logo'
import { Menu } from '../../menu/Menu'

export function HeaderGuest() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(prev => !prev)
	const closeMenu = () => setIsMenuOpen(false)

	return (
		<header className="container flex justify-between items-center w-full mb-5 mt-5 overflow-x-hidden">
			<Logo />
			<Menu />
		</header>
	) 
}