import { forwardRef, useId } from 'react'
import { FormControl, Input } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { clsx } from '@/lib/utils'

type FormInputLabel = Exclude<keyof IFoodDeliveryForm, 'paymentMethod' | 'deliveryTime'>

interface FormInputProps extends BaseProps<typeof Input.Inside, FormInputLabel> {
  $isHalf?: boolean
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ $label, $error, $isHalf, type = 'text', ...rest }, inputRef) => {
    const id = useId()

    return (
      <FormControl className={clsx($isHalf && 'inline-block md:w-1/2')}>
        <FormLabel id={id} text={`${$label !== 'orderNumber' ? `your ${$label}` : `Order no.`}:`} />
        <Input.Inside {...rest} ref={inputRef} className='w-full' color={$error && 'error'} id={id} type={type} />
        <FormLabel error={$error} id={id} />
      </FormControl>
    )
  }
)

FormInput.displayName = 'FormField'

export default FormInput
