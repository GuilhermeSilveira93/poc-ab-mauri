import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { FormularioUserAccountAction } from '@/@actions/FormularioUserAccountAction'
import { UserAccountSchema } from '@/@schemas/UserAccountSchema'
import useUserAccountForm from '@/hooks/useUserAccountForm'

type FormUserProps = {
  closeModal: () => void
}

const FormUser = ({ closeModal }: FormUserProps) => {
  const { form, submit } = useUserAccountForm({
    funcao: FormularioUserAccountAction,
    closeModal,
    schema: UserAccountSchema,
  })
  return (
    <Form {...form}>
      <form onSubmit={submit} className="space-y-6">
        <FormField
          control={form.control}
          name="NAME"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="EMAIL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button variant={'secondary'} className="w-full font-bold text-black">
            Cancelar
          </Button>
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default FormUser
