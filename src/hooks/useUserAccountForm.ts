import { FieldValues, useForm } from 'react-hook-form'

import { UserAccountSchemaType } from '@/@schemas/UserAccountSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as z from 'zod'
type useUserAccountFormProps<T extends FieldValues> = {
  funcao: (data: UserAccountSchemaType) => Promise<void>
  closeModal: (value: boolean) => void
  schema: z.ZodSchema<T>
}
const useUserAccountForm = <T extends FieldValues>({
  funcao,
  schema,
  closeModal,
}: useUserAccountFormProps<T>) => {
  const form = useForm<UserAccountSchemaType>({
    mode: 'all',
    defaultValues: {
      NAME: 'John Doe',
      EMAIL: 'johnDoe@hotmail.com',
    },
    resolver: zodResolver(schema),
  })
  const handleSubmit = async (data: UserAccountSchemaType) => {
    const resposta = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(
            () => funcao(data).then(() => resolve('Conta salva com sucesso!')),
            2000
          )
        } catch (error) {
          reject('erro')
        }
      })
    }
    toast.promise(resposta, {
      loading: 'Salvando dados...',
      success: (data: string) => {
        return data
      },
    })
    form.reset()
    closeModal(false)
  }
  return {
    form,
    submit: form.handleSubmit(handleSubmit),
    isSubmitting: form.formState.isSubmitting,
  }
}
export default useUserAccountForm
