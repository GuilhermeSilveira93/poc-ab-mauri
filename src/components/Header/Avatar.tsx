'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import FormUser from './FormUser'
const AvatarUser = () => {
  const [showFormUser, setShowFormUser] = useState(false)
  const handleFormUser = () => {
    setShowFormUser((prev) => !prev)
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hover:cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="pt-2">
          <DropdownMenuItem onClick={handleFormUser}>
            Minha Conta
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <Link href={'/auth/sign-in'}>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={showFormUser} onOpenChange={handleFormUser}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Minha conta</DialogTitle>
          </DialogHeader>
          <FormUser closeModal={handleFormUser} />
        </DialogContent>
      </Dialog>
    </>
  )
}
export default AvatarUser
