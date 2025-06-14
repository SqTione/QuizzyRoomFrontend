import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useProfile } from '@/hooks/useProfile'
import { authService } from '@/services/auth.service'
import { useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader } from '../loader/Loader'

type TypeProfileMiniatureProps = {
	onClick?: () => void
}

export function ProfileMiniature({ onClick }: TypeProfileMiniatureProps) {
	const { data, isLoading } = useProfile()
	const router = useRouter()
	const queryClient = useQueryClient()

	if (isLoading) {
		return (
			<li>
				<Loader isLoading={isLoading}/>
			</li>
		)
	}

	// Logout handler
	const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// Disabling parent events
		e.stopPropagation()
		e.preventDefault()
		
		// Logout
		await authService.logout()

		// Deleting Profile Data from cache
		queryClient.invalidateQueries({ queryKey: ['profile'] })

		console.log('Logout')

		// TODO: Disable page reloading
		window.location.reload()
	}

	if (!data) return null

	// Rendering profile miniature if we have data
	return (
		<li>
			<Link
				href={DASHBOARD_PAGES.HOME}
				onClick={onClick}
				className="flex items-start gap-4 pb-3 border-b"
			>
				<div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
					{data? (
						<Image
							src=''
							alt={data.name || 'Аватар'}
							width={48}
							height={48}
							className="object-cover w-full h-full"
						/>
					): null}
				</div>
				<div className="flex flex-col">
					<h4 className="subtitle">{data.name}</h4>
					<button 
						onClick={(e) => handleLogout(e)}
						className='font-medium text-left text-primary underline cursor-pointer'>Выйти</button>
				</div>
			</Link>
		</li>
	)
}
