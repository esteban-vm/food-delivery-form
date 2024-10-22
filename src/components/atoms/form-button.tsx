import { FaPaperPlane } from 'react-icons/fa6'
import { Button, FormControl } from 'rsc-daisyui'

export default function FormButton() {
  return (
    <FormControl className='mt-4'>
      <Button className='font-pacifico font-extralight text-white' color='primary' size='sm' type='submit'>
        <FaPaperPlane />
        Order Now!
      </Button>
    </FormControl>
  )
}
