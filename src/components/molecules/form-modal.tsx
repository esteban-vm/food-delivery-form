'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaCreditCard, FaXmark } from 'react-icons/fa6'
import { Button, Modal } from 'rsc-daisyui'

interface FormModalProps {
  isOpen: boolean
  handleClose: () => void
}

export default function FormModal({ isOpen, handleClose }: FormModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
    }
  }, [isOpen])

  const onClose = () => {
    handleClose()
    ref.current?.close()
  }

  return mounted
    ? createPortal(
        <Modal ref={ref} onClose={handleClose}>
          <Modal.Box className='max-w-lg bg-primary-content text-primary'>
            <Button
              className='absolute right-2 top-2'
              color='ghost'
              shape='circle'
              size='xs'
              type='button'
              onClick={onClose}
            >
              <FaXmark />
            </Button>
            <h3 className='flex items-center text-lg font-semibold'>
              <FaCreditCard />
              &nbsp;<span className='italic'>Please verify the transaction</span>
            </h3>
          </Modal.Box>
        </Modal>,
        document.getElementById('portal')!
      )
    : null
}
