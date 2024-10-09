import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { MessageCircleQuestion } from 'lucide-react'

import { Button } from '../../ui/button'
import SaqForm from './SacForm'
const SaqModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const ModalState = (value: boolean) => {
    setOpenModal(value)
  }

  return (
    <li className="grid">
      <Dialog open={openModal} onOpenChange={(e) => ModalState(e)}>
        <DialogTrigger asChild>
          <Button
            className="group/popover w-full justify-start"
            variant={'ghost'}
          >
            <MessageCircleQuestion className="h-4 w-4" />
            <span className="ml-3 transition-all duration-300 group-data-[showMenu=false]:hidden">
              SAC
            </span>
            <div className="absolute left-16 z-50 hidden rounded-md bg-yellow-300 px-2 py-1 text-black transition-all group-hover/popover:block group-data-[showMenu=true]:hidden">
              <p>SAC</p>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fale conosco</DialogTitle>
            <DialogDescription className="font-semibold">
              Entre com contato com nossa equipe de suporte para resolver
              qualquer problema.
            </DialogDescription>
          </DialogHeader>
          <SaqForm ModalState={ModalState} />
        </DialogContent>
      </Dialog>
    </li>
  )
}
export default SaqModal
