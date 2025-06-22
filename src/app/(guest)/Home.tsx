`use client`

import { Accordion } from '@/components/ui/accordion/Accordion'
import { Button } from '@/components/ui/buttons/Button'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export function Home() {
	return (
	 <>
	 	<main className="container relative flex flex-col justify-between z-20">
			<div>
				<div className="md:flex-col-reverse md:mt-20 md:w-1/3 flex mb-5 w-full">
					<div className="md:w-full md:pr-0 pr-6 w-1/2">
						<h1 className='md:pt-5 mb-5'>Онлайн квизы!</h1>
						<hr className='mb-5 w-full'/>
						 <p className="mb-8">
                Интерактивные квизы – это современный и увлекательный способ проверить свои знания, закрепить материал и развить критическое мышление. Учитесь, соревнуйтесь и достигайте новых высот с нашими образовательными квизами.
              </p>
						<Button className='md:!flex !hidden w-full'>Начнём!</Button>
					</div>
					<div className="md:pl-0 md:pb-5 md:w-full md:border-l-transparent md:border-b pl-6 border-l">
						<h3>Учись весело!</h3>
					</div>
				</div>
				<Button href={DASHBOARD_PAGES.HOME} className='md:!hidden w-1/2'>Начнём!</Button>
			</div>
			<div className="md:relative md:bottom-40 flex justify-center w-full z-0">
				<img src={'/globe.png'} alt="" className='lg:!w-[550px] lg:-translate-y-1/4 md:!w-[450px] md:-translate-y-1/3 md:left-1/5 relative bottom-4 z-10'/>
				<div className="md:h-[300px] md:rotate-[-11deg] absolute -left-1/2 bottom-0 w-[200%] h-[175px] bg-primary"></div>
			</div>
		</main>

		{/* Section "Quizzes" */}
		<section className='container section'>
			<h4 className="subtitle mb-3">Квизы</h4>
			<div className="flex flex-col gap-5 !mb-5 w-2/3">
				<hr />
				<h2>Как это работает?</h2>
				<hr />
			</div>
			<p>
				Наша платформа превращает создание и прохождение квизов в простую и увлекательную процедуру. В пару кликов вы присоединяетесь к любому тесту или создаёте собственный — собираете учеников или друзей, проверяете знания и сразу же видите результаты.
			</p>

			{/* FAQ Accordions */}
			<div className="flex flex-col gap-5 !mt-5">
				<Accordion title='Участие в квизе'>
					<h4 className='md-6 text-lg font-bold'>Принять участие в квизе крайне просто! Достаточно следовать этим шагам:</h4>
					<ol className='mb-3 list-decimal list-inside '>
						<li>Авторизуйтесь или зарегистрируйтесь.</li>
						<li>Получите ссылку на квиз от преподавателя или друга.</li>
						<li>Отвечайте на вопросы.</li>
						<li>Получите результаты.</li>
					</ol>
				</Accordion>
				<Accordion title='Создание квиза'>
					<h4 className='md-6 text-lg font-bold'>Вы можете создать свой квиз в несколько кликов! Всего лишь нужно:</h4>
					<ol className='mb-3 list-decimal list-inside '>
						<li>Авторизоваться или зарегистрироваться.</li>
						<li>В профиле нажать на кнопку "Создать квиз" и настроить его.</li>
						<li>В профиле нажать на кнопку "Редактировать квиз" и добавить вопросы.</li>
						<li>Отправить квиз ученикам или друзьям и проверить результаты.</li>
					</ol>
				</Accordion>
			</div>
		</section>
		{/* Section "About" */}
		<section className='container section mb-15'>
			<h4 className="subtitle mb-3">Образовательные возможности квизов</h4>
			<div className="flex flex-col gap-5 !mb-5 w-2/3">
				<hr />
					<h2>Почему квизы эффективны в обучении?</h2>
				<hr />
			</div>
			<p>
          Квизы помогают закреплять знания через активное повторение, стимулируют интерес и мотивацию, а также позволяют получить обратную связь в режиме реального времени. Это отличный инструмент для самоконтроля и подготовки к экзаменам.
        </p>
        <p>
          Использование квизов способствует развитию логического мышления, улучшает память и способствует более глубокому пониманию материала за счёт интерактивности и геймификации учебного процесса.
        </p>
		</section>
	 </>
	)
}
