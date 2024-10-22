import { FaTruckFast } from 'react-icons/fa6'
import { Button, FormControl } from 'rsc-daisyui'

interface FormButtonProps {
  disabled: boolean
}

export default function FormButton(props: FormButtonProps) {
  return (
    <FormControl className='mt-4'>
      <Button
        {...props}
        className='mx-auto w-full max-w-sm font-semibold italic text-white'
        color='primary'
        size='sm'
        type='submit'
      >
        Order Now!
        <FaTruckFast />
      </Button>
    </FormControl>
  )
}
