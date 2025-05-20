'use client'
import { Button } from '@/components/ui/buttons/Button'
import { useProfile } from '@/hooks/useProfile'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import './profile.scss'

export function Profile() {
	const [activeTab, setActiveTab] = useState<'my' | 'favorites'>('my')

	const {data, isLoading} = useProfile()
	return isLoading ? ( 
		<div>Загрузка</div>
	) : (
		<>
			<main className='md:!w-2/3 container flex gap-2.5 mt-8 mb-15 w-full !min-h-0'>
				<div className="w-[100px] h-[100px] shrink-0">
					<img 
						className='w-full h-full bg-gray-300 rounded-full'
						src="/default_avatar.png" 
						alt="" />
				</div>
				<div className='w-full'>
					<div className='pl-2.5 mb-3'>
						<h3 className='mb-3'>{data?.name}</h3>
						<hr />
					</div>
					<div className='statistics flex gap-5'>
						<div>
							<p className='mb-1'>Победы:</p>
							<p className='text-xl font-extrabold'>{data?.userStatistics[0]?.totalWins}</p>
						</div>
						<div>
							<p className='mb-1'>Участия:</p>
							<p className='text-xl font-extrabold'>{data?.userStatistics[0]?.totalPassed}</p>
						</div>
					</div>
				</div>
			</main>

			<section className='container mb-15'>
        <div className="relative flex justify-center border-b border-gray-200 mb-5">
          <button
            className={`flex-1 py-3 text-center font-medium relative ${activeTab === 'my' ? 'text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('my')}
          >
            Ваши квизы
          </button>
          
          <button
            className={`flex-1 py-3 text-center font-medium relative ${activeTab === 'favorites' ? 'text-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('favorites')}
          >
            Избранные
          </button>

					<motion.div
            className="absolute bottom-0 h-0.5 bg-primary"
            initial={false}
            animate={{
              left: activeTab === 'my' ? '0%' : '50%',
              width: '50%'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Tabs content */}
        <div className="relative">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
						>
							{activeTab == 'my' ? (
								<div className='w-full'>
									<div className="user-quizzes lg:grid-cols-2 grid grid-cols-1 gap-8 mb-6">
										<div className="quiz">
											<h3 className='mb-3'>Название квиза</h3>
											<div className='flex justify-between gap-5'>
												<p className='quiz__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa...</p>
												<div className='flex flex-col gap-2'>
													<Button className='button--capsule button--success w-max'>
															<img src="/icons/play.svg" alt="" />
													</Button>
													<Button className='button--capsule button--danger w-max'>
															<img src="/icons/heart.svg" alt="" />
													</Button>
												</div>
											</div>
											<hr className='mt-5 border-gray-500'/>
										</div>
									</div>
									<Button className='button--bordered md:w-fit md:mx-auto w-full mt-6'>Показать больше</Button>
								</div>
							): (
								<div className='w-full'>
									<div className="favorite-quizzes lg:grid-cols-2 grid grid-cols-1 gap-8 mb-6">
										<div className="quiz">
											<h3 className='mb-3'>Название квиза</h3>
											<div className='flex justify-between gap-5'>
												<p className='quiz__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis..</p>
												<div className='flex flex-col gap-2'>
													<Button className='button--capsule button--success w-max'>
															<img src="/icons/play.svg" alt="" />
													</Button>
													<Button className='button--capsule button--danger w-max'>
															<img src="/icons/heart.svg" alt="" />
													</Button>
												</div>
											</div>
											<hr className='mt-5 border-gray-500'/>
										</div>
										<div className="quiz">
											<h3 className='mb-3'>Название квиза</h3>
											<div className='flex justify-between gap-5'>
												<p className='quiz__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis..</p>
												<div className='flex flex-col gap-2'>
													<Button className='button--capsule button--success w-max'>
															<img src="/icons/play.svg" alt="" />
													</Button>
													<Button className='button--capsule button--danger w-max'>
															<img src="/icons/heart.svg" alt="" />
													</Button>
												</div>
											</div>
											<hr className='mt-5 border-gray-500'/>
										</div>
									</div>
									<Button className='button--bordered md:w-fit md:mx-auto w-full mt-6'>Показать больше</Button>
								</div>
							)}
						</motion.div>
					</AnimatePresence>
					</div>
      </section>
		</>
	)
}