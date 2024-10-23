import { Label } from 'rsc-daisyui'

interface FormLabelProps extends PropsWithError {
  for: FieldName
  text?: string
}

export default function FormLabel({ for: element, text, error }: FormLabelProps) {
  if (!text && !error) return null

  return (
    <Label className='py-1' htmlFor={element}>
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
