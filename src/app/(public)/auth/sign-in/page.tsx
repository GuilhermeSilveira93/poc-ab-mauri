import Image from 'next/image'

import FormLogin from './components/FormLogin'
import SaqModal from '@/components/NavBar/Saq/SacModal'
import { Button } from '@/components/ui/button'
import { Card, CardFooter } from '@/components/ui/card'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { DialogTrigger } from '@/components/ui/dialog'

import { Headset } from 'lucide-react'

const SignIn = () => {
  return (
    <Card className="relative flex w-full max-w-lg flex-col items-center text-center">
      <CardHeader className="items-center">
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
        <CardTitle className="text-2xl font-bold leading-tight">
          Faça seu Login
        </CardTitle>
      </CardHeader>
      <FormLogin />
      <hr className="w-full pb-2" />
      <CardFooter className="pt-0">
        <SaqModal>
          <DialogTrigger asChild>
            <Button variant={'ghost'}>
              <Headset className="mr-2 text-primary" />
              <p className="font-bold">Fale conosco</p>
            </Button>
          </DialogTrigger>
        </SaqModal>
      </CardFooter>
    </Card>
  )
}
export default SignIn
