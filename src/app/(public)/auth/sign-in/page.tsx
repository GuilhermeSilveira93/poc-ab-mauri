import { Formularios } from './components/Formularios'
import SaqModal from '@/components/NavBar/Saq/SacModal'
import { Button } from '@/components/ui/button'
import { Card, CardFooter } from '@/components/ui/card'
import { DialogTrigger } from '@/components/ui/dialog'

import { Headset } from 'lucide-react'

const SignIn = () => {
  return (
    <Card className="relative flex w-full max-w-lg flex-col items-center text-center">
      <Formularios />
      <hr className="w-full pb-2" />
      <CardFooter className="pt-0">
        <SaqModal>
          <DialogTrigger asChild>
            <Button variant={'ghost'}>
              <Headset className="mr-2 text-primary" />
              <p className="font-bold">Fale conosco</p>
            </Button>
          </DialogTrigger>
        </SaqModal>
      </CardFooter>
    </Card>
  )
}
export default SignIn
