import * as zod from 'zod'

export const RecuperacaoSenhaSchema = zod.object({
  EMAIL: zod
    .string({ message: 'Email é obrigatório' })
    .email({ message: 'Digite um e-mail valido' }),
})
export type RecuperacaoSenhaSchemaType = zod.infer<
  typeof RecuperacaoSenhaSchema
>
