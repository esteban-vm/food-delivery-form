import { FaTriangleExclamation } from 'react-icons/fa6'
import { formatFieldName } from '@/lib/utils'

interface FormSubtitleProps {
  text: Extract<FieldName, 'customerDetails' | 'checkoutDetails' | 'deliveryAddress'>
  isInvalid: boolean
}

export default function FormSubtitle({ text, isInvalid }: FormSubtitleProps) {
  return (
    <h2 className='flex cursor-default items-end justify-between ~text-lg/xl'>
      <span className='font-pacifico capitalize text-primary'>{formatFieldName(text)}</span>
      {isInvalid && <FaTriangleExclamation className='text-error motion-safe:animate-pulse' />}
    </h2>
  )
}
