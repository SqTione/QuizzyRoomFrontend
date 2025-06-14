'use client'
import { Button } from '@/components/ui/buttons/Button'
import { FavoriteButton } from '@/components/ui/buttons/FavoriteButton'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { UseProfilePageData } from '@/hooks/useProfilePageData'
import { UseQuizDelete } from '@/hooks/useQuizDelete'
import { AnimatePresence, motion } from 'framer-motion'
import { Pencil, Trash } from 'lucide-react'
import { useState } from 'react'
import './profile.scss'

export function Profile() {
	const [activeTab, setActiveTab] = useState<'my' | 'favorites'>('my')
	
	const { mutate: deleteQuizMutate, isPending: isDeleting } = UseQuizDelete()

	// Getting profile data
	const {
		profile,
		userQuizzes,
		userFavoriteQuizzes,
		isLoading
	} = UseProfilePageData()
	
	return isLoading ? ( 
		<div>Загрузка</div>
	) : (
		<>
			{/* Profile */}
			<main className='container lg:!w-1/2 grid grid-cols-1 gap-5 mt-8 mb-15 w-full !min-h-0'>
				<div className='flex gap-2.5 mb-3'>
					<div className="w-[100px] h-[100px] shrink-0">
						<img
							className='w-full h-full bg-gray-300 rounded-full'
							src="/default_avatar.png"
							alt="" />
					</div>
					<div className='w-full'>
						<div className='pl-2.5 mb-3'>
							<h3 className='mb-3'>{profile?.data?.name}</h3>
							<hr />
						</div>
						<div className='statistics flex gap-5'>
							<div>
								<p className='mb-1'>Победы:</p>
								<p className='text-xl font-extrabold'>{profile?.data?.userStatistics[0]?.totalWins}</p>
							</div>
							<div>
								<p className='mb-1'>Участия:</p>
								<p className='text-xl font-extrabold'>{profile?.data?.userStatistics[0]?.totalPassed}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='lg:w-max md:w-1/2 grid grid-cols-1 gap-3 w-full h-max'>
					<Button href={DASHBOARD_PAGES.CREATE_QUIZ}>Создать квиз</Button>
				</div>
			</main>

			{/* User Quizzes and Favorite Quizzes */}
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
									{userQuizzes.data?.length === 0 && (
										<p className="absolute text-center text-black py-4">У вас пока нет квизов</p>
									)}
									<div className="user-quizzes relative lg:grid-cols-2 grid grid-cols-1 gap-8 mb-6">
										{userQuizzes.data?.map(quiz => (
											<div className="quiz" key={quiz.id}>
												<h3 className='mb-3'>{quiz.name}</h3>
												<div className='flex justify-between gap-5'>
													<p className='quiz__description'>{quiz.description}</p>
													<div className='flex flex-col gap-2 w-15'>
														<Button 
															className='button--capsule button--success w-full'
															href={`${DASHBOARD_PAGES.QUIZZES}/${quiz.id}`}>
																<img src="/icons/play.svg" alt="" />
														</Button>
														<FavoriteButton quizId={quiz.id} />
														<Button 
															href={`${DASHBOARD_PAGES.QUIZZES}/${quiz.id}/edit`}
															className='button--capsule button--warning'>
															<Pencil size={14} />
														</Button>
														<Button
															className='button--capsule button--danger w-full'
															onClick={() => {
																if (confirm('Вы уверены, что хотите удалить квиз?')) {
																	deleteQuizMutate(quiz.id)
																}
															}}
															disabled={isDeleting}
														>
															<Trash size={14}></Trash>
														</Button>
													</div>
												</div>
												<hr className='mt-5 border-gray-500'/>
											</div>
										))}
									</div>
								</div>
							): (
								<div className='w-full'>
									{userFavoriteQuizzes.data?.length === 0 && (
										<p className="relative mx-auto text-center text-black py-4">У вас пока нет избранных квизов</p>
									)}
									<div className="favorite-quizzes lg:grid-cols-2 grid grid-cols-1 gap-8 mb-6">
										{userFavoriteQuizzes.data?.map(quiz => (
											<div className="quiz" key={quiz.id}>
												<h3 className='mb-3'>{quiz.name}</h3>
												<div className='flex justify-between gap-5'>
													<p className='quiz__description'>{quiz.description}</p>
													<div className='flex flex-col gap-2'>
														<Button className='button--capsule button--success w-max'>
																<img src="/icons/play.svg" alt="" />
														</Button>
														<FavoriteButton quizId={quiz.id} />
													</div>
												</div>
												<hr className='mt-5 border-gray-500'/>
											</div>
										))}
									</div>
								</div>
							)}
						</motion.div>
					</AnimatePresence>
					</div>
      </section>
		</>
	)
}