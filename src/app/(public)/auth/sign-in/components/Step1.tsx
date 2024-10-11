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
export const Step1 = ({
  setEmailValidado,
}: {
  setEmailValidado: (data: LoginSchema1Type) => void
}) => {
  const { form, isSubmitting, submit } = useFormLogin({
    funcao: setEmailValidado,
  })
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
              <FormMessage className="text-left" />
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
