'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const variants = {
  initial: {
    opacity: 0,
    x: '100%'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { duration: 0.25, ease: 'easeInOut' }
  }
}

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransitionEffect({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
