'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { PropsWithChildren, useEffect } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

export function Modal({isOpen, onClose, children}: PropsWithChildren<ModalProps>) {
	// Close modal when pressed Escape
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [onClose])

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						onClick={onClose}
					/>

					{/* Modal */}
					<motion.div
						className='fixed inset-0 flex justify-center items-center p-5 w-screen h-screen z-70'
						initial={{opacity: 0, scale: 0.95, y: -20}}
						animate={{opacity: 1, scale: 1, y: 0}}
						exit={{opacity: 0, scale: 0.95, y: -20}}
						transition={{ type: 'spring', stiffness: 300, damping: 25 }}
						onClick={onClose}
					>
 						<div
              className="bg-lemon-100 rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                onClick={onClose}
              >
                <X color='black' />
              </button>
            </div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}