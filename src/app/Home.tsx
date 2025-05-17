`use client`

import { Accordion } from '@/components/ui/accordion/Accordion'
import { Button } from '@/components/ui/buttons/Button'

export function Home() {
	return (
	 <>
	 	<main className="container flex-1 flex flex-col justify-between w-full">
			<div>
				<div className="flex mb-5">
					<div className="pr-6 w-1/2">
						<h1 className='mb-5'>Онлайн квизы!</h1>
						<hr className='mb-5 w-full'/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tristique felis. </p>
					</div>
					<div className="pl-6 border-l">
						<h3>Учись весело!</h3>
					</div>
				</div>
				<Button className='!w-1/2'>Начнём!</Button>
			</div>
			<div className="flex justify-center w-full">
				<img src={'/globe.png'} alt=""  className='relative bottom-4 z-10'/>
				<div className="absolute left-0 bottom-0 w-full h-[175px] bg-primary"></div>
			</div>
		</main>

		{/* Section "Quizzes" */}
		<section className='container'>
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
		<section className='container'>
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
