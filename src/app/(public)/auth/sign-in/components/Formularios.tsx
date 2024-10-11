'use client'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { CardHeader, CardTitle } from '@/components/ui/card'

import { ChevronLeft } from 'lucide-react'

import FormLogin1 from './FormLogin'
import { FormRecuperacaoSenha } from './FormRecuperacaoSenha'

export const Formularios = () => {
  const [esqueciSenha, setEsqueciSenha] = useState(false)
  const HandleEsqueciSenha = () => {
    setEsqueciSenha((prev) => !prev)
  }
  return (
    <>
      {esqueciSenha && (
        <Button
          className="absolute left-2 top-2"
          variant={'outline'}
          onClick={HandleEsqueciSenha}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      )}

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
          {esqueciSenha ? 'Recuperação de Senha' : 'Faça seu login'}
        </CardTitle>
      </CardHeader>
      {!esqueciSenha ? (
        <FormLogin1 HandleEsqueciSenha={HandleEsqueciSenha} />
      ) : (
        <FormRecuperacaoSenha />
      )}
    </>
  )
}
