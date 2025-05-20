`use client`

import { Accordion } from '@/components/ui/accordion/Accordion'
import { Button } from '@/components/ui/buttons/Button'

export function Home() {
	return (
	 <>
	 	<main className="container relative flex flex-col justify-between w-ful z-20">
			<div>
				<div className="md:flex-col-reverse md:mt-20 md:w-1/3 flex mb-5 w-full">
					<div className="md:w-full md:pr-0 pr-6 w-1/2">
						<h1 className='md:pt-5 mb-5'>Онлайн квизы!</h1>
						<hr className='mb-5 w-full'/>
						<p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tristique felis. </p>
						<Button className='md:block hidden w-full'>Начнём!</Button>
					</div>
					<div className="md:pl-0 md:pb-5 md:w-full md:border-l-transparent md:border-b pl-6 border-l">
						<h3>Учись весело!</h3>
					</div>
				</div>
				<Button className='md:hidden w-1/2'>Начнём!</Button>
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
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis.</p>

			{/* FAQ Accordions */}
			<div className="flex flex-col gap-5 !mt-5">
				<Accordion title='Участие в квизе'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis.</p>
				</Accordion>
				<Accordion title='Создание квиза'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis.</p>
				</Accordion>
			</div>
		</section>
		{/* Section "About" */}
		<section className='container section mb-15'>
			<h4 className="subtitle mb-3">Квизы</h4>
			<div className="flex flex-col gap-5 !mb-5 w-2/3">
				<hr />
				<h2>Квизы в образовании?</h2>
				<hr />
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis.</p>
		</section>
	 </>
	)
}
