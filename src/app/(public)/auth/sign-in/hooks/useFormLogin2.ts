import { useForm } from 'react-hook-form'

import { LoginSchema2, LoginSchema2Type } from '@/@schemas/LoginSchema'
import delay from '@/utils/delay'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
type useFormLoginProps = {
  funcao: (data: LoginSchema2Type) => void
  email: string
}
const useFormLogin2 = ({ funcao }: useFormLoginProps) => {
  const form = useForm<LoginSchema2Type>({
    mode: 'all',
    defaultValues: {
      SENHA: '',
    },
    resolver: zodResolver(LoginSchema2),
  })
  const handleSubmit = async (data: LoginSchema2Type) => {
    await delay(3)
    funcao(data)
    toast.success('Login realizado com sucesso!')
    form.reset()
  }
  return {
    form,
    submit: form.handleSubmit(handleSubmit),
    isSubmitting: form.formState.isSubmitting,
  }
}
export default useFormLogin2
