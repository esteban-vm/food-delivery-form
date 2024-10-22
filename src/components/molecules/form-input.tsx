import { forwardRef } from 'react'
import { FormControl, Input } from 'rsc-daisyui'
import uniqid from 'uniqid'
import { FormLabel } from '@/components/atoms'
import { clsx, getLabelText } from '@/lib/utils'

interface FormInputProps extends BaseProps<typeof Input.Inside> {
  $isHalf?: boolean
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ $label, $error, $isHalf = true, placeholder = '…', type = 'text', ...rest }, inputRef) => {
    const id = uniqid()

    return (
      <FormControl className={clsx($isHalf && 'inline-block md:w-1/2')}>
        <FormLabel for={id} text={getLabelText($label)} />
        <Input.Inside
          {...rest}
          ref={inputRef}
          className='w-full'
          color={$error && 'error'}
          id={id}
          placeholder={placeholder}
          size='sm'
          type={type}
        />
        <FormLabel error={$error} for={id} />
      </FormControl>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
