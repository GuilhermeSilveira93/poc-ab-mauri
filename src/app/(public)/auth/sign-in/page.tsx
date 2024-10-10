import Image from 'next/image'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const SignIn = () => {
  return (
    <Card className="flex w-1/2 flex-col items-center text-center">
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
      <CardContent>
        <p>Esqueceu sua senha? Clique aqui</p>
      </CardContent>
      <hr className="w-full" />
      <CardFooter>fale conosco</CardFooter>
    </Card>
  )
}
export default SignIn
