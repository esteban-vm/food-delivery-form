import { forwardRef } from 'react'
import { FormControl, Input } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { clsx, getLabelText } from '@/lib/utils'

interface FormInputProps extends BaseProps<typeof Input.Inside> {
  isHalf?: boolean
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ isHalf = true, error, name, placeholder = '…', type = 'text', ...rest }, ref) => {
    return (
      <FormControl className={clsx(isHalf && 'mt-1 inline-block md:w-1/2')}>
        <FormLabel for={name} text={getLabelText(name)} />
        <Input.Inside
          {...rest}
          ref={ref}
          className='w-full'
          color={error ? 'error' : 'primary'}
          id={name}
          name={name}
          placeholder={placeholder}
          size='sm'
          type={type}
        />
        <FormLabel error={error} for={name} />
      </FormControl>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
