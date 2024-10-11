import { useForm } from 'react-hook-form'

import { LoginSchema1, LoginSchema1Type } from '@/@schemas/LoginSchema'
import delay from '@/utils/delay'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
type useFormLoginProps = {
  funcao: (data: LoginSchema1Type) => void
}
const useFormLogin1 = ({ funcao }: useFormLoginProps) => {
  const form = useForm<LoginSchema1Type>({
    mode: 'all',
    defaultValues: {
      EMAIL: '',
    },
    resolver: zodResolver(LoginSchema1),
  })
  const handleSubmit = async (data: LoginSchema1Type) => {
    await delay(3)
    funcao(data)
    toast.info('Insira suas credenciais')
    form.reset()
  }
  return {
    form,
    submit: form.handleSubmit(handleSubmit),
    isSubmitting: form.formState.isSubmitting,
  }
}
export default useFormLogin1
