import type { FieldError } from 'react-hook-form'
import { Label } from 'rsc-daisyui'

interface FormLabelProps {
  id: string
  text?: string
  error?: FieldError
}

export default function FormLabel({ id, text, error }: FormLabelProps) {
  if (!text && !error) return null

  return (
    <Label htmlFor={id}>
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
