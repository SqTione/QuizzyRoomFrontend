import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'

export function UserProfileImage() {
	const {data, isLoading} = useProfile()

		if (data?.avatarPath) {
			return (
				<Image 
					src={`${process.env.NEXT_PUBLIC_API_URL_NO_PREFIX}/${data.avatarPath}`}
					alt={data.name} 
					width={100} 
					height={100}
					className='w-full h-full rounded-full'
				/>
			)
		} else {
			return (
			<div className='flex justify-center items-center w-full h-full rounded-full bg-gray-400'>
				<p className='font-bold text-3xl text-center text-black uppercase'>{data?.name.split('')[0]}</p>
			</div>
			)
		}
}