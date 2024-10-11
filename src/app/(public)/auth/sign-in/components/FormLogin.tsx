'use client'
import Link from 'next/link'
import { useState } from 'react'

import { LoginSchema1Type } from '@/@schemas/LoginSchema'

import { Step1 } from './Step1'
import { Step2 } from './Step2'

const FormLogin = () => {
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
        <Link
          className="font-bold hover:cursor-pointer hover:text-blue-400 hover:underline"
          href={'/auth/forgot-password'}
        >
          Clique aqui
        </Link>
      </p>
    </>
  )
}
export default FormLogin
