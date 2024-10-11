'use client'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import SaqForm from './SacForm'
const SaqModal = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState(false)
  const ModalState = (value: boolean) => {
    setOpenModal(value)
  }

  return (
    <li className="grid">
      <Dialog open={openModal} onOpenChange={(e) => ModalState(e)}>
        {children}
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
