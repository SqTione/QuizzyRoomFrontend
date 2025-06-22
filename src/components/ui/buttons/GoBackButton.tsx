import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function GoBackButton() {
	const router = useRouter()

	const handleGoBack = () => {
		router.back()
	}

	return (
		<motion.div 
			className='flex items-center cursor-pointer w-max'
			onClick={handleGoBack}
			whileHover="hover"
			initial="initial"
		>
			<ChevronLeft size={20} />
			<motion.span 
				variants={{
					initial: { x: 4 },
					hover: { x: 0 }
				}}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			>
				Назад
			</motion.span>
		</motion.div>
	)
}