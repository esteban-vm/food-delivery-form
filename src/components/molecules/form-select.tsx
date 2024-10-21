import { forwardRef, useId } from 'react'
import { FormControl, Select } from 'rsc-daisyui'
import { FormLabel } from '@/components/atoms'
import { splitCamelCase } from '@/lib/utils'

type FormSelectLabel = Extract<FormLabel, 'paymentMethod' | 'deliveryTime'>

interface FormSelectProps extends BaseProps<typeof Select, FormSelectLabel> {
  $options: string[]
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ $label, $options, $error, ...rest }, selectRef) => {
    const id = useId()

    return (
      <FormControl className='inline-block md:w-1/2'>
        <FormLabel id={id} text={`${splitCamelCase($label)}:`} />
        <Select {...rest} ref={selectRef} className='w-full capitalize ~text-sm/base' id={id}>
          {$options.map((option, index) => (
            <option key={index} disabled={index === 0} value={option}>
              {index === 0 ? 'Select' : option}
            </option>
          ))}
        </Select>
        <FormLabel error={$error} id={id} />
      </FormControl>
    )
  }
)

FormSelect.displayName = 'FormSelect'

export default FormSelect
