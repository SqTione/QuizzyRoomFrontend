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
        className="flex items-center gap-2 text-base text-black"
      >
        <span>{item.name}</span>
      </button>
    )
  }

  // Если onClick нет, а есть ссылка — рендерим Link
  return (
    <Link
      href={item.link || '#'}
      className="flex items-center gap-2 text-base text-black"
      onClick={onClick}
    >
      <span>{item.name}</span>
    </Link>
  )
}