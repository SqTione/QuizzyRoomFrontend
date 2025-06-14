'use client'

import { motion } from 'framer-motion'

type TypeLoaderProps = {
	isLoading: boolean
}

export function Loader({ isLoading }: TypeLoaderProps) {
	if (!isLoading) return false

	return (
		<div className="flex justify-center items-center w-full h-full">
			<div className="relative flex items-center justify-center gap-2 w-[40px]">
				{/* Static dots */}
				<div className="max-auto w-2 h-2 rounded-full bg-black" />
				{/* Moving main dot */}
				<motion.div
					className="absolute left-0 w-2 h-2 rounded-full bg-black z-10"
					initial={{
						x: 0,
						scale: 1
					}}
					animate={{
						x: '400%',
						scale: 1.5
					}}
					transition={{
						x: {
							duration: 1,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse'
						},
						scale: {
							duration: 1,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						},
					}}
				/>
				<motion.div
					className="absolute left-0 w-2 h-2 rounded-full bg-black z-10"
					initial={{
						x: '400%',
						scale: 1
					}}
					animate={{
						x: 0,
						scale: 1.5
					}}
					transition={{
						x: {
							duration: 1,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse'
						},
						scale: {
							duration: 1,
							ease: 'easeInOut',
							repeat: Infinity,
							repeatType: 'reverse',
						},
					}}
				/>
			</div>
		</div>
	)
}
