import { IMenuItem } from '@/config/menu-data.config'
import Link from 'next/link'

type TypeMenuItem = {
  item: IMenuItem,
  onClick?: () => void
}

export function MenuItem({ item, onClick }: TypeMenuItem) {
  if (item.onClick) {
    return (
      <button
        type="button"
        onClick={() => {
          item.onClick?.()
          onClick?.()
        }}
        className="menu__item flex items-center gap-2 text-base text-black cursor-pointer"
      >
        <span>{item.name}</span>
      </button>
    )
  }

  return (
    <Link
      href={item.link || '#'}
      className="menu__item flex items-center gap-2 text-base text-black cursor-pointer"
      onClick={onClick}
    >
      <span>{item.name}</span>
    </Link>
  )
}