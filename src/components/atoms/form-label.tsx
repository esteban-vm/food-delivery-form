import type { FieldError } from 'react-hook-form'
import { Label } from 'rsc-daisyui'

interface FormLabelProps {
  for: string
  text?: string
  error?: FieldError
}

export default function FormLabel({ for: id, text, error }: FormLabelProps) {
  if (!text && !error) return null

  return (
    <Label className='py-1' htmlFor={id}>
      {error ? (
        <Label.TextAlt as='small' className='text-error'>
          {error.message}
        </Label.TextAlt>
      ) : (
        <Label.Text className='capitalize'>{text}</Label.Text>
      )}
    </Label>
  )
}
