import Image from 'next/image'

import FormLogin from './components/FormLogin1'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Headset } from 'lucide-react'

const SignIn = () => {
  return (
    <Card className="flex flex-col items-center text-center w-full max-w-lg">
      <CardHeader>
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
          Faça seu login
        </CardTitle>
      </CardHeader>
      <FormLogin />
      <CardContent>
        <p>Esqueceu sua senha? Clique aqui</p>
      </CardContent>
      <hr className="w-full" />
      <CardFooter className='p-4'>
        <Headset />
        <p className='font-bold'>fale conosco</p>
        
      </CardFooter>
    </Card>
  )
}
export default SignIn
