import { forwardRef } from 'react'
import { FormControl, Select } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { getLabelText } from '@/lib/utils'

interface FormSelectProps extends BaseProps<typeof Select> {
  $options: string[]
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ $label, $options, $error, ...rest }, selectRef) => {
    const labelText = getLabelText($label)

    return (
      <FormControl className='inline-block md:w-1/2'>
        <FormLabel for={labelText} text={labelText} />
        <Select
          {...rest}
          ref={selectRef}
          className='w-full capitalize ~text-sm/base'
          color={$error && 'error'}
          id={labelText}
        >
          {$options.map((option, index) => (
            <option key={index} disabled={index === 0} value={option}>
              {index === 0 ? 'Select' : option}
            </option>
          ))}
        </Select>
        <FormLabel error={$error} for={labelText} />
      </FormControl>
    )
  }
)

FormSelect.displayName = 'FormSelect'

export default FormSelect
