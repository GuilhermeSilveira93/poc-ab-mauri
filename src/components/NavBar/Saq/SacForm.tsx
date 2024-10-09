import { DialogClose } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { FuncaoDoFormularioSac } from '@/@actions/FormularioSacAction'
import { SacSchema, SacSchemaType } from '@/@schemas/SacSchema'
import useSacForm from '@/hooks/useSacForm'

import { Button } from '../../ui/button'

type SaqFormProps = {
  ModalState: (value: boolean) => void
}

const SaqForm = ({ ModalState }: SaqFormProps) => {
  const { form, submit } = useSacForm<SacSchemaType>({
    funcao: FuncaoDoFormularioSac,
    schema: SacSchema,
    closeModal: ModalState,
  })
  return (
    <Form {...form}>
      <form onSubmit={submit} className="space-y-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <FormField
            control={form.control}
            name="NAME"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage className="font-semibold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="EMAIL"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Digite seu email" {...field} />
                </FormControl>
                <FormMessage className="font-semibold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ASSUNTO"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="idDuvida">Dúvida</SelectItem>
                    <SelectItem value="idProblemaAcesso">
                      Problema com Acesso
                    </SelectItem>
                    <SelectItem value="idRedefinicaoSenha">
                      Redefinição de Senha
                    </SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="font-semibold" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="TEL"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Digite seu telefone"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-semibold" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="MESSAGE"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Assunto"
                  className="h-36 min-h-16 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-semibold" />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <DialogClose asChild>
            <Button variant={'outline'} className="font-bold">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" className="font-bold">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  )
}
export default SaqForm
