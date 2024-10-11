'use server'
import { redirect } from 'next/navigation'

import { LoginSchema2Type } from '@/@schemas/LoginSchema'

export const SubmitFormLogin = (data: LoginSchema2Type) => {
  redirect('/')
}
