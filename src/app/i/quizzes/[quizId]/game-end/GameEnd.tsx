'use client'
import './game-end.scss'

export function GameEnd() {
	return (
		<main className="relative mt-8 min-h-[92vh]">
			<div className="container mb-8">
				<div className="winner__info flex flex-col gap-5">
					<div className='flex justify-between items-center gap-5'>
						<h4 className="subtitle">Победитель</h4>
						<h4 className="subtitle">Очки</h4>
					</div>
					<hr />
					<div className='flex justify-between gap-5'>
						<h1 className="text-xl">Имя пользователя</h1>
						<h2>200</h2>
					</div>
					<div className='flex gap-5'>
						<div>
							<p>Ответы:</p>
							<h4 className="subtitle">12/12</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="leaderboard">
				<div className="container relative grid grid-cols-2 gap-5 z-10">
					<div>
						<div className="flex flex-col gap-3 mb-2">
							<h4 className='subtitle'>2 место</h4>
							<hr />
							<h3>Имя пользователя</h3>
						</div>
						<div className='flex gap-8'>
							<div>
								<p>Ответы:</p>
								<h4 className='subtitle'>9/12</h4>
							</div>
							<div>
								<p>Очки:</p>
								<h4 className='subtitle'>187</h4>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-col gap-3 mb-2">
							<h4 className='subtitle'>3 место</h4>
							<hr />
							<h3>Имя пользователя</h3>
						</div>
						<div className='flex gap-8'>
							<div>
								<p>Ответы:</p>
								<h4 className='subtitle'>8/12</h4>
							</div>
							<div>
								<p>Очки:</p>
								<h4 className='subtitle'>177</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}