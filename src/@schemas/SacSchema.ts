import * as zod from 'zod'
const RegexTel = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
export const SacSchema = zod.object({
  NAME: zod.string({ message: 'O nome é obrigatório' }),
  EMAIL: zod
    .string({ message: 'O email é obrigatório' })
    .email({ message: 'Digite um email válido' }),
  ASSUNTO: zod.string({ message: 'O assunto é obrigatório' }),
  TEL: zod
    .string({ message: 'O telefone é obrigatório' })
    .regex(RegexTel, { message: 'Número inválido' }),
  MESSAGE: zod
    .string({ message: 'A mensagem é obrigatória' })
    .min(10, { message: 'Minimo de 10 caracteres' }),
})

export type SacSchemaType = zod.infer<typeof SacSchema>
