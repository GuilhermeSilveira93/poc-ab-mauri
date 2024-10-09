import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex max-h-16 w-full items-center justify-between border-b bg-background px-3 sm:px-6 sm:pl-2">
      <Image
        style={{ objectFit: 'contain' }}
        className="h-16"
        alt="logo da empresa"
        width={130}
        height={45}
        src={
          'https://poc-abb.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75'
        }
      />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  )
}
export default Header
