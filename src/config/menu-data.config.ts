import { authService } from '@/services/auth.service'
import { DASHBOARD_PAGES, GUEST_PAGES } from './pages-url.config'

export interface IMenuItem {
  name: string
  link?: string
	onClick?: () => void
}

export const GUEST_MENU: IMenuItem[] = [
  {
    name: 'Главная',
    link: GUEST_PAGES.HOME
  },
  {
    name: 'Войти',
    link: GUEST_PAGES.SIGN_IN
  },
  {
    name: 'Регистрация',
    link: GUEST_PAGES.SIGN_UP
  }
]

export const DASHBOARD_MENU: IMenuItem[] = [
	// {
  //   name: 'Главная',
  //   link: GUEST_PAGES.HOME
  // },
  {
    name: 'Создание квиза',
    link: DASHBOARD_PAGES.CREATE_QUIZ
  }
]

export const DASHBOARD_FOOTER_MENU: IMenuItem[] = [
	// {
  //   name: 'Главная',
  //   link: GUEST_PAGES.HOME
  // },
  {
    name: 'Профиль',
    link: DASHBOARD_PAGES.HOME
  },
  {
    name: 'Создание квиза',
    link: DASHBOARD_PAGES.CREATE_QUIZ
  },
  {
    name: 'Выйти',
    onClick: async () => {
      await authService.logout()
      window.location.reload()
    }
  }
]
