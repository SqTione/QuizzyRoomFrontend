export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-4">Страница не найдена</p>
      <a href="/" className="mt-6 text-primary underline underline-offset-4">
        Вернуться на главную
      </a>
    </div>
	)
}