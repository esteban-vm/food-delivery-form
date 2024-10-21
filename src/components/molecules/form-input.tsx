import { forwardRef } from 'react'
import { FormControl, Input } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { clsx, getLabelText } from '@/lib/utils'

type FormInputLabel = Exclude<FormLabel, 'paymentMethod' | 'deliveryTime' | 'address'>

interface FormInputProps extends BaseProps<typeof Input.Inside, FormInputLabel> {
  $isHalf?: boolean
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ $label, $error, $isHalf = true, placeholder = '…', type = 'text', ...rest }, inputRef) => {
    const labelText = getLabelText($label)

    return (
      <FormControl className={clsx($isHalf && 'inline-block md:w-1/2')}>
        <FormLabel for={labelText} text={labelText} />
        <Input.Inside
          {...rest}
          ref={inputRef}
          className='w-full'
          color={$error && 'error'}
          id={labelText}
          placeholder={placeholder}
          type={type}
        />
        <FormLabel error={$error} for={labelText} />
      </FormControl>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
