import { useForm } from 'react-hook-form'

import {
  RecuperacaoSenhaSchema,
  RecuperacaoSenhaSchemaType,
} from '@/@schemas/RecuperacaoSenhaSchema'
import delay from '@/utils/delay'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
type useuseFormRecuperacaoSenhaProps = {
  funcao: (data: RecuperacaoSenhaSchemaType) => void
}
const useFormRecuperacaoSenha = ({
  funcao,
}: useuseFormRecuperacaoSenhaProps) => {
  const form = useForm<RecuperacaoSenhaSchemaType>({
    mode: 'all',
    defaultValues: {
      EMAIL: '',
    },
    resolver: zodResolver(RecuperacaoSenhaSchema),
  })
  const handleSubmit = async (data: RecuperacaoSenhaSchemaType) => {
    await delay(3)
    funcao(data)
    toast.success('Redefinição enviada para seu e-mail')
    form.reset()
  }
  return {
    form,
    submit: form.handleSubmit(handleSubmit),
    isSubmitting: form.formState.isSubmitting,
  }
}
export default useFormRecuperacaoSenha
