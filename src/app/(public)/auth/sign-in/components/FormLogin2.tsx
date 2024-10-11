'use client'

import { Button } from '@/components/ui/button'
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { SubmitFormLogin } from '@/@actions/FormLoginAction'
import { Loader2 } from 'lucide-react'

import useFormLogin2 from '../hooks/useFormLogin2'

type FormLogin2Props = { email: string; CancelarProcesso: () => void }
const FormLogin2 = ({ email, CancelarProcesso }: FormLogin2Props) => {
  const { form, submit, isSubmitting } = useFormLogin2({
    funcao: SubmitFormLogin,
    email,
  })
  return (
    <Form {...form}>
      <form
        onSubmit={submit}
        className="mx-auto mb-5 w-full max-w-md space-y-3"
      >
        <Input placeholder={email} disabled />
        <FormField
          control={form.control}
          name="SENHA"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-5">
          <Button
            onClick={CancelarProcesso}
            variant={'outline'}
            disabled={isSubmitting}
            type="button"
            className="w-full font-bold"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-bold"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Entrar'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default FormLogin2
