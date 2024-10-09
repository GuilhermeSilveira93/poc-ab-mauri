import { DefaultValues, FieldValues, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as z from 'zod'
type useSacFormProps<T extends FieldValues> = {
  funcao: (data: T) => Promise<void>
  closeModal: (value: boolean) => void
  schema: z.ZodSchema<T>
}
const useSacForm = <T extends FieldValues>({
  funcao,
  schema,
  closeModal,
}: useSacFormProps<T>) => {
  const form = useForm<T>({
    mode: 'all',
    defaultValues: {} as DefaultValues<T>,
    resolver: zodResolver(schema),
  })
  const handleSubmit = async (data: T) => {
    const resposta = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(
            () =>
              funcao(data).then(() =>
                resolve(
                  'Mensagem enviada com sucesso. Em até 72 horas entraremos em contato.'
                )
              ),
            2000
          )
        } catch (error) {
          reject('erro')
        }
      })
    }
    toast.promise(resposta, {
      loading: 'Enviando seu Saq',
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
export default useSacForm
