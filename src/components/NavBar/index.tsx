'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

import { Button } from '../ui/button'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const ToggleButton = () => {
    setShowMenu((prev) => !prev)
  }
  return (
    <aside
      data-showMenu={showMenu}
      className={cn(
        'group relative top-16 max-h-[calc(100vh-4rem)] border-r transition-all duration-300',
        showMenu ? 'w-64' : 'w-14'
      )}
    >
      <Button
        className="absolute inset-y-1/2 -right-4 h-8 w-8 items-center justify-center rounded p-2"
        onClick={ToggleButton}
      >
        <ArrowRight className="transition-all duration-300 group-data-[showMenu=false]:rotate-180" />
      </Button>

      <div className="flex h-screen flex-col items-center justify-between p-4">
        <nav className="mt-8 space-y-4">
          <a
            href="#"
            className="block text-center transition-all duration-300 group-data-[showMenu=true]:px-4 group-data-[showMenu=true]:text-left"
          >
            <i className="fas fa-home"></i>
            <span className="ml-2 hidden group-data-[showMenu=true]:inline">
              Home
            </span>
          </a>
          <a
            href="#"
            className="block text-center transition-all duration-300 group-data-[showMenu=true]:px-4 group-data-[showMenu=true]:text-left"
          >
            <i className="fas fa-user"></i>
            <span className="ml-2 hidden group-data-[showMenu=true]:inline">
              Perfil
            </span>
          </a>
          <a
            href="#"
            className="block text-center transition-all duration-300 group-data-[showMenu=true]:px-4 group-data-[showMenu=true]:text-left"
          >
            <i className="fas fa-cog"></i>
            <span className="ml-2 hidden group-data-[showMenu=true]:inline">
              Configurações
            </span>
          </a>
        </nav>
      </div>
    </aside>
  )
}
export default NavBar
