import * as zod from 'zod'
export const UserAccountSchema = zod.object({
  NAME: zod.string({ message: 'Nome é Obrigatório' }),
  EMAIL: zod
    .string({ message: 'Email é Obrigatório' })
    .email({ message: 'E-mail Invalido' }),
})

export type UserAccountSchemaType = zod.infer<typeof UserAccountSchema>
