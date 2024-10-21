import { forwardRef } from 'react'
import { FormControl, Input } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { clsx, getLabelText } from '@/lib/utils'

type FormInputLabel = Exclude<FormLabel, 'paymentMethod' | 'deliveryTime' | 'address'>

interface FormInputProps extends BaseProps<typeof Input.Inside, FormInputLabel> {
  $isHalf?: boolean
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ $label, $error, $isHalf, type = 'text', ...rest }, inputRef) => {
    return (
      <FormControl className={clsx($isHalf && 'inline-block md:w-1/2')}>
        <FormLabel for={$label} text={getLabelText($label)} />
        <Input.Inside {...rest} ref={inputRef} className='w-full' color={$error && 'error'} id={$label} type={type} />
        <FormLabel error={$error} for={$label} />
      </FormControl>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
