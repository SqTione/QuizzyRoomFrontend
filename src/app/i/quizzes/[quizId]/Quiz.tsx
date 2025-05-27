'use client'

import { Button } from '@/components/ui/buttons/Button'
import { GoBackButton } from '@/components/ui/buttons/GoBackButton'

export function Quiz() {
	return (
		<main className='container flex flex-col justify-between mt-8'>
			<div className="flex gap-5">
				<div className='flex flex-col gap-5 xl:w-1/3 md:w-1/2'>
					<GoBackButton />
					<hr />
					<h1>Название квиза</h1>
					<hr />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis  dui commodo massa dignissim mollis. Etiam feugiat pulvinar quam ac  tincidunt. Sed non finibus quam. Sed varius venenatis ex vel mattis.  Nunc sit amet commodo neque, ut posuere augue. Integer tincidunt leo  mollis ante aliquam convallis.</p>
					<Button>Начать</Button>
				</div>
				<div className='flex flex-col pl-5 border-l'>
					<div>
						{/* <FavoriteButton quizId={quiz.id} /> */}
					</div>
					<div>
						<p>Вопросы:</p>
						<h4 className="subtitle">12</h4>
					</div>
				</div>
			</div>
			<div id='main-bottom'>
				<div className="image-block">
					<img src="/notebook.png" alt="" className=''/>
				</div>
			</div>
		</main>
	)
}