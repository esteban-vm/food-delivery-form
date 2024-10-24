import { FaTriangleExclamation } from 'react-icons/fa6'
import { splitCamelCase } from '@/lib/utils'

interface FormSubtitleProps {
  text: Extract<FieldName, 'customerDetails' | 'checkoutDetails' | 'deliveryAddress'>
  hasError: boolean
}

export default function FormSubtitle({ text, hasError }: FormSubtitleProps) {
  return (
    <h2 className='flex items-end justify-between ~text-lg/xl'>
      <span className='font-pacifico capitalize text-primary'>{splitCamelCase(text)}</span>
      {hasError && <FaTriangleExclamation className='text-error motion-safe:animate-pulse' />}
    </h2>
  )
}
