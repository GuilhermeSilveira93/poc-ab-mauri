import * as zod from 'zod'

export const LoginSchema1 = zod.object({
  EMAIL: zod
    .string({ message: 'Email é obrigatório' })
    .email({ message: 'Digite um e-mail valido' }),
})
export const LoginSchema2 = zod.object({
  SENHA: zod.string({ message: 'Email é obrigatório' }),
})
export type LoginSchema1Type = zod.infer<typeof LoginSchema1>
export type LoginSchema2Type = zod.infer<typeof LoginSchema2>
