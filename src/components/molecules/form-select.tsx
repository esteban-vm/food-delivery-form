import { forwardRef } from 'react'
import { FormControl, Select } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { getLabelText } from '@/lib/utils'

interface FormSelectProps extends BaseProps<typeof Select> {
  $options: string[]
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ $label, $options, $error, ...rest }, selectRef) => {
    return (
      <FormControl className='inline-block md:w-1/2'>
        <FormLabel for={$label} text={getLabelText($label)} />
        <Select {...rest} ref={selectRef} className='w-full capitalize' color={$error && 'error'} id={$label} size='sm'>
          {$options.map((option, index) => (
            <option key={index} disabled={index === 0} value={option}>
              {index === 0 ? 'Select' : option}
            </option>
          ))}
        </Select>
        <FormLabel error={$error} for={$label} />
      </FormControl>
    )
  }
)

FormSelect.displayName = 'FormSelect'

export default FormSelect
