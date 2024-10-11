import { Button } from '@/components/ui/button'
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { SubmitRecuperacaoSenha } from '@/@actions/FormRecuperacaoSenha'
import { Loader2 } from 'lucide-react'

import useFormRecuperacaoSenha from '../hooks/useFormRecuperacaoSenha'
export const FormRecuperacaoSenha = () => {
  const { form, isSubmitting, submit } = useFormRecuperacaoSenha({
    funcao: SubmitRecuperacaoSenha,
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
        <div className="flex gap-4">
          <Button
            variant={'outline'}
            type="button"
            className="w-full font-bold"
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="w-full font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              'Recuperar Senha'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
