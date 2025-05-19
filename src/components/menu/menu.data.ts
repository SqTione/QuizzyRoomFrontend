import { GUEST_PAGES } from '@/config/pages-url.config'
import { IMenuItem } from './menu-item.interface'

// Guest menu routes
export const GUEST_MENU: IMenuItem[] = [
	{
		link: GUEST_PAGES.HOME,
		name: 'Главная'
	},
	{
		link: GUEST_PAGES.SIGN_IN,
		name: 'Вход'
	},
	{
		link: GUEST_PAGES.SIGN_UP,
		name: 'Регистрация'
	}
]