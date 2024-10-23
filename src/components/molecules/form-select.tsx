import { forwardRef } from 'react'
import { FormControl, Select } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { getLabelText } from '@/lib/utils'

interface FormSelectProps extends BaseProps<typeof Select> {
  options: string[]
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(({ options, error, name, ...rest }, ref) => {
  return (
    <FormControl className='inline-block md:w-1/2'>
      <FormLabel for={name} text={getLabelText(name)} />
      <Select
        {...rest}
        ref={ref}
        className='w-full capitalize'
        color={error && 'error'}
        id={name}
        name={name}
        size='sm'
      >
        {options.map((option, index) => (
          <option key={index} disabled={index === 0} value={option}>
            {index === 0 ? 'Select' : option}
          </option>
        ))}
      </Select>
      <FormLabel error={error} for={name} />
    </FormControl>
  )
})

FormSelect.displayName = 'FormSelect'

export default FormSelect
