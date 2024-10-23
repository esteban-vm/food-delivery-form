import type { Control } from 'react-hook-form'
import { useFormState } from 'react-hook-form'
import { FaTruckFast } from 'react-icons/fa6'
import { Button, FormControl } from 'rsc-daisyui'

interface FormButtonProps {
  control: Control<IFoodDeliveryForm>
}

export default function FormButton({ control }: FormButtonProps) {
  const { isSubmitting } = useFormState({ control })

  return (
    <FormControl className='pointer-events-none mt-4'>
      <Button
        className='pointer-events-auto mx-auto w-full max-w-sm font-semibold italic text-white'
        color='primary'
        disabled={isSubmitting}
        size='sm'
        type='submit'
      >
        Order Now!
        <FaTruckFast />
      </Button>
    </FormControl>
  )
}
