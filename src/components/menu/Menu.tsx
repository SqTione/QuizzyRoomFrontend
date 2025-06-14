'use client'

import { DASHBOARD_MENU, GUEST_MENU } from '@/config/menu-data.config'
import { useRef, useState } from 'react'
import './menu.scss'
import { MenuItem } from './MenuItem'

type TypeMenuProps = {
  isAuthenticated?: boolean
}

export function Menu({isAuthenticated = false}: TypeMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLElement | null>(null)

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  const menu = isAuthenticated ? DASHBOARD_MENU : GUEST_MENU

  return (
    <>
      <button
        className="burger-menu__button px-2 py-2 w-[2.5rem] h-[2rem] aspect-square rounded-md skew-x-[-20deg] cursor-pointer"
        onClick={handleToggleMenu}
      >
        <div className="flex flex-col justify-between gap-[2px] w-full h-full">
          <span className="block w-full h-[2px] bg-white rounded-full" />
          <span className="block w-full h-[2px] bg-white rounded-full" />
          <span className="block w-full h-[2px] bg-white rounded-full" />
        </div>
      </button>

      <nav
        ref={menuRef}
        className={`burger-menu absolute top-0 right-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:w-1/3 flex flex-col px-5 py-8 w-screen h-screen bg-lemon-100 rounded-l-3xl z-50 transition-all duration-300`}
      >
        <button className="burger-menu__close-btn relative" onClick={handleCloseMenu}>
          <img src="/icons/cross.svg" alt="Закрыть меню" />
        </button>
        <ul className="flex flex-col gap-3 mt-8">
          {menu.map(item => (
            <MenuItem item={item} key={item.name} onClick={handleCloseMenu} />
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-40"
          onClick={handleCloseMenu}
        />
      )}
    </>
  )
}
