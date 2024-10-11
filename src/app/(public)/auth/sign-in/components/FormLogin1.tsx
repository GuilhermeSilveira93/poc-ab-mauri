'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { LoginSchema1Type } from '@/@schemas/LoginSchema'
import { Loader2 } from 'lucide-react'

import useFormLogin from '../hooks/useFormLogin1'
import FormLogin2 from './FormLogin2'

const FormLogin = () => {
  const [email, setEmail] = useState('')

  const setEmailValidado = (data: LoginSchema1Type) => {
    setEmail(data.EMAIL)
  }
  const CancelarProcesso = () => {
    setEmail('')
  }
  const { form, isSubmitting, submit } = useFormLogin({
    funcao: setEmailValidado,
  })
  if (email.length > 0) {
    return <FormLogin2 email={email} CancelarProcesso={CancelarProcesso} />
  }
  return (
    <Form {...form}>
      <form
        onSubmit={submit}
        className="mx-auto mb-5 w-full max-w-md space-y-3"
      >
        <FormField
          control={form.control}
          name="EMAIL"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="Digite seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : 'Entrar'}
        </Button>
      </form>
    </Form>
  )
}
export default FormLogin
