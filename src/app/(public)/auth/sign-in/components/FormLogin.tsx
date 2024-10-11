'use client'
import { useState } from 'react'

import { LoginSchema1Type } from '@/@schemas/LoginSchema'

import { Step1 } from './Step1'
import { Step2 } from './Step2'

type formLoginProps = {
  HandleEsqueciSenha: () => void
}

const FormLogin = ({ HandleEsqueciSenha }: formLoginProps) => {
  const [email, setEmail] = useState('')
  const setEmailValidado = (data: LoginSchema1Type) => {
    setEmail(data.EMAIL)
  }
  const CancelarProcesso = () => {
    setEmail('')
  }
  return (
    <>
      {email.length === 0 ? (
        <Step1 setEmailValidado={setEmailValidado} />
      ) : (
        <Step2 CancelarProcesso={CancelarProcesso} email={email} />
      )}
      <p className="mx-auto text-muted-foreground">
        Esqueceu sua senha?{' '}
        <span
          className="font-bold hover:cursor-pointer hover:text-blue-400 hover:underline"
          onClick={HandleEsqueciSenha}
        >
          Clique aqui
        </span>
      </p>
    </>
  )
}
export default FormLogin
