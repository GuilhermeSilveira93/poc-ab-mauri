'use server'

import { UserAccountSchemaType } from '@/@schemas/UserAccountSchema'

export const FormularioUserAccountAction = async (
  data: UserAccountSchemaType
) => {
  console.log(data)
  return
}
