'use client'

import { DASHBOARD_MENU, GUEST_MENU } from '@/config/menu-data.config'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import './menu.scss'
import { MenuItem } from './MenuItem'
import { ProfileMiniature } from './ProfileMiniature'

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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{duration: 0.3, bounce: 'bounce'}}
            className='burger-menu fixed top-0 right-0 md:w-1/3 w-full h-screen flex flex-col px-5 py-8 bg-lemon-100 rounded-l-3xl z-50'>
            <button className="burger-menu__close-btn relative" onClick={handleCloseMenu}>
              <img src="/icons/cross.svg" alt="Закрыть меню" />
            </button>
            <ul className="flex flex-col gap-3 mt-8">
              <ProfileMiniature onClick={handleCloseMenu}/>
              {menu.map(item => (
                <MenuItem item={item} key={item.name} onClick={handleCloseMenu} />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: '40%'}}
          exit={{opacity: 0}}
          className="fixed top-0 left-0 w-full h-screen z-40 bg-black"
          onClick={handleCloseMenu}
        />
      )}
      </AnimatePresence>
    </>
  )
}
