'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { PropsWithChildren, useState } from 'react'
import './style.scss'

type TypeAccordion = {title: string, className?: string}

export function Accordion({
	title,
	children,
	className,
	...rest
}: PropsWithChildren<TypeAccordion>) {
		const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <motion.div
      className="w-full border-b"
      initial={false}
    >
      <div
        className="flex justify-between items-center pb-3 font-extrabold text-xl text-black uppercase cursor-pointer"
        onClick={handleToggle}
      >
        <h3>{title}</h3>
        <motion.button
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-transparent"
        >
          <img src="/icons/arrow_down.svg" alt="" />
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 mb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}