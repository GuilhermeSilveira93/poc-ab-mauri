'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Book,
  Ellipsis,
  Home,
  Mail,
  Megaphone,
  MessageCircleQuestion,
} from 'lucide-react'

import { Button } from '../ui/button'
import { DialogTrigger } from '../ui/dialog'
import SaqModal from './Saq/SacModal'

const NavBar = () => {
  const [showmenu, setShowmenu] = useState(false)
  const pathname = usePathname()
  const ToggleButton = () => {
    setShowmenu((prev) => !prev)
  }
  return (
    <aside
      data-showmenu={showmenu}
      className={cn(
        'group relative top-16 max-h-[calc(100vh-4rem)] border-r transition-all duration-300 max-sm:hidden',
        showmenu ? 'w-64' : 'w-14'
      )}
    >
      <nav className="h-full px-2 py-9">
        <ul className="w-full space-y-2">
          {pages.map(({ icon: Icon, ...page }) => {
            return (
              <li key={page.url} className="grid">
                <Link href={page.url}>
                  <Button
                    size={'icon'}
                    className="group/popover w-full group-data-[showmenu=true]:justify-start group-data-[showmenu=true]:px-4"
                    variant={pathname !== page.url ? 'ghost' : 'default'}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="ml-3 transition-all duration-300 group-data-[showmenu=false]:hidden">
                      {page.name}
                    </span>
                    <div className="absolute left-16 z-50 hidden rounded-md bg-yellow-300 px-2 py-1 text-black transition-all group-hover/popover:block group-data-[showmenu=true]:hidden">
                      <p>{page.name}</p>
                    </div>
                  </Button>
                </Link>
              </li>
            )
          })}
          <SaqModal>
            <DialogTrigger asChild>
              <Button
                className="group/popover w-full justify-start"
                variant={'ghost'}
              >
                <MessageCircleQuestion className="h-4 w-4" />
                <span className="ml-3 transition-all duration-300 group-data-[showMenu=false]:hidden">
                  SAC
                </span>
                <div className="absolute left-16 z-50 hidden rounded-md bg-yellow-300 px-2 py-1 text-black transition-all group-hover/popover:block group-data-[showMenu=true]:hidden">
                  <p>SAC</p>
                </div>
              </Button>
            </DialogTrigger>
          </SaqModal>
        </ul>
      </nav>
      <Button
        size={'icon'}
        className="absolute inset-y-2/3 -right-4"
        onClick={ToggleButton}
      >
        <ArrowRight className="h-4 w-4 transition-all duration-300 group-data-[showmenu=true]:rotate-180" />
      </Button>
    </aside>
  )
}
export default NavBar

const pages = [
  {
    name: 'Home',
    icon: Home,
    url: '/',
  },
  {
    name: 'Comunicados',
    icon: Megaphone,
    url: '/announcements',
  },
  {
    name: 'Faq',
    icon: Mail,
    url: '/faq',
  },
  {
    name: 'Políticas',
    icon: Ellipsis,
    url: '/policies',
  },
  {
    name: 'Regulamentos',
    icon: Book,
    url: '/regulations',
  },
]
