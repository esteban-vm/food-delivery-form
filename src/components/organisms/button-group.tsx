import type { Control } from 'react-hook-form'
import { useFormState } from 'react-hook-form'
import { FaSprayCanSparkles, FaTruckFast } from 'react-icons/fa6'
import { FormButton, FormRow } from '@/components/atoms'

interface ButtonGroupProps {
  control: Control<IFoodDeliveryForm>
  onReset: () => void
}

export default function ButtonGroup({ control, onReset }: ButtonGroupProps) {
  const { isSubmitting } = useFormState({ control })

  return (
    <FormRow>
      <FormButton disabled={isSubmitting} type='submit'>
        Order Now!
        <FaTruckFast />
      </FormButton>
      <FormButton disabled={isSubmitting} onClick={onReset}>
        Reset
        <FaSprayCanSparkles />
      </FormButton>
    </FormRow>
  )
}
