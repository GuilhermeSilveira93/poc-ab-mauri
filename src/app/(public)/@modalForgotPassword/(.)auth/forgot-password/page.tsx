'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { FormRecuperacaoSenha } from '@/app/(public)/auth/forgot-password/components/FormRecuperacaoSenha'
import SaqModal from '@/components/NavBar/Saq/SacModal'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog'
import { DialogTrigger } from '@/components/ui/dialog'

import { DialogTitle } from '@radix-ui/react-dialog'
import { Headset } from 'lucide-react'
const InterceptorPage = () => {
  const router = useRouter()
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="flex w-full max-w-lg flex-col items-center text-center">
        <DialogHeader className="items-center">
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
          <DialogTitle className="text-2xl font-bold leading-tight">
            Recuperação de Senha
          </DialogTitle>
        </DialogHeader>
        <FormRecuperacaoSenha />
        <hr className="w-full pb-2" />

        <DialogFooter className="text-center">
          <SaqModal>
            <DialogTrigger asChild>
              <Button variant={'ghost'}>
                <Headset className="mr-2 text-primary" />
                <p className="font-bold">Fale conosco</p>
              </Button>
            </DialogTrigger>
          </SaqModal>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default InterceptorPage
