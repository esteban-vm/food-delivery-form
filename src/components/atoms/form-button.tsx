import { FaPaperPlane } from 'react-icons/fa6'
import { Button, FormControl } from 'rsc-daisyui'

interface FormButtonProps {
  disabled: boolean
}

export default function FormButton(props: FormButtonProps) {
  return (
    <FormControl className='mt-4'>
      <Button
        {...props}
        className='mx-auto w-full max-w-sm font-pacifico font-extralight text-white'
        color='primary'
        size='sm'
        type='submit'
      >
        <FaPaperPlane />
        Order Now!
      </Button>
    </FormControl>
  )
}
